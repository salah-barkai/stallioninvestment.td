import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react'
import { COMPANY_INFO } from '../data/constants'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gold-900 via-black to-gold-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6"
          >
            <Mail className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-semibold tracking-wider">CONTACT</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">
              Contactez-Nous
            </span>
          </motion.h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500" />
            <span className="text-gold-400 font-medium">Collaborons ensemble</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-white max-w-3xl mx-auto"
          >
            Prêt à concrétiser votre <span className="bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent font-semibold">vision</span> ? Notre équipe d'experts est à votre disposition pour transformer vos projets en <span className="text-gold-400 font-semibold">réalité</span>.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 -mt-8 bg-gradient-to-br from-white via-gold-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, title: 'Adresse', content: COMPANY_INFO.address },
              { icon: Phone, title: 'Téléphone', content: COMPANY_INFO.phoneDisplay, href: `tel:${COMPANY_INFO.phone}` },
              { icon: Mail, title: 'Email', content: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
              { icon: Clock, title: 'Horaires', content: COMPANY_INFO.hours },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gold-600 to-gold-800 rounded-xl flex items-center justify-center mb-4 border border-gold-500/50">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                {item.href ? (
                  <a 
                    href={item.href} 
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 hover:text-gold-600 transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">Formulaire</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                  Parlons de votre <span className="text-gold-600">Projet</span>
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Que vous soyez <span className="text-gold-600 font-medium">investisseur</span>, <span className="text-gold-600 font-medium">institution</span> ou <span className="text-gold-600 font-medium">partenaire</span>, nous sommes prêts à étudier votre projet. Remplissez le formulaire et nous vous répondrons sous <span className="text-gold-600 font-semibold">24 heures</span>.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Envoyé !</h3>
                  <p className="text-green-700">
                    Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom Complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                        placeholder="+235 XX XX XX XX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="construction">Construction</option>
                        <option value="achat">Achat Immobilier</option>
                        <option value="location">Location</option>
                        <option value="installation">Installation</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-700 text-white px-8 py-4 rounded-full font-semibold hover:from-gold-700 hover:to-gold-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-gold-500/30"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer le Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-full min-h-[400px]"
            >
              <div className="bg-gray-100 rounded-3xl h-full min-h-[400px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-100 to-gray-100" />
                <div className="relative text-center p-8">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-10 h-10 text-gold-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{COMPANY_INFO.address}</h3>
                  <p className="text-gray-600 mb-4">Au cœur de N'Djamena</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold-600 font-medium hover:underline"
                  >
                    Voir sur Google Maps
                    <MapPin className="w-4 h-4" />
                  </a>
                </div>
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                                    linear-gradient(to bottom, #000 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gradient-to-br from-white via-gold-50/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100 text-gold-700 text-sm font-semibold mb-4">
              <CheckCircle2 className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Questions <span className="text-gold-600">Fréquentes</span>
            </h2>
            <p className="text-gray-600">
              Trouvez rapidement des réponses à vos interrogations
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Quels types de projets développez-vous ?",
                a: "Nous intervenons dans les infrastructures, l'aviation, le transport, l'immobilier, l'hôtellerie, l'agriculture et les ressources naturelles. Notre expertise couvre toute la chaîne de valeur : conception, financement, construction et exploitation."
              },
              {
                q: "Comment puis-je proposer un partenariat ?",
                a: "Contactez-nous via le formulaire en ligne ou par téléphone. Notre équipe d'affaires analysera votre projet et vous proposera un rendez-vous sous 48 heures pour discuter des modalités de collaboration."
              },
              {
                q: "Quels sont les délais moyens de réalisation ?",
                a: "Les délais varient selon la complexité du projet. Un projet immobilier prend généralement 12 à 18 mois, tandis qu'une infrastructure majeure peut prendre 24 à 36 mois. Nous établissons un planning détaillé avec jalons clairs avant chaque lancement."
              },
              {
                q: "Acceptez-vous des projets en partenariat public-privé (PPP) ?",
                a: "Absolument. Les PPP constituent notre cœur de métier. Nous structurons des partenariats avec les États et institutions pour financer, construire et exploiter des infrastructures stratégiques. Notre équipe juridique et financière vous accompagne à chaque étape."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-gold-200 transition-all relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-400 to-gold-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gold-700 transition-colors">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
