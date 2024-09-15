'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ActiveLink } from '../active-link/ActiveLink';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'; // Importar íconos de hamburguesa y cerrar
import { NavbarDropdown } from './NavbarDropdown';
import { LanguageSelector } from './LanguageSelector';
import styles from '../active-link/ActiveLink.module.css';

const navItems = [
  { path: '/quienes-somos', text: 'Quiénes somos' },
  { path: '/metrologia', text: 'Metrología' },
  { path: '/solicita-servicio', text: 'Solicita tú Servicio' },
];

const serviciosDropdown = [
  {
    title: 'Servicios principales',
    links: [
      { path: 'servicios/calibraciones', text: 'Servicio de Calibraciones' },
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Estado para el menú móvil
  const [selectedLanguage, setSelectedLanguage] = useState('ES');

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const handleLanguageChange = (countryCode: string) => setSelectedLanguage(countryCode);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen); // Alternar menú móvil

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md relative">
      {/* Left Section - Logo */}
      <div className="flex items-center flex-1">
        <Link href={'/'}>
          <span className="text-black font-light text-lg cursor-pointer">Ms Sinergy</span>
        </Link>
      </div>

      {/* Menu Toggle for Mobile */}
      <button
        className="md:hidden text-black"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Middle Section - Menu Items */}
      <div className={`flex-col md:flex md:flex-row items-center justify-center absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
        {/* Contenedor para los ítems del menú */}
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-8">
          {navItems.map((navItem) => (
            <ActiveLink key={navItem.path} {...navItem} />
          ))}

          {/* Dropdown Servicios */}
          <NavbarDropdown title="Servicios" links={serviciosDropdown.flatMap((section) => section.links)} />
        </div>

        {/* Right Section - Language Selector and Dark Mode Toggle */}
        <div className="flex flex-col items-center space-y-2 mt-4 md:mt-0 md:flex-row md:space-x-4">
          {/* Language Selector and Dark Mode Toggle - Combined in Mobile */}
          <div className="flex items-center">
            {/* Language Selector */}
            <LanguageSelector selected={selectedLanguage} onSelectLanguage={handleLanguageChange} />

            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="focus:outline-none">
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>

          {/* Iniciar/Registrar - Link */}
          <Link href="/iniciar" className={`${styles.link} flex items-center`}>
            Iniciar/Registrar
          </Link>
        </div>
      </div>
    </nav>
  );
};
