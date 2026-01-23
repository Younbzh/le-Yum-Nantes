import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight, Wrench, Clock, CheckCircle, TrendingUp, Zap, Award, AlertCircle } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <Wrench className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{siteConfig.companyName}</h1>
                <p className="text-sm text-blue-600">{siteConfig.tagline}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('zone')} className="text-gray-700 hover:text-blue-600 transition-colors">Zone</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg">
                Contact
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4">
              {['accueil', 'services', 'zone', 'contact'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 capitalize">
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="accueil" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-md border border-blue-200">
              <Wrench className="text-blue-600" size={20} />
              <span className="text-sm font-medium text-gray-700">Service mobile professionnel</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent">
              {siteConfig.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-600 mb-4 font-semibold">
              {siteConfig.hero.subtitle}
            </p>
            
            <p className="text-lg text-orange-600 mb-6 font-medium">
              🚚 {siteConfig.hero.tagline}
            </p>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              {siteConfig.hero.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl flex items-center gap-2">
                <Phone size={20} />
                {siteConfig.contact.phone}
              </a>
              <button onClick={() => scrollToSection('services')} className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg border-2 border-blue-200">
                Découvrir mes services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            {siteConfig.values.map((value, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-2 hover:shadow-lg transition-shadow border border-gray-200">
                <span className="text-2xl">{value.icon}</span>
                <span className="font-medium text-gray-700">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{siteConfig.about.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Wrench className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Notre histoire</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{siteConfig.about.story}</p>
              <p className="text-gray-600 leading-relaxed">{siteConfig.about.mission}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mon expertise</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{siteConfig.about.expertise}</p>
              <p className="text-gray-600 leading-relaxed">{siteConfig.about.mobility}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{siteConfig.services.title}</h2>
            <p className="text-xl text-gray-600">{siteConfig.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.items.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-blue-100">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-blue-600 font-semibold mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.slice(0, 5).map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camion-atelier */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{siteConfig.workshop.title}</h2>
            <p className="text-xl">{siteConfig.workshop.description}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {siteConfig.workshop.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="text-orange-400 flex-shrink-0" size={20} />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{siteConfig.advantages.title}</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {siteConfig.advantages.items.map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-100 text-center">
                <div className="text-4xl mb-3">{advantage.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-sm text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Véhicules */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{siteConfig.vehicles.title}</h2>
            <p className="text-xl text-gray-600">{siteConfig.vehicles.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {siteConfig.vehicles.types.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="text-6xl mb-4 text-center">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{type.name}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {type.examples.map((example, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 shadow-xl text-white text-center">
            <CheckCircle className="mx-auto mb-4" size={48} />
            <p className="text-2xl font-bold">{siteConfig.vehicles.allAges}</p>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{siteConfig.process.title}</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {siteConfig.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-blue-100 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < siteConfig.process.steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-blue-400" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section id="zone" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{siteConfig.zone.title}</h2>
            <p className="text-xl text-gray-600 mb-2">{siteConfig.zone.description}</p>
            <p className="text-2xl font-bold text-blue-600">📍 {siteConfig.zone.radius} autour de {siteConfig.zone.center}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Villes principales</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {siteConfig.zone.mainCities.map((city, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-3 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <span className="font-medium text-gray-700">{city}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 shadow-xl text-white text-center">
            <AlertCircle className="mx-auto mb-3" size={32} />
            <p className="text-lg font-semibold">{siteConfig.zone.note}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
          </div>

          <div className="space-y-6">
            {siteConfig.faq.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg border border-blue-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-blue-600 flex-shrink-0">Q:</span>
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-8">
                  <span className="text-orange-600 font-bold">R:</span> {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{siteConfig.contact.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Adresse</h3>
                    <p className="text-gray-700">{siteConfig.contact.address.street}</p>
                    <p className="text-gray-700">{siteConfig.contact.address.city}</p>
                    <p className="text-gray-600 text-sm mt-2">{siteConfig.contact.address.region}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-lg text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Téléphone</h3>
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="text-2xl font-bold hover:text-orange-300 transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                    <p className="text-sm text-blue-100 mt-2">Appelez-moi pour prendre rendez-vous</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700">{siteConfig.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 shadow-xl text-white mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="flex-shrink-0" size={32} />
                  <h3 className="text-2xl font-bold">{siteConfig.contact.schedule.title}</h3>
                </div>
                {siteConfig.contact.schedule.details.map((detail, index) => (
                  <p key={index} className="mb-2 text-lg">{detail}</p>
                ))}
                <p className="mt-6 text-orange-100 italic text-sm">{siteConfig.contact.schedule.note}</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi me choisir ?</h3>
                <ul className="space-y-3">
                  {siteConfig.highlights.slice(0, 6).map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">{siteConfig.companyName}</h3>
              <p className="text-gray-300 mb-4">{siteConfig.tagline}</p>
              <p className="text-gray-400">{siteConfig.contact.address.city}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Navigation</h3>
              <div className="space-y-2">
                {['accueil', 'services', 'zone', 'contact'].map(section => (
                  <button key={section} onClick={() => scrollToSection(section)} className="block text-gray-300 hover:text-blue-400 transition-colors capitalize">
                    {section}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p className="font-bold text-lg">{siteConfig.contact.phone}</p>
                <p>{siteConfig.contact.email}</p>
                <p className="text-sm mt-4">{siteConfig.contact.address.street}</p>
                <p className="text-sm">{siteConfig.contact.address.city}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 {siteConfig.companyName} - Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}