import { useState } from 'react'
import logo from './assets/logo-text.png'
import hamburger from './assets/hamburger.png'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Navbar */}
        <div className="flex h-16 items-center sm:h-20">

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mr-5 flex items-center md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <img
              src={hamburger}
              alt="Menu"
              className="h-4 w-5 object-contain"
            />
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Dev Stack"
              className="h-8 w-auto sm:h-10"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="ml-auto hidden items-center gap-6 md:flex lg:gap-8">

            <a
              href="#"
              className="font-medium text-pink-600"
            >
              Home
            </a>

            <a
              href="#"
              className="text-gray-600 transition hover:text-pink-600"
            >
              Technologies
            </a>

            <a
              href="#"
              className="text-gray-600 transition hover:text-pink-600"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-gray-600 transition hover:text-pink-600"
            >
              About
            </a>

            <a
              href="#"
              className="text-gray-600 transition hover:text-pink-600"
            >
              Contact
            </a>

          </div>

          {/* Authentication */}
          <div className="ml-auto flex items-center gap-3 md:ml-8 sm:gap-5">

            <button className="text-sm text-gray-700 transition hover:text-pink-600 sm:text-base">
              Sign In
            </button>

            <button className="rounded-full bg-pink-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-pink-700 sm:px-6 sm:py-3 sm:text-sm">
              Sign Up
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 py-4 md:hidden">

            <div className="flex flex-col gap-1">

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 font-medium text-pink-600 hover:bg-gray-50"
              >
                Home
              </a>

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-gray-600 hover:bg-gray-50"
              >
                Technologies
              </a>

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-gray-600 hover:bg-gray-50"
              >
                Projects
              </a>

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-gray-600 hover:bg-gray-50"
              >
                About
              </a>

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-gray-600 hover:bg-gray-50"
              >
                Contact
              </a>

            </div>

          </div>
        )}

      </div>
    </nav>
  )
}

export default Nav