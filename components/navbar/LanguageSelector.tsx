'use client';
import { useState, useRef, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';

interface LanguageSelectorProps {
  selected: string;
  onSelectLanguage: (countryCode: string) => void;
}

export const LanguageSelector = ({ selected, onSelectLanguage }: LanguageSelectorProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleClickOutside = (event: MouseEvent) => {
    if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div ref={languageDropdownRef} className="relative">
      <div className="cursor-pointer flex items-center" onClick={toggleDropdown}>
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
      {showDropdown && (
        <div className="absolute right-0 mt-1 bg-white border border-gray-200 shadow-lg z-10 w-32 p-2 rounded">
          <ul>
            {['GB', 'PT', 'ES'].map((countryCode) => (
              <li
                key={countryCode}
                className="py-1 cursor-pointer hover:bg-gray-100 flex items-center"
                onClick={() => onSelectLanguage(countryCode)}
              >
                <ReactCountryFlag
                  countryCode={countryCode}
                  svg
                  style={{ width: '16px', height: '16px', marginRight: '8px' }}
                />
                {countryCode === 'GB' ? 'Inglés' : countryCode === 'PT' ? 'Portugués' : 'Español'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
