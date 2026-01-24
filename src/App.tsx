import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight, Smartphone, CheckCircle, Clock, Award, Zap, Star, TrendingUp, Shield } from 'lucide-react';
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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-pulse">
                <Smartphone className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">{siteConfig.companyName}</h1>
                <p className="text-sm text-cyan-400">⚡ Réparation Express</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-300 hover:text-cyan-400 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-cyan-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('avis')} className="text-gray-300 hover:text-cyan-400 transition-colors">Avis</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/30">
                Contact
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 shadow-xl py-4 border-t border-cyan-500/20">
              {['accueil', 'services', 'avis', 'contact'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-cyan-400 capitalize">
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="accueil" className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 px-6 py-3 rounded-full mb-6 shadow-lg border border-cyan-500/30 backdrop-blur-sm">
              <Zap className="text-cyan-400 animate-pulse" size={24} />
              <span className="text-lg font-bold text-cyan-400">{siteConfig.hero.tagline}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              {siteConfig.companyName}
            </h1>
            
            <p className="text-2xl md:text-3xl text-white mb-4 font-bold">
              {siteConfig.hero.subtitle}
            </p>
            
            <p className="text-lg text-orange-400 mb-6 font-semibold">
              🚀 {siteConfig.hero.urgentRepair}
            </p>
            
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              {siteConfig.hero.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/50 flex items-center gap-2 transform hover:scale-105">
                <Phone size={20} />
                {siteConfig.contact.phone}
              </a>
              <button onClick={() => scrollToSection('services')} className="bg-gray-800 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all shadow-lg border border-cyan-500/30">
                Découvrir nos services
              </button>
            </div>

            {/* Express Repair Badge */}
            <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="text-cyan-400" size={32} />
                <h3 className="text-3xl font-bold text-white">{siteConfig.expressRepair.title}</h3>
              </div>
              <p className="text-cyan-400 text-xl font-bold mb-2">{siteConfig.expressRepair.subtitle}</p>
              <p className="text-gray-300 mb-6">{siteConfig.expressRepair.description}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {siteConfig.expressRepair.services.map((service, index) => (
                  <span key={index} className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 px-4 py-2 rounded-full text-cyan-300 font-semibold border border-cyan-500/30">
                    {service}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-6 italic">{siteConfig.expressRepair.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-4 bg-gray-800/30 border-y border-cyan-500/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            {siteConfig.values.map((value, index) => (
              <div key={index} className="bg-gray-800/50 px-6 py-3 rounded-full shadow-md flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/20 transition-all border border-gray-700 hover:border-cyan-500/50 transform hover:scale-105">
                <span className="text-2xl">{value.icon}</span>
                <span className="font-medium text-gray-300">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{siteConfig.services.title}</h2>
            <p className="text-xl text-gray-400">{siteConfig.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.services.categories.map((category, index) => (
              <div key={index} className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 text-white`}>
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-white/90 mb-6 font-medium">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-white/80 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Types */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{siteConfig.repairTypes.title}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {siteConfig.repairTypes.types.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all text-center border border-gray-700 hover:border-cyan-500/50 transform hover:scale-105">
                <div className="text-5xl mb-3">{type.icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{type.name}</h3>
                <div className="bg-cyan-500/20 px-3 py-1 rounded-full inline-block">
                  <span className="text-xs text-cyan-400 font-semibold">⚡ {type.time}</span>
                </div>
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
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all hover:-translate-y-2 border border-gray-700 hover:border-cyan-500/50 text-center">
                <div className="text-4xl mb-3">{advantage.icon}</div>
                <h3 className="font-bold text-white mb-2">{advantage.title}</h3>
                <p className="text-sm text-gray-400">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section id="avis" className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-6 py-3 rounded-full mb-6 shadow-lg border border-yellow-500/30">
              <Star className="text-yellow-400 fill-yellow-400" size={24} />
              <span className="text-lg font-bold text-yellow-400">{siteConfig.testimonials.subtitle}</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">{siteConfig.testimonials.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.testimonials.reviews.map((review, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-700 hover:border-yellow-500/50 transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-4 italic">"{review.text}"</p>
                <p className="text-cyan-400 font-semibold">— {review.name}</p>
              </div>
            ))}
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
                <div className="bg-gray-800/50 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all border border-gray-700 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg shadow-cyan-500/50">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < siteConfig.process.steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-cyan-500/50" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Questions fréquentes</h2>
          </div>

          <div className="space-y-6">
            {siteConfig.faq.map((item, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 shadow-lg border border-gray-700 hover:border-cyan-500/50 transition-all">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-cyan-400 flex-shrink-0">Q:</span>
                  {item.question}
                </h3>
                <p className="text-gray-300 leading-relaxed pl-8">
                  <span className="text-orange-400 font-bold">R:</span> {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{siteConfig.contact.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/50">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Adresse</h3>
                    <p className="text-gray-300">{siteConfig.contact.address.street}</p>
                    <p className="text-gray-300">{siteConfig.contact.address.city}</p>
                    <p className="text-gray-400 text-sm mt-2">{siteConfig.contact.address.region}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 shadow-lg shadow-cyan-500/50 text-white transform hover:scale-105 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Téléphone</h3>
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="text-2xl font-bold hover:text-cyan-100 transition-colors block mb-2">
                      {siteConfig.contact.phone}
                    </a>
                    <p className="text-sm text-cyan-100 font-semibold">☎️ {siteConfig.contact.cta}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/50">
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
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 shadow-xl shadow-orange-500/30 text-white mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="flex-shrink-0" size={32} />
                  <h3 className="text-2xl font-bold">{siteConfig.schedule.title}</h3>
                </div>
                {siteConfig.schedule.hours.map((item, index) => (
                  <div key={index} className="flex justify-between mb-2 text-lg">
                    <span className="font-medium">{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Nos atouts</h3>
                <ul className="space-y-3">
                  {siteConfig.highlights.slice(0, 6).map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={20} />
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
      <footer className="bg-gradient-to-br from-black to-gray-900 text-white py-12 px-4 border-t border-cyan-500/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">{siteConfig.companyName}</h3>
              <p className="text-gray-400 mb-4">{siteConfig.tagline}</p>
              <p className="text-gray-400">Gérant : {siteConfig.owner}</p>
              <p className="text-gray-500">{siteConfig.contact.address.city}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Navigation</h3>
              <div className="space-y-2">
                {['accueil', 'services', 'avis', 'contact'].map(section => (
                  <button key={section} onClick={() => scrollToSection(section)} className="block text-gray-400 hover:text-cyan-400 transition-colors capitalize">
                    {section}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p className="font-bold text-lg text-white">{siteConfig.contact.phone}</p>
                <p>{siteConfig.contact.email}</p>
                <p className="text-sm mt-4">{siteConfig.contact.address.street}</p>
                <p className="text-sm">{siteConfig.contact.address.city}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 {siteConfig.companyName} - Tous droits réservés
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}