import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { COMPANY_INFO, NAV_LINKS } from '../data/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="relative h-20 w-20 rounded-xl overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Stallion Investment"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-white font-bold text-lg">
                {COMPANY_INFO.name}
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              {COMPANY_INFO.description}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61577081365648"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gold-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gold-600 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-gold-400 transition-colors"
                >
                  Structuration et Ingénierie de Projets
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-gold-400 transition-colors"
                >
                  Investissement et Financement
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-gold-400 transition-colors"
                >
                  Développement d'Infrastructures
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-gold-400 transition-colors"
                >
                  Conseil Stratégique Institutionnel
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-gold-400 transition-colors"
                >
                  Gestion et Exécution Opérationnelle
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-gold-400 transition-colors"
                >
                  Développement Territorial Durable
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm hover:text-gold-400 transition-colors">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-green-400 transition-colors">
                  {COMPANY_INFO.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm hover:text-gold-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{COMPANY_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} {COMPANY_INFO.fullName}. Tous droits réservés.
            </p>
            <p className="text-sm text-gray-500">
              Conçu avec excellence au <span className="text-gold-400">Tchad</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
