import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight, Heart, CheckCircle, Clock, Award, Star, Calendar, ExternalLink, Sparkles } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);

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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30">
                <Sparkles className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">{siteConfig.companyName}</h1>
                <p className="text-sm text-gray-600">{siteConfig.tagline}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-pink-600 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('prestations')} className="text-gray-700 hover:text-pink-600 transition-colors">Prestations</button>
              <button onClick={() => scrollToSection('avis')} className="text-gray-700 hover:text-pink-600 transition-colors">Avis</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg shadow-pink-500/30">
                Réserver
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4">
              {['accueil', 'prestations', 'avis', 'contact'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-pink-50 capitalize">
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
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full mb-6 shadow-lg border border-pink-200">
              <Heart className="text-pink-500" size={24} />
              <span className="text-lg font-bold text-pink-600">Institut de beauté à Uzel</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              {siteConfig.hero.title}
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-semibold">
              {siteConfig.hero.subtitle}
            </p>
            
            <p className="text-xl text-pink-500 mb-6 font-medium">
              {siteConfig.hero.tagline}
            </p>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              {siteConfig.hero.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href={siteConfig.contact.booking} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg shadow-pink-500/30 flex items-center gap-2">
                <Calendar size={20} />
                Prendre rendez-vous
                <ExternalLink size={16} />
              </a>
              <button onClick={() => scrollToSection('prestations')} className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg border-2 border-pink-200">
                Découvrir mes prestations
              </button>
            </div>

            {/* Rating */}
            <div className="bg-white rounded-2xl p-6 shadow-lg inline-block border border-pink-100">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-pink-500 fill-pink-500" size={24} />
                ))}
              </div>
              <p className="text-2xl font-bold text-gray-900">{siteConfig.testimonials.rating.global}/5</p>
              <p className="text-gray-600">{siteConfig.testimonials.rating.reviewCount} avis clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            {siteConfig.values.map((value, index) => (
              <div key={index} className="bg-gradient-to-r from-pink-50 to-purple-50 px-6 py-3 rounded-full shadow-md flex items-center gap-2 hover:shadow-lg transition-all border border-pink-200">
                <span className="text-2xl">{value.icon}</span>
                <span className="font-medium text-gray-700">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">{siteConfig.about.title}</h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-pink-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{siteConfig.about.story}</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{siteConfig.about.mission}</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{siteConfig.about.expertise}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{siteConfig.about.values}</p>
          </div>
        </div>
      </section>

      {/* Spécialités */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">{siteConfig.specialties.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.specialties.items.map((specialty, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-pink-200 text-center">
                <div className="text-5xl mb-4">{specialty.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{specialty.name}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section id="prestations" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">{siteConfig.services.title}</h2>
            <p className="text-xl text-gray-600">{siteConfig.services.subtitle}</p>
          </div>

          {/* Onglets */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {siteConfig.services.categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(index)}
                className={`px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  selectedCategory === index
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30'
                    : 'bg-white text-gray-700 hover:bg-pink-50 border-2 border-pink-200'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* Contenu */}
          <div className="grid md:grid-cols-2 gap-6">
            {siteConfig.services.categories[selectedCategory].items.map((item, index) => (
              <div key={index} className={`bg-gradient-to-br ${siteConfig.services.categories[selectedCategory].color} rounded-2xl p-6 shadow-lg text-white hover:shadow-2xl transition-all`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold flex-1">{item.name}</h3>
                  <div className="text-right ml-4">
                    <p className="text-2xl font-bold">{item.price}</p>
                    <p className="text-sm opacity-90">{item.duration}</p>
                  </div>
                </div>
                <p className="opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">{siteConfig.advantages.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.advantages.items.map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-pink-200 text-center hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">{siteConfig.process.title}</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {siteConfig.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-200 text-center hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg shadow-pink-500/30">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {index < siteConfig.process.steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-pink-400" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis */}
      <section id="avis" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-3 rounded-full mb-6 shadow-md border border-pink-200">
              <Star className="text-pink-600 fill-pink-600" size={24} />
              <span className="text-lg font-bold text-pink-600">{siteConfig.testimonials.subtitle}</span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">{siteConfig.testimonials.title}</h2>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-pink-200">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Accueil</p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={i < Math.floor(siteConfig.testimonials.rating.accueil) ? "text-pink-500 fill-pink-500" : "text-gray-300"} size={20} />
                  ))}
                  <span className="ml-2 font-bold text-gray-900">{siteConfig.testimonials.rating.accueil}</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Propreté</p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={i < Math.floor(siteConfig.testimonials.rating.proprete) ? "text-pink-500 fill-pink-500" : "text-gray-300"} size={20} />
                  ))}
                  <span className="ml-2 font-bold text-gray-900">{siteConfig.testimonials.rating.proprete}</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Cadre & Ambiance</p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={i < Math.floor(siteConfig.testimonials.rating.cadre) ? "text-pink-500 fill-pink-500" : "text-gray-300"} size={20} />
                  ))}
                  <span className="ml-2 font-bold text-gray-900">{siteConfig.testimonials.rating.cadre}</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Qualité de la prestation</p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={i < Math.floor(siteConfig.testimonials.rating.qualite) ? "text-pink-500 fill-pink-500" : "text-gray-300"} size={20} />
                  ))}
                  <span className="ml-2 font-bold text-gray-900">{siteConfig.testimonials.rating.qualite}</span>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600 text-lg">
              <span className="font-bold text-gray-900">{siteConfig.testimonials.rating.reviewCount} clientes</span> ont donné leur avis
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Questions fréquentes</h2>
          </div>

          <div className="space-y-6">
            {siteConfig.faq.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-pink-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-pink-500 flex-shrink-0">Q:</span>
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-8">
                  <span className="text-purple-500 font-bold">R:</span> {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">{siteConfig.contact.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-pink-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/30">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Adresse</h3>
                    <p className="text-gray-700">{siteConfig.contact.address.street}</p>
                    <p className="text-gray-700">{siteConfig.contact.address.city}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 shadow-xl shadow-pink-500/30 text-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Réservation</h3>
                    <p className="mb-4">Prenez rendez-vous en ligne 24/7</p>
                    <a href={siteConfig.contact.booking} target="_blank" rel="noopener noreferrer" className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition-all inline-flex items-center gap-2">
                      {siteConfig.contact.cta}
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-pink-200 mb-6">
                <div className="flex items-start gap-4 mb-6">
                  <Clock className="text-pink-500 flex-shrink-0 mt-1" size={24} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{siteConfig.schedule.title}</h3>
                    {siteConfig.schedule.hours.map((item, index) => (
                      <div key={index} className="mb-3">
                        <p className="font-semibold text-gray-900 mb-1">{item.day}</p>
                        {item.slots.map((slot, idx) => (
                          <p key={idx} className={`text-sm ${slot === "Fermé" ? "text-red-500" : "text-gray-700"} ml-4`}>
                            {slot}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mes atouts</h3>
                <ul className="space-y-3">
                  {siteConfig.highlights.slice(0, 6).map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="text-pink-500 flex-shrink-0 mt-0.5" size={20} />
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
      <footer className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-bold mb-4">{siteConfig.companyName}</h3>
          <p className="text-pink-100 mb-6">{siteConfig.tagline}</p>
          <p className="text-pink-100 mb-4">{siteConfig.contact.address.street}, {siteConfig.contact.address.city}</p>
          <p className="text-sm text-pink-200 mt-8">
            © 2026 {siteConfig.companyName} - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
}