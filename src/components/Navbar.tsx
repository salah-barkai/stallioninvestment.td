import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '../lib/utils'
import { NAV_LINKS, COMPANY_INFO } from '../data/constants'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-shadow duration-300',
        isScrolled ? 'shadow-lg' : 'shadow-md'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Stallion Investment — Accueil">
            <div className="relative h-20 w-20 lg:h-24 lg:w-24 overflow-hidden">
              <img
                src="/logo.png"
                alt="Stallion Investment"
                className="h-full w-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-gold-600',
                  location.pathname === link.href ? 'text-gold-600' : 'text-gray-700'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-gold-600"
            >
              <Phone className="w-4 h-4" />
              {COMPANY_INFO.phoneDisplay}
            </a>
            <Link
              to="/contact"
              className="bg-gold-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gold-700 transition-all border border-gold-500"
            >
              Nous Contacter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-900 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="px-4 py-6 space-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                location.pathname === link.href
                  ? 'bg-gold-50 text-gold-700'
                  : 'text-gray-700 hover:bg-gray-50'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 px-4 py-3 text-gray-700"
            >
              <Phone className="w-4 h-4" />
              {COMPANY_INFO.phoneDisplay}
            </a>
            <Link
              to="/contact"
              className="block mx-4 mt-2 bg-gold-600 text-white px-5 py-3 rounded-lg text-center font-medium hover:bg-gold-700 border border-gold-500"
            >
              Nous Contacter
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
