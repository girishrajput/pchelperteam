"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Define the menu items in a simple array for easy maintenance
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/About' },
    { name: 'Download', href: '/download' },
    { name: 'Our Portals', href: '/portals' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/Contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white text-black shadow-md">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/images/pc-helper-logo.png" 
            alt="Logo" 
            width={140} 
            height={45} 
            priority 
            className="object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation - Simple UL LI */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="hover:text-red-600 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Call to Action Button */}
            <li>
              <Link 
                href="/contact" 
                className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-all font-bold"
              >
                Book Consultation
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 top-[73px] bg-white z-40 transition-transform duration-300 md:hidden
        ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <nav className="p-6">
          <ul className="flex flex-col gap-6 font-bold text-xl text-gray-800">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-gray-100 pb-2">
                <Link href={link.href} onClick={() => setIsMobileOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                href="/contact" 
                onClick={() => setIsMobileOpen(false)}
                className="block bg-red-600 text-white text-center py-4 rounded-lg mt-4 shadow-lg active:scale-95 transition-transform"
              >
                Book Consultation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;