 "use client";
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from "../public/logo.jpeg";

export function Navbar() {
  const [activeLink, setActiveLink] = useState('/');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMobileMenuOpen(false); // Close menu on link click
  };

  const handleDropDown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logo}
              alt="DB UPVC & Locks"
              width={60}
              height={60}
              className="h-15 rounded-2xl"
            />
          </Link>
          <div className=" hidden lg:flex items-center gap-6 text-lg mb-4 lg:mb-0">
            <Link href="tel:+44 7548 856263" className="flex items-center gap-2 text-green-600 hover:text-green-700">
              <Phone className="h-5 w-5" />
              <span>+44 7548 856263</span>
            </Link>
            <Link href="mailto:Email Us" className="flex items-center gap-2 text-green-600 hover:text-green-700">
              <Mail className="h-5 w-5" />
              <span>Email Us</span>
            </Link>
          </div>
          {/* Hamburger Menu Icon */}
          <button
            className="lg:hidden text-gray-700 hover:text-gray-900"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Navigation Links */}
          <nav
            className={`lg:flex lg:items-center lg:gap-6 fixed top-16 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:static lg:w-auto lg:bg-transparent lg:shadow-none lg:transform-none ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex flex-col lg:flex-row items-center lg:gap-6 mt-20 lg:mt-0">
              <Link
                href="/"
                className={`px-5 py-3 text-lg font-medium rounded-md ${
                  activeLink === '/'
                    ? 'bg-cyan-600 text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => handleLinkClick('/')}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-5 py-3 text-lg font-medium rounded-md ${
                  activeLink === '/about'
                    ? 'bg-cyan-600 text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => handleLinkClick('/about')}
              >
                About Us
              </Link>

              {/* Our Services Dropdown */}
              <div className="relative">
                <button
                  className="px-5 py-3 text-lg font-medium rounded-md text-gray-900 hover:bg-cyan-600"
                  onClick={handleDropDown}
                >
                  Our Services
                </button>
                {isDropdownVisible && (
                  <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md">
                    <Link
                      href="/services/upvc-windows-repair"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      onClick={() => handleLinkClick('/services/upvc-windows-repair')}
                    >
                      UPVC Windows Repair
                    </Link>
                    <Link
                      href="/services/locksmith-services"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      onClick={() => handleLinkClick('/services/locksmith-services')}
                    >
                      Locksmith Services
                    </Link>
                    <Link
                      href="/services/glazing-repairs"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      onClick={() => handleLinkClick('/services/glazing-repairs')}
                    >
                      Glazing Repairs
                    </Link>
                  </div>
                )}

              </div>

              <Link
                href="/news"
                className={`px-5 py-3 text-lg font-medium rounded-md ${
                  activeLink === '/news'
                    ? 'bg-cyan-600 text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => handleLinkClick('/news')}
              >
                Recent News
              </Link>
              <Link
                href="/contact"
                className={`px-5 py-3 text-lg font-medium rounded-md ${
                  activeLink === '/contact'
                    ? 'bg-cyan-600 text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => handleLinkClick('/contact')}
              >
                Contact Us
              </Link>
              <div className="   lg:hidden  items-center gap-6 text-lg mb-4 lg:mb-0">
            <Link href="tel:07522293432" className="flex items-center gap-2 text-green-600 hover:text-green-700">
              <Phone className="h-5 w-5" />
              <span>+44 7548 856263</span>
            </Link>
            <Link href="mailto:Email Us" className="flex items-center gap-2 text-green-600 hover:text-green-700">
              <Mail className="h-5 w-5" />
              <span>Email Us</span>
            </Link>
          </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
