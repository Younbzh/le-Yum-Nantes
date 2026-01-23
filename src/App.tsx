import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight, Wrench, CheckCircle, Award, Zap, AlertCircle } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-lg">
                <Wrench className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">{siteConfig.companyName}</h1>
                <p className="text-sm text-red-400">{siteConfig.city}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-300 hover:text-red-400 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-red-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('motos')} className="text-gray-300 hover:text-red-400 transition-colors">Motos</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg">
                Contact
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 shadow-xl py-4">
              {['accueil', 'services', 'motos', 'contact'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-red-900/20 capitalize">
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
            <div className="inline-flex items-center gap-2 bg-red-900/30 px-4 py-2 rounded-full mb-6 shadow-md border border-red-700/50">
              <Wrench className="text-red-400" size={20} />
              <span className="text-sm font-medium text-gray-200">Atelier professionnel</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
              {siteConfig.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-red-400 mb-4 font-semibold">
              {siteConfig.hero.subtitle}
            </p>
            
            <p className="text-lg text-gray-300 mb-6 font-medium">
              {siteConfig.hero.tagline}
            </p>
            
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              {siteConfig.hero.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-xl flex items-center gap-2">
                <Phone size={20} />
                Prendre rendez-vous
              </a>
              <button onClick={() => scrollToSection('services')} className="bg-gray-800 text-gray-200 px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all shadow-lg border-2 border-red-700/50">
                Découvrir mes services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            {siteConfig.values.map((value, index) => (
              <div key={index} className="bg-gray-800 px-6 py-3 rounded-full shadow-md flex items-center gap-2 hover:shadow-lg transition-shadow border border-red-700/30">
                <span className="text-2xl">{value.icon}</span>
                <span className="font-medium text-gray-200">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{siteConfig.about.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-red-700/30">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Wrench className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mon atelier</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{siteConfig.about.story}</p>
              <p className="text-gray-300 leading-relaxed">{siteConfig.about.mission}</p>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-red-700/30">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mon expertise</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{siteConfig.about.expertise}</p>
              <p className="text-gray-300 leading-relaxed">{siteConfig.about.values}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{siteConfig.services.title}</h2>
            <p className="text-xl text-gray-400">{siteConfig.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.items.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-red-700/30">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-red-400 font-semibold mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.slice(0, 6).map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{siteConfig.advantages.title}</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {siteConfig.advantages.items.map((advantage, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-red-700/30 text-center">
                <div className="text-4xl mb-3">{advantage.icon}</div>
                <h3 className="font-bold text-white mb-2">{advantage.title}</h3>
                <p className="text-sm text-gray-400">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motos */}
      <section id="motos" className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{siteConfig.motorcycles.title}</h2>
            <p className="text-xl text-gray-400">{siteConfig.motorcycles.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {siteConfig.motorcycles.types.map((type, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 shadow-lg border border-red-700/30">
                <div className="text-5xl mb-4 text-center">{type.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">{type.name}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {type.examples.map((example, idx) => (
                    <span key={idx} className="bg-red-900/30 text-red-300 px-3 py-1 rounded-full text-xs border border-red-700/50">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Marques acceptées</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {siteConfig.motorcycles.brands.map((brand, index) => (
                <span key={index} className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{siteConfig.process.title}</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {siteConfig.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-800/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-red-700/30 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < siteConfig.process.steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-red-600" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{siteConfig.zone.title}</h2>
            <p className="text-2xl font-bold text-red-400 mb-8">📍 {siteConfig.zone.center}</p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 shadow-xl border border-red-700/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Villes principales</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {siteConfig.zone.mainCities.map((city, index) => (
                <div key={index} className="bg-red-900/20 px-4 py-3 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border border-red-700/30">
                  <span className="font-medium text-gray-200">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Questions fréquentes</h2>
          </div>

          <div className="space-y-6">
            {siteConfig.faq.map((item, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 shadow-lg border border-red-700/30">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-red-400 flex-shrink-0">Q:</span>
                  {item.question}
                </h3>
                <p className="text-gray-300 leading-relaxed pl-8">
                  <span className="text-red-400 font-bold">R:</span> {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{siteConfig.contact.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-red-700/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Localisation</h3>
                    <p className="text-gray-300">{siteConfig.contact.address.city}</p>
                    <p className="text-gray-400 text-sm mt-2">{siteConfig.contact.address.region}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Téléphone</h3>
                    <p className="text-white text-lg font-semibold">{siteConfig.contact.phone}</p>
                    <p className="text-sm text-red-100 mt-2">Appelez pour prendre rendez-vous</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-red-700/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Email</h3>
                    <p className="text-gray-300">{siteConfig.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 shadow-xl mb-6">
                <h3 className="text-2xl font-bold text-white mb-6">{siteConfig.contact.schedule.title}</h3>
                {siteConfig.contact.schedule.details.map((detail, index) => (
                  <p key={index} className="mb-2 text-white text-lg">{detail}</p>
                ))}
                <p className="mt-6 text-red-100 italic text-sm">{siteConfig.contact.schedule.note}</p>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-red-700/30">
                <h3 className="text-2xl font-bold text-white mb-4">Pourquoi me choisir ?</h3>
                <ul className="space-y-3">
                  {siteConfig.highlights.slice(0, 6).map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
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
      <footer className="bg-black text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-red-400">{siteConfig.companyName}</h3>
              <p className="text-gray-300 mb-4">{siteConfig.tagline}</p>
              <p className="text-gray-400">{siteConfig.contact.address.city}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-red-400">Navigation</h3>
              <div className="space-y-2">
                {['accueil', 'services', 'motos', 'contact'].map(section => (
                  <button key={section} onClick={() => scrollToSection(section)} className="block text-gray-300 hover:text-red-400 transition-colors capitalize">
                    {section}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-red-400">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p className="font-bold text-lg">{siteConfig.contact.phone}</p>
                <p>{siteConfig.contact.email}</p>
                <p className="text-sm mt-4">{siteConfig.contact.address.city}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 {siteConfig.companyName} - {siteConfig.owner} - Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}