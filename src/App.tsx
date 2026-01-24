import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight, Scissors, CheckCircle, Clock, Award, Star, Calendar, ExternalLink } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(0);

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
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-neutral-900 to-stone-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-900/95 backdrop-blur-md shadow-lg border-b border-amber-900/30' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-red-700 rounded-md flex items-center justify-center shadow-lg shadow-amber-500/30 border-2 border-amber-400/50">
                <Scissors className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-amber-400">{siteConfig.companyName}</h1>
                <p className="text-sm text-gray-400">{siteConfig.tagline}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-300 hover:text-amber-400 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-amber-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('salons')} className="text-gray-300 hover:text-amber-400 transition-colors">Salons</button>
              <button onClick={() => scrollToSection('avis')} className="text-gray-300 hover:text-amber-400 transition-colors">Avis</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-amber-600 to-red-700 text-white px-6 py-2 rounded-md hover:from-amber-700 hover:to-red-800 transition-all shadow-lg border border-amber-400/50">
                Réserver
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 shadow-xl py-4 border-t border-amber-900/30">
              {['accueil', 'services', 'salons', 'avis', 'contact'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-zinc-800 hover:text-amber-400 capitalize">
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="accueil" className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-zinc-800/50 backdrop-blur-sm px-6 py-3 rounded-md mb-6 shadow-lg border border-amber-600/30">
              <Scissors className="text-amber-500" size={24} />
              <span className="text-lg font-bold text-amber-400">Barbier depuis 2021</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-amber-500" style={{fontFamily: 'serif', textShadow: '0 0 30px rgba(251, 191, 36, 0.3)'}}>
              {siteConfig.hero.title}
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-semibold">
              {siteConfig.hero.subtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="text-amber-400">✂️ Design rétro</span>
              <span className="text-gray-500">•</span>
              <span className="text-amber-400">🪑 Fauteuils vintage</span>
              <span className="text-gray-500">•</span>
              <span className="text-amber-400">⚡ Équipe dynamique</span>
            </div>
            
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              {siteConfig.hero.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-amber-600 to-red-700 text-white px-8 py-4 rounded-md font-semibold hover:from-amber-700 hover:to-red-800 transition-all shadow-lg shadow-amber-500/30 flex items-center gap-2 border border-amber-400/50">
                <Calendar size={20} />
                Prendre rendez-vous
              </button>
              <button onClick={() => scrollToSection('salons')} className="bg-zinc-800 text-gray-300 px-8 py-4 rounded-md font-semibold hover:bg-zinc-700 transition-all shadow-lg border border-amber-600/30">
                Nos salons
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-4 bg-zinc-800/30 border-y border-amber-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            {siteConfig.team.values.map((value, index) => (
              <div key={index} className="bg-zinc-800/50 px-6 py-3 rounded-md shadow-md flex items-center gap-2 hover:shadow-lg hover:shadow-amber-500/20 transition-all border border-zinc-700">
                <span className="text-2xl">{value.icon}</span>
                <span className="font-medium text-gray-300">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="py-20 px-4 bg-gradient-to-br from-zinc-900 to-stone-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-4" style={{fontFamily: 'serif'}}>{siteConfig.about.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-800/50 rounded-lg p-8 shadow-lg border border-amber-600/20 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-red-700 rounded-md flex items-center justify-center mb-4 shadow-lg shadow-amber-500/30 border border-amber-400/50">
                <Scissors className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-amber-400 mb-4">Notre histoire</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{siteConfig.about.story}</p>
              <p className="text-gray-300 leading-relaxed">{siteConfig.about.vision}</p>
            </div>

            <div className="bg-zinc-800/50 rounded-lg p-8 shadow-lg border border-red-600/20 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-rose-700 rounded-md flex items-center justify-center mb-4 shadow-lg shadow-red-500/30 border border-red-400/50">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-amber-400 mb-4">Notre ambiance</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{siteConfig.about.atmosphere}</p>
              <p className="text-gray-300 leading-relaxed">{siteConfig.about.team}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiance */}
      <section className="py-20 px-4 bg-zinc-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-500 mb-4" style={{fontFamily: 'serif'}}>{siteConfig.atmosphere.title}</h2>
            <p className="text-xl text-gray-400">{siteConfig.atmosphere.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.atmosphere.features.map((feature, index) => (
              <div key={index} className="bg-zinc-800/50 rounded-lg p-8 shadow-lg border border-amber-600/20 text-center hover:shadow-xl hover:shadow-amber-500/20 transition-all backdrop-blur-sm">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-amber-400 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-stone-900 to-zinc-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-4" style={{fontFamily: 'serif'}}>{siteConfig.services.title}</h2>
            <p className="text-xl text-gray-400">{siteConfig.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.services.categories.map((category, index) => (
              <div key={index} className={`bg-gradient-to-br ${category.color} rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 text-white border border-white/10`}>
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salons */}
      <section id="salons" className="py-20 px-4 bg-zinc-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-500 mb-4" style={{fontFamily: 'serif'}}>{siteConfig.locations.title}</h2>
            <p className="text-xl text-gray-400">{siteConfig.locations.subtitle}</p>
          </div>

          {/* Onglets */}
          <div className="flex justify-center gap-4 mb-12">
            {siteConfig.locations.salons.map((salon, index) => (
              <button
                key={index}
                onClick={() => setSelectedLocation(index)}
                className={`px-8 py-3 rounded-md font-semibold transition-all ${
                  selectedLocation === index
                    ? 'bg-gradient-to-r from-amber-600 to-red-700 text-white shadow-lg border border-amber-400/50'
                    : 'bg-zinc-800 text-gray-400 hover:text-amber-400 border border-zinc-700'
                }`}
              >
                {salon.name}
              </button>
            ))}
          </div>

          {/* Contenu du salon sélectionné */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-800/50 rounded-lg p-8 shadow-lg border border-amber-600/20 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-amber-400 mb-2">Adresse</h3>
                      <p className="text-gray-300">{siteConfig.locations.salons[selectedLocation].address.street}</p>
                      <p className="text-gray-300">{siteConfig.locations.salons[selectedLocation].address.city}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <Phone className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-amber-400 mb-2">Téléphone</h3>
                      <a href={`tel:${siteConfig.locations.salons[selectedLocation].phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-amber-400 transition-colors">
                        {siteConfig.locations.salons[selectedLocation].phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Award className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-amber-400 mb-2">Équipe</h3>
                      <p className="text-gray-300">{siteConfig.locations.salons[selectedLocation].team}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <Clock className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-amber-400 mb-4">Horaires</h3>
                      {siteConfig.locations.salons[selectedLocation].schedule.map((item, index) => (
                        <div key={index} className="flex justify-between mb-2 text-gray-300">
                          <span className="font-medium">{item.day}</span>
                          <span className={item.hours === "Fermé" ? "text-red-400" : ""}>{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={siteConfig.locations.salons[selectedLocation].booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-r from-amber-600 to-red-700 text-white px-6 py-3 rounded-md font-semibold hover:from-amber-700 hover:to-red-800 transition-all shadow-lg text-center border border-amber-400/50"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Calendar size={20} />
                      Réserver en ligne
                      <ExternalLink size={16} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 px-4 bg-gradient-to-br from-zinc-900 to-stone-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-500 mb-4" style={{fontFamily: 'serif'}}>{siteConfig.advantages.title}</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {siteConfig.advantages.items.map((advantage, index) => (
              <div key={index} className="bg-zinc-800/50 rounded-lg p-6 shadow-lg border border-amber-600/20 text-center hover:shadow-xl hover:shadow-amber-500/20 transition-all backdrop-blur-sm">
                <div className="text-4xl mb-3">{advantage.icon}</div>
                <h3 className="font-bold text-amber-400 mb-2">{advantage.title}</h3>
                <p className="text-sm text-gray-400">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis */}
      <section id="avis" className="py-20 px-4 bg-zinc-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-600/20 px-6 py-3 rounded-md mb-6 shadow-lg border border-amber-600/30">
              <Star className="text-amber-400 fill-amber-400" size={24} />
              <span className="text-lg font-bold text-amber-400">{siteConfig.testimonials.subtitle}</span>
            </div>
            <h2 className="text-4xl font-bold text-amber-500 mb-4" style={{fontFamily: 'serif'}}>{siteConfig.testimonials.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.testimonials.reviews.map((review, index) => (
              <div key={index} className="bg-zinc-800/50 rounded-lg p-8 shadow-lg border border-amber-600/20 backdrop-blur-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-4 italic">"{review.text}"</p>
                <p className="text-amber-400 font-semibold">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-br from-stone-900 to-zinc-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-500 mb-4" style={{fontFamily: 'serif'}}>Questions fréquentes</h2>
          </div>

          <div className="space-y-6">
            {siteConfig.faq.map((item, index) => (
              <div key={index} className="bg-zinc-800/50 rounded-lg p-6 shadow-lg border border-amber-600/20 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-amber-400 mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0">Q:</span>
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

      {/* Contact / CTA */}
      <section id="contact" className="py-20 px-4 bg-zinc-800/30">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-amber-600 to-red-700 rounded-lg p-12 shadow-2xl text-white text-center border border-amber-400/50">
            <Scissors className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4" style={{fontFamily: 'serif'}}>{siteConfig.booking.title}</h2>
            <p className="text-2xl mb-6 font-semibold">{siteConfig.booking.subtitle}</p>
            <p className="text-lg mb-8 opacity-90">{siteConfig.booking.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={siteConfig.locations.salons[0].booking} target="_blank" rel="noopener noreferrer" className="bg-white text-amber-700 px-8 py-4 rounded-md font-semibold hover:bg-amber-50 transition-all shadow-lg flex items-center gap-2">
                <Calendar size={20} />
                Réserver Loudéac
                <ExternalLink size={16} />
              </a>
              <a href={siteConfig.locations.salons[1].booking} target="_blank" rel="noopener noreferrer" className="bg-white text-amber-700 px-8 py-4 rounded-md font-semibold hover:bg-amber-50 transition-all shadow-lg flex items-center gap-2">
                <Calendar size={20} />
                Réserver Pontivy
                <ExternalLink size={16} />
              </a>
            </div>
            <p className="text-sm mt-6 opacity-75">{siteConfig.booking.note}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t border-amber-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-500" style={{fontFamily: 'serif'}}>{siteConfig.companyName}</h3>
              <p className="text-gray-400 mb-4">{siteConfig.tagline}</p>
              <p className="text-gray-500 text-sm">Fondé par {siteConfig.founders}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-500">Nos salons</h3>
              <div className="space-y-4">
                {siteConfig.locations.salons.map((salon, index) => (
                  <div key={index}>
                    <p className="font-semibold text-amber-400">{salon.name}</p>
                    <p className="text-sm text-gray-400">{salon.address.street}</p>
                    <p className="text-sm text-gray-400">{salon.address.city}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-500">Suivez-nous</h3>
              <p className="text-gray-400 mb-2">Instagram: {siteConfig.social.instagram}</p>
              <p className="text-gray-400 mb-4">Facebook: {siteConfig.social.facebook}</p>
              <p className="text-amber-400 font-semibold">{siteConfig.social.followers} abonnés</p>
            </div>
          </div>

          <div className="border-t border-amber-900/30 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 {siteConfig.companyName} - Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}