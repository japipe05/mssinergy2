'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from '../active-link/ActiveLink.module.css';
interface DropdownProps {
  title: string;
  links: Array<{ path: string; text: string }>;
}

export const NavbarDropdown = ({ title, links }: DropdownProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div ref={dropdownRef} >
      <button onClick={toggleDropdown} className="transition-all font-light text-black">
        {title}
      </button>
      {isDropdownOpen && (
        <div className="absolute left-0 top-full mt-2 bg-white border-t border-gray-200 shadow-lg z-10 p-6 w-screen">
          <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
            {links.map((link) => (
              <div key={link.path}>
                <Link href={link.path}  className={`${styles.link}`}>
                  {link.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
