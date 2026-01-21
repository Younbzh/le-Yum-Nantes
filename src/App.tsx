import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Clock, ChevronRight, Users, Calendar, Heart, BookOpen, Shield, Baby, Home, Sun, Leaf } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-zinc-900">{siteConfig.clubName}</h1>
                <p className="text-sm text-zinc-600">{siteConfig.city}</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('about')} className="text-zinc-700 hover:text-amber-600 transition-colors">À propos</button>
              <button onClick={() => scrollToSection('pedagogie')} className="text-zinc-700 hover:text-amber-600 transition-colors">Pédagogie</button>
              <button onClick={() => scrollToSection('journee')} className="text-zinc-700 hover:text-amber-600 transition-colors">Une journée</button>
              <button onClick={() => scrollToSection('equipe')} className="text-zinc-700 hover:text-amber-600 transition-colors">Équipe</button>
              <button onClick={() => scrollToSection('tarifs')} className="text-zinc-700 hover:text-amber-600 transition-colors">Tarifs</button>
              <button onClick={() => scrollToSection('inscription')} className="text-zinc-700 hover:text-amber-600 transition-colors">Inscription</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-zinc-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 border-t border-zinc-200">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 text-zinc-700 hover:bg-amber-50">À propos</button>
              <button onClick={() => scrollToSection('pedagogie')} className="block w-full text-left px-4 py-3 text-zinc-700 hover:bg-amber-50">Pédagogie</button>
              <button onClick={() => scrollToSection('journee')} className="block w-full text-left px-4 py-3 text-zinc-700 hover:bg-amber-50">Une journée</button>
              <button onClick={() => scrollToSection('equipe')} className="block w-full text-left px-4 py-3 text-zinc-700 hover:bg-amber-50">Équipe</button>
              <button onClick={() => scrollToSection('tarifs')} className="block w-full text-left px-4 py-3 text-zinc-700 hover:bg-amber-50">Tarifs</button>
              <button onClick={() => scrollToSection('inscription')} className="block w-full text-left px-4 py-3 text-zinc-700 hover:bg-amber-50">Inscription</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 text-zinc-700 hover:bg-amber-50">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg">
              <Baby className="text-amber-600" size={20} />
              <span className="text-sm font-medium text-zinc-700">Maison d'Assistants Maternels</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              {siteConfig.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-700 mb-4 font-light">
              {siteConfig.hero.tagline}
            </p>
            
            <p className="text-lg text-zinc-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {siteConfig.hero.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all shadow-xl flex items-center gap-2">
                Nous contacter <ChevronRight size={20} />
              </button>
              <button onClick={() => scrollToSection('about')} className="bg-white/80 backdrop-blur-sm text-zinc-700 px-8 py-4 rounded-full font-semibold hover:bg-white transition-all shadow-lg">
                En savoir plus
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
              <div key={index} className="bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-2 hover:shadow-lg transition-shadow">
                <span className="text-2xl">{value.icon}</span>
                <span className="font-medium text-zinc-700">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-white to-amber-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Notre Maison d'Assistants Maternels</h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
              {siteConfig.audience.philosophy}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Public accueilli</h3>
              <p className="text-zinc-600 mb-2">{siteConfig.audience.primary}</p>
              <p className="text-sm text-zinc-500">{siteConfig.audience.tertiary}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Leaf className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Environnement</h3>
              <p className="text-zinc-600">{siteConfig.location.description}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Agrément officiel</h3>
              <p className="text-zinc-600">Assistantes maternelles agréées par la PMI du Morbihan. Structure conforme aux normes ERP.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Espaces */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Nos Espaces</h2>
            <p className="text-xl text-zinc-600">Un environnement pensé pour l'épanouissement des enfants</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.spaces.map((space, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4">{space.emoji}</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{space.title}</h3>
                <p className="text-amber-600 font-semibold mb-3">{space.description}</p>
                <p className="text-zinc-600 leading-relaxed">{space.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projet Pédagogique */}
      <section id="pedagogie" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-lg">
              <BookOpen className="text-amber-600" size={20} />
              <span className="text-sm font-medium text-zinc-700">Notre approche</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">{siteConfig.pedagogicalProject.title}</h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">{siteConfig.pedagogicalProject.introduction}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.pedagogicalProject.principles.map((principle, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-amber-600 mb-4">{principle.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journée Type */}
      <section id="journee" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full mb-4 shadow-lg">
              <Clock className="text-amber-600" size={20} />
              <span className="text-sm font-medium text-zinc-700">Organisation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">{siteConfig.typicalDay.title}</h2>
            <p className="text-xl text-zinc-600">Le déroulement adapté au rythme de chaque enfant</p>
          </div>

          <div className="space-y-6">
            {siteConfig.typicalDay.schedule.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-32 flex-shrink-0">
                    <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-center font-bold shadow-lg">
                      {item.time}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">{item.activity}</h3>
                    <p className="text-zinc-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section id="equipe" className="py-20 px-4 bg-gradient-to-br from-white to-amber-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">{siteConfig.team.title}</h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto mb-12">{siteConfig.team.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {siteConfig.team.members.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2 text-center">{member.name}</h3>
                <p className="text-amber-600 font-semibold mb-3 text-center">{member.role}</p>
                <p className="text-zinc-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 shadow-lg">
            <p className="text-zinc-700 leading-relaxed text-center">
              <strong>Important :</strong> {siteConfig.team.note}
            </p>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">{siteConfig.pricing.title}</h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">{siteConfig.pricing.introduction}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">{siteConfig.pricing.hourlyRate.label}</h3>
              <div className="text-3xl font-bold text-amber-600 mb-4">{siteConfig.pricing.hourlyRate.amount}</div>
              <p className="text-zinc-600 leading-relaxed">{siteConfig.pricing.hourlyRate.note}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Frais supplémentaires</h3>
              <div className="space-y-4">
                {siteConfig.pricing.additionalCosts.map((cost, index) => (
                  <div key={index} className="border-b border-zinc-200 pb-4 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-zinc-900">{cost.label}</span>
                      <span className="text-amber-600 font-bold">{cost.amount}</span>
                    </div>
                    <p className="text-sm text-zinc-600">{cost.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
              <span>💰</span> {siteConfig.pricing.financialAid.title}
            </h3>
            <ul className="space-y-3">
              {siteConfig.pricing.financialAid.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-zinc-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 shadow-lg">
            <p className="text-zinc-700 leading-relaxed">
              <strong>Ce qui est inclus :</strong> {siteConfig.pricing.includes}
            </p>
          </div>
        </div>
      </section>

      {/* Inscription */}
      <section id="inscription" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">{siteConfig.enrollment.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Les étapes</h3>
              <div className="space-y-6">
                {siteConfig.enrollment.steps.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="text-lg font-bold text-amber-600 mb-2">{item.step}</h4>
                    <p className="text-zinc-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Documents requis</h3>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <ul className="space-y-4">
                  {siteConfig.enrollment.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ChevronRight className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-zinc-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-6 shadow-lg">
                <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                  <Heart className="text-amber-600" size={20} />
                  <span>L'adaptation, c'est essentiel !</span>
                </h4>
                <p className="text-zinc-700 leading-relaxed">
                  Cette période permet à votre enfant de découvrir progressivement son nouvel environnement, de faire connaissance avec son assistante maternelle référente et les autres enfants, en votre présence puis en douceur sans vous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Nous Contacter</h2>
            <p className="text-xl text-zinc-600">Nous sommes à votre écoute pour répondre à vos questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-2">Adresse</h3>
                    <p className="text-zinc-700">{siteConfig.contact.address.street}</p>
                    <p className="text-zinc-700">{siteConfig.contact.address.city}</p>
                    <p className="text-zinc-600 text-sm mt-2">{siteConfig.contact.address.access}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-2">Téléphone</h3>
                    <p className="text-zinc-700">{siteConfig.contact.phone}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-2">Email</h3>
                    <p className="text-zinc-700">{siteConfig.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg mb-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                  <Clock className="text-amber-600" size={24} />
                  <span>Horaires d'ouverture</span>
                </h3>
                <div className="space-y-4">
                  {siteConfig.contact.hours.map((hour, index) => (
                    <div key={index} className="flex justify-between items-center pb-4 border-b border-zinc-200 last:border-0">
                      <span className="font-semibold text-zinc-900">{hour.day}</span>
                      <span className="text-amber-600 font-bold">{hour.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-100 rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-zinc-900 mb-3">Fermetures annuelles</h4>
                <p className="text-zinc-700 leading-relaxed text-sm">{siteConfig.contact.closures}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points forts */}
      <section className="py-20 px-4 bg-gradient-to-br from-white to-amber-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Nos Points Forts</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <ChevronRight className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-zinc-700">{highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-400">{siteConfig.clubName}</h3>
              <p className="text-zinc-400 mb-4">{siteConfig.positioning}</p>
              <p className="text-zinc-400">{siteConfig.contact.address.city}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-400">Navigation</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-zinc-400 hover:text-amber-400 transition-colors">À propos</button>
                <button onClick={() => scrollToSection('pedagogie')} className="block text-zinc-400 hover:text-amber-400 transition-colors">Pédagogie</button>
                <button onClick={() => scrollToSection('equipe')} className="block text-zinc-400 hover:text-amber-400 transition-colors">Équipe</button>
                <button onClick={() => scrollToSection('tarifs')} className="block text-zinc-400 hover:text-amber-400 transition-colors">Tarifs</button>
                <button onClick={() => scrollToSection('contact')} className="block text-zinc-400 hover:text-amber-400 transition-colors">Contact</button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-400">Contact</h3>
              <div className="space-y-2 text-zinc-400">
                <p>{siteConfig.contact.phone}</p>
                <p>{siteConfig.contact.email}</p>
                <p className="text-sm mt-4">{siteConfig.contact.hours[0].day}<br/>{siteConfig.contact.hours[0].time}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <p className="text-zinc-500 text-sm leading-relaxed mb-4">
              {siteConfig.disclaimer}
            </p>
            <p className="text-zinc-600 text-sm text-center">
              © 2026 {siteConfig.clubName} - Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}