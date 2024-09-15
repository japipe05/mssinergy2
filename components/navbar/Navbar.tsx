'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ActiveLink } from '../active-link/ActiveLink';
import { FaMoon, FaSun } from 'react-icons/fa';
import ReactCountryFlag from 'react-country-flag';
import styles from '../active-link/ActiveLink.module.css'; // Importar los estilos

const navItems = [
  { path: '/quienes-somos', text: 'Quiénes somos' },
  { path: '/metrologia', text: 'Metrología' },
  { path: '/solicita-servicio', text: 'Solicita tú Servicio' },
];

const serviciosDropdown = [
  {
    title: 'Servicios principales',
    links: [
      { path: '/calibraciones', text: 'Servicio de Calibraciones' },
      { path: '/laboratorio-temperatura', text: 'Laboratorio de temperatura' },
      { path: '/laboratorio-humedad', text: 'Laboratorio de humedad relativa' },
      { path: '/calificaciones', text: 'Servicio de calificaciones' },
      { path: '/calificacion-sistemas', text: 'Calificación de sistemas de apoyo crítico' },
    ]
  },
  {
    title: 'Servicios secundarios',
    links: [
      { path: '/calificaciones-isotermicos', text: 'Calificaciones isotérmicos' },
      { path: '/mapeos-termicos', text: 'Mapeos térmicos' },
      { path: '/calificacion-vehiculos', text: 'Calificación de vehículos' },
      { path: '/esterilizaciones', text: 'Esterilizaciones' },
      { path: '/consultoria', text: 'Servicio de consultoría' },
      { path: '/clientes', text: 'Nuestros principales clientes' },
    ]
  }
];

export const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selected, setSelected] = useState('ES');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  // Referencias para los menús desplegables
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref para el menú desplegable de servicios
  const languageDropdownRef = useRef<HTMLDivElement>(null); // Ref para el menú desplegable de idiomas

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleLanguageChange = (countryCode: string) => {
    setSelected(countryCode);
    setShowLanguageDropdown(false);
  };

  // Maneja los clics fuera del dropdown de servicios
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false); // Cierra el menú si el clic es fuera del menú
    }

    if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
      setShowLanguageDropdown(false); // Cierra el menú de idiomas si el clic es fuera del menú
    }
  };

  useEffect(() => {
    if (isDropdownOpen || showLanguageDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup: Eliminar el event listener cuando el componente se desmonte o el dropdown se cierre
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen, showLanguageDropdown]);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md relative">
      {/* Left Section - Logo */}
      <div className="flex items-center">
        <Link href={'/'}>
          <span className="text-black font-light text-lg cursor-pointer">Ms Sinergy</span>
        </Link>
      </div>

      {/* Middle Section - Menu Items */}
      <div className="flex items-center space-x-8">
        {navItems.map((navItem) => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))}

        {/* Dropdown Servicios */}
        <div ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className={`${styles.link} transition-all font-light`} // Aplica el estilo de enlace
          >
            Servicios
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 top-full mt-2 bg-white border-t border-gray-200 shadow-lg z-10 p-6 w-screen">
              <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
                {serviciosDropdown.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-semibold text-gray-700 mb-2">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.path}>
                          <Link href={link.path} className={`${styles.link} flex items-center`}>
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Section - Language Selector and Dark Mode Toggle */}
      <div className="flex items-center space-x-4">
        {/* Language Selector - Flag and Dropdown */}
        <div ref={languageDropdownRef} className="relative">
          <div className={`cursor-pointer relative flex items-center`} onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}>
            <ReactCountryFlag
              countryCode={selected}
              svg
              style={{
                width: '24px',
                height: '24px',
                marginRight: '8px',
              }}
            />
          </div>

          {/* Language Dropdown Menu */}
          {showLanguageDropdown && (
            <div className="absolute right-0 mt-1 bg-white border border-gray-200 shadow-lg z-10 w-32 p-2 rounded">
              <ul>
                <li className="py-1 cursor-pointer hover:bg-gray-100 flex items-center" onClick={() => handleLanguageChange('GB')}>
                  <ReactCountryFlag countryCode="GB" svg style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Inglés
                </li>
                <li className="py-1 cursor-pointer hover:bg-gray-100 flex items-center" onClick={() => handleLanguageChange('PT')}>
                  <ReactCountryFlag countryCode="PT" svg style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Portugués
                </li>
                <li className="py-1 cursor-pointer hover:bg-gray-100 flex items-center" onClick={() => handleLanguageChange('ES')}>
                  <ReactCountryFlag countryCode="ES" svg style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Español
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Dark Mode Toggle */}
        <span className={`flex items-center`}>
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </span>

        {/* Iniciar/Registrar - Link */}
        <Link href="/iniciar" className={`${styles.link} flex items-center`}>
          Iniciar/Registrar
        </Link>
      </div>
    </nav>
  );
};
