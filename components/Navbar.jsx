 "use client"
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import logo from "../public/logo.png"
export function Navbar() {
  const [activeLink, setActiveLink] = useState('/')
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const handleLinkClick = (path) => {
    setActiveLink(path)
  }
const handleDropDown=()=>{
     setIsDropdownVisible(!isDropdownVisible)
}
  return (
    <header className="bg-white shadow-sm lg:block">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between py-4">
          {/* Top Bar with Contact Info */}
          <div className="flex items-center gap-6 text-sm mb-4 lg:mb-0">
            <Link href="tel:07522293432" className="flex items-center gap-2 text-green-600 hover:text-green-700">
              <Phone className="h-4 w-4" />
              <span>07522 293432</span>
            </Link>
            <Link href="mailto:Email Us" className="flex items-center gap-2 text-green-600 hover:text-green-700">
              <Mail className="h-4 w-4" />
              <span>Email Us</span>
            </Link>
          </div>

          {/* Logo and Navigation */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <Link href="/" className="flex-shrink-0">
              <Image
                src= {logo}
                alt="DB UPVC & Locks"
                width={60}
                height={60}
                className="h-15"
              />
            </Link>
            <nav className="flex items-center gap-4">
              <Link
                href="/"
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeLink === '/' ? 'bg-cyan-600 text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => handleLinkClick('/')}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeLink === '/about' ? 'bg-cyan-600 text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => handleLinkClick('/about')}
              >
                About Us
              </Link>

              {/* Our Services Dropdown */}
              <div
                className="relative"
                 onClick={handleDropDown}
               
              >
                <div
              
                  className="px-4 py-2 text-sm font-medium rounded-md 
                 text-gray-900 hover:text-gray-900 hover:bg-cyan-600"
              
                  onClick={() => handleLinkClick('/services')}
                >
                  Our Services
                </div>
                {isDropdownVisible && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
          <Link
            href="/services/upvc-windows-repair"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            UPVC Windows Repair
          </Link>
          <Link
            href="/services/locksmith-services"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Locksmith Services
          </Link>
          <Link
            href="/services/glazing-repairs"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Glazing Repairs
          </Link>
        </div>
      )}
              </div>

              <Link
                href="/news"
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeLink === '/news' ? 'bg-cyan-600 text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => handleLinkClick('/news')}
              >
                Recent News
              </Link>
              <Link
                href="/contact"
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeLink === '/contact' ? 'bg-cyan-600 text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => handleLinkClick('/contact')}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
