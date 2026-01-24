import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Download, ChevronRight, CheckCircle, Briefcase, GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">{siteConfig.fullName}</h1>
              <p className="text-sm text-purple-600">{siteConfig.title}</p>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('profil')} className="text-gray-700 hover:text-purple-600 transition-colors">Profil</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-purple-600 transition-colors">Expérience</button>
              <button onClick={() => scrollToSection('competences')} className="text-gray-700 hover:text-purple-600 transition-colors">Compétences</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg">
                Contact
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4">
              {['profil', 'experience', 'competences', 'contact'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-purple-50 capitalize">
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl text-white text-5xl font-bold">
              CL
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-600 bg-clip-text text-transparent">
              {siteConfig.fullName}
            </h1>
            
            <p className="text-2xl text-gray-700 mb-6 font-semibold">
              {siteConfig.title}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {siteConfig.profile.qualities.map((quality, index) => (
                <div key={index} className="bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 border border-purple-200">
                  <span className="text-xl">{quality.icon}</span>
                  <span className="font-medium text-gray-700">{quality.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors">
                <Phone size={20} />
                {siteConfig.contact.phone}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors">
                <Mail size={20} />
                {siteConfig.contact.email}
              </a>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin size={20} />
                {siteConfig.location}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg flex items-center gap-2">
                <Mail size={20} />
                Me contacter
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg border-2 border-purple-200 flex items-center gap-2">
                <Download size={20} />
                Télécharger mon CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Profil */}
      <section id="profil" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{siteConfig.profile.title}</h2>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-200">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {siteConfig.profile.description}
            </p>
          </div>
        </div>
      </section>

      {/* Expérience */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{siteConfig.experience.title}</h2>
          </div>

          <div className="space-y-8">
            {siteConfig.experience.jobs.map((job, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < siteConfig.experience.jobs.length - 1 && (
                  <div className="absolute left-6 md:left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-cyan-400"></div>
                )}
                
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg ${
                      job.current 
                        ? 'bg-gradient-to-br from-purple-600 to-pink-600 animate-pulse' 
                        : 'bg-gradient-to-br from-cyan-500 to-blue-600'
                    }`}>
                      <Briefcase className="text-white" size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                          {job.current && (
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                              En cours
                            </span>
                          )}
                        </div>
                        <p className="text-lg text-purple-600 font-semibold">{job.company}</p>
                        <p className="text-gray-600">{job.location}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={18} />
                        <span className="font-medium">{job.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {job.missions.map((mission, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="text-purple-500 flex-shrink-0 mt-0.5" size={18} />
                          <span>{mission}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <span key={idx} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{siteConfig.education.title}</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {siteConfig.education.diplomas.map((diploma, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{diploma.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={18} className="text-gray-600" />
                      <span className="text-gray-600 font-medium">{diploma.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{diploma.title}</h3>
                    <p className="text-lg text-orange-600 font-semibold mb-2">{diploma.school}</p>
                    <p className="text-gray-700">{diploma.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="competences" className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{siteConfig.skills.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.skills.categories.map((category, index) => (
              <div key={index} className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 shadow-lg text-white hover:shadow-2xl transition-all transform hover:scale-105`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-5xl">{category.icon}</div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="flex-shrink-0" size={20} />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs d'expérience */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{siteConfig.sectors.title}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {siteConfig.sectors.list.map((sector, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-3">{sector.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{sector.name}</h3>
                <p className="text-sm text-purple-600 font-semibold">{sector.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atouts */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{siteConfig.strengths.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.strengths.items.map((strength, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-purple-200 text-center hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{strength.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{strength.title}</h3>
                <p className="text-gray-600">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disponibilité */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 md:p-12 shadow-2xl text-white text-center">
            <h2 className="text-4xl font-bold mb-4">{siteConfig.availability.title}</h2>
            <p className="text-2xl mb-6 font-semibold">{siteConfig.availability.status}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {siteConfig.availability.details.map((detail, index) => (
                <div key={index} className="flex items-center justify-center gap-2 bg-white/20 rounded-lg p-3">
                  <CheckCircle size={20} />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{siteConfig.cta.title}</h2>
            <p className="text-xl text-gray-600">{siteConfig.cta.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-200 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="text-purple-600 font-semibold hover:underline">
                {siteConfig.contact.phone}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cyan-200 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-cyan-600 font-semibold hover:underline break-all">
                {siteConfig.contact.email}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-200 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Localisation</h3>
              <p className="text-gray-700">{siteConfig.contact.address.city}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-bold mb-4">{siteConfig.fullName}</h3>
          <p className="text-gray-400 mb-6">{siteConfig.title}</p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-purple-400 transition-colors">
              {siteConfig.contact.phone}
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-300 hover:text-cyan-400 transition-colors">
              {siteConfig.contact.email}
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 {siteConfig.fullName} - CV en ligne interactif
          </p>
        </div>
      </footer>
    </div>
  );
}