import React, { useState } from 'react';
import { MapPin, Clock, Navigation, Phone, Mail, Instagram, Facebook, Sparkles, Heart, Star, Award } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50 to-stone-100">
      
      {/* Hero Section - Art Deco Elegance */}
      <header className="relative overflow-hidden bg-gradient-to-br from-stone-100 via-amber-50 to-orange-50 py-24 px-4">
        {/* Geometric background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="art-deco" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#art-deco)" className="text-amber-800"/>
          </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Logo Diamond */}
          <div className="mb-8 animate-fadeIn">
            <div className="inline-block relative">
              <svg className="w-20 h-20 mx-auto mb-6 text-amber-700" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10 L90 50 L50 90 L10 50 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M50 25 L75 50 L50 75 L25 50 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M50 35 L65 50 L50 65 L35 50 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="50" cy="50" r="8" fill="currentColor"/>
              </svg>
              
              <h1 className="text-6xl md:text-7xl font-light text-amber-900 mb-2 tracking-wider" 
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                MAISON BAHIA
              </h1>
              
              <div className="text-amber-700 text-sm tracking-[0.3em] uppercase font-light mb-2">
                Meubles & Décoration
              </div>
              
              {/* Decorative line */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="w-12 h-px bg-amber-600"></div>
                <div className="w-2 h-2 rotate-45 border border-amber-600"></div>
                <div className="w-12 h-px bg-amber-600"></div>
              </div>
            </div>
          </div>

          <p className="text-2xl md:text-3xl text-amber-800 font-light mb-8 italic">
            {siteConfig.baseline}
          </p>

          {/* Opening Announcement */}
          <div className="inline-block bg-gradient-to-r from-amber-700 to-orange-700 text-white px-8 py-4 rounded-sm mb-8 shadow-lg">
            <div className="flex items-center gap-3 justify-center">
              <Sparkles className="w-5 h-5" />
              <span className="text-lg font-light tracking-wide">{siteConfig.opening.announcement}</span>
              <Sparkles className="w-5 h-5" />
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#boutique"
              className="bg-white text-amber-800 px-8 py-4 font-light tracking-wide hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-amber-300"
            >
              Découvrir la boutique
            </a>
          </div>
        </div>
      </header>

      {/* Story Section - Laura's Journey */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="w-12 h-12 mx-auto mb-4 rotate-45 border-2 border-amber-600"></div>
              <h2 className="text-5xl md:text-6xl font-light text-amber-900 mb-6" 
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                Une Histoire de Passion
              </h2>
              <div className="w-24 h-px bg-amber-600 mx-auto"></div>
            </div>
          </div>

          <div className="bg-white rounded-none shadow-2xl p-10 md:p-16 border-t-4 border-amber-600">
            <div className="prose prose-lg max-w-none text-stone-700">
              <p className="text-2xl md:text-3xl leading-relaxed mb-8 font-light italic text-center">
                "{siteConfig.about.story}"
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-5xl mb-4">🧳</div>
                  <h3 className="text-xl font-light text-amber-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Le Voyage
                  </h3>
                  <p className="text-stone-600 text-base leading-relaxed">
                    Un séjour au Maroc qui a tout changé. La découverte de l'artisanat, des couleurs, de cette passion pour la décoration.
                  </p>
                </div>

                <div className="text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-5xl mb-4">💪</div>
                  <h3 className="text-xl font-light text-amber-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    La Résilience
                  </h3>
                  <p className="text-stone-600 text-base leading-relaxed">
                    Face à la maladie, une prise de conscience : profiter de chaque instant et réaliser ses rêves.
                  </p>
                </div>

                <div className="text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-5xl mb-4">✨</div>
                  <h3 className="text-xl font-light text-amber-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Le Rêve
                  </h3>
                  <p className="text-stone-600 text-base leading-relaxed">
                    À 27 ans, Laura concrétise son rêve de toujours : ouvrir sa propre boutique de décoration.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-xl md:text-2xl text-stone-600 font-light italic">
                  {siteConfig.about.philosophy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universe Section - Product Categories */}
      <section className="py-20 px-4 bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-8 h-8 rotate-45 border-2 border-blue-600"></div>
                <div className="w-3 h-3 rotate-45 bg-blue-600"></div>
                <div className="w-8 h-8 rotate-45 border-2 border-blue-600"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-amber-900 mb-6" 
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                Nos Univers
              </h2>
              <p className="text-xl md:text-2xl text-stone-600 font-light italic">
                Une sélection pointue d'artisanat marocain authentique
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.products.categories.filter(cat => cat.featured).map((category, index) => (
              <div
                key={index}
                onClick={() => setSelectedCategory(index === selectedCategory ? null : index)}
                className={`
                  group relative overflow-hidden bg-white cursor-pointer
                  transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
                  border-t-4 ${index === 0 ? 'border-blue-600' : index === 1 ? 'border-teal-600' : 'border-amber-600'}
                  ${selectedCategory === index ? 'scale-105 shadow-2xl' : 'shadow-lg'}
                `}
              >
                <div className="p-8">
                  {/* Category Icon */}
                  <div className="mb-6">
                    {index === 0 && (
                      <svg className="w-16 h-16 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-16 h-16 text-teal-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-16 h-16 text-amber-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" strokeWidth={1.5}/>
                        <circle cx="12" cy="12" r="5" strokeWidth={1.5}/>
                      </svg>
                    )}
                  </div>

                  <h3 className="text-2xl font-light text-amber-900 mb-4 text-center" 
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                    {category.name}
                  </h3>
                  
                  <p className="text-stone-600 text-center leading-relaxed font-light text-base md:text-lg">
                    {category.description}
                  </p>

                  {/* Decorative bottom accent */}
                  <div className="mt-6 flex items-center justify-center gap-2">
                    <div className="w-8 h-px bg-stone-300 group-hover:bg-amber-600 transition-colors"></div>
                    <div className="w-1.5 h-1.5 rotate-45 bg-stone-300 group-hover:bg-amber-600 transition-colors"></div>
                    <div className="w-8 h-px bg-stone-300 group-hover:bg-amber-600 transition-colors"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Signature Color Block */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-12 text-center shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Notre Couleur Signature : {siteConfig.products.signature.color}
              </h3>
              <p className="text-blue-100 text-xl md:text-2xl font-light leading-relaxed">
                {siteConfig.products.signature.description}
              </p>
              <div className="mt-6 inline-block bg-white bg-opacity-20 px-6 py-3 rounded-sm">
                <p className="text-base md:text-lg tracking-wide">{siteConfig.products.signature.priceExample}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-amber-900 mb-8" 
                style={{ fontFamily: "'Playfair Display', serif" }}>
              Nos Engagements
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.about.values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 border border-stone-200 hover:border-amber-600 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 mx-auto mb-4 rotate-45">
                  <div className="w-full h-full border-2 border-amber-600 -rotate-45 flex items-center justify-center">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <p className="text-stone-700 font-light text-base md:text-lg">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saint-Valentin Special */}
      {siteConfig.occasions.current && (
        <section className="py-16 px-4 bg-gradient-to-r from-pink-50 via-red-50 to-pink-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white p-10 shadow-2xl border-t-4 border-pink-500">
              <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-3xl font-light text-amber-900 mb-4" 
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                {siteConfig.occasions.current.name}
              </h3>
              <p className="text-xl md:text-2xl text-stone-600 mb-2">
                {siteConfig.occasions.current.date}
              </p>
              <p className="text-stone-700 font-light leading-relaxed text-lg md:text-xl">
                {siteConfig.occasions.current.suggestion}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Boutique Section */}
      <section id="boutique" className="py-20 px-4 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="w-16 h-16 mx-auto mb-6 rotate-45 border-2 border-amber-600 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-amber-600 -rotate-45" />
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-amber-900 mb-6" 
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                La Boutique
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Address & Hours */}
            <div className="bg-white p-8 shadow-xl border-l-4 border-amber-600">
              <h3 className="text-2xl font-light text-amber-900 mb-6" 
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                Adresse & Horaires
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-light text-stone-700 text-base md:text-lg">{siteConfig.contact.fullAddress}</p>
                    <p className="text-sm md:text-base text-stone-500 mt-1">{siteConfig.location.district}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-light text-stone-700 mb-2 text-base md:text-lg">{siteConfig.hours.note}</p>
                    <div className="space-y-1 text-base md:text-lg text-stone-600">
                      <p><span className="font-medium">Mardi - Samedi :</span> 10h00 - 19h00</p>
                      <p><span className="font-medium">Dimanche - Lundi :</span> Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Access */}
            <div className="bg-white p-8 shadow-xl border-l-4 border-blue-600">
              <h3 className="text-2xl font-light text-amber-900 mb-6" 
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                Accès
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-base md:text-lg font-medium text-stone-700 mb-1">Tramway</p>
                    <p className="text-base md:text-lg text-stone-600">{siteConfig.access.tram}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-base md:text-lg font-medium text-stone-700 mb-1">Bus</p>
                    <p className="text-base md:text-lg text-stone-600">{siteConfig.access.bus}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-stone-200">
                  <p className="text-sm md:text-base font-medium text-stone-700 mb-2">Parkings à proximité :</p>
                  <ul className="space-y-1">
                    {siteConfig.access.parking.slice(0, 3).map((parking, index) => (
                      <li key={index} className="text-sm md:text-base text-stone-600 flex items-start gap-2">
                        <span className="text-amber-600">•</span>
                        <span>{parking}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 bg-white p-4 shadow-xl">
            <div className="aspect-video rounded-none overflow-hidden border-4 border-stone-100">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.5!2d${siteConfig.contact.coordinates.lng}!3d${siteConfig.contact.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDU5JzQ0LjIiTiAwwrAxMSc0Ny40IkU!5e0!3m2!1sfr!2sfr!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de Maison Bahia au Mans"
              ></iframe>
            </div>
            <p className="text-center text-stone-600 mt-4 text-base md:text-lg font-light">
              8, rue du Cornet • Centre-ville du Mans
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-stone-100 via-amber-50 to-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-light text-amber-900 mb-8" 
                style={{ fontFamily: "'Playfair Display', serif" }}>
              Suivez-Nous
            </h2>
            <div className="w-24 h-px bg-amber-600 mx-auto mb-8"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white px-8 py-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-pink-500 w-full sm:w-auto"
            >
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-4 rounded-full group-hover:scale-110 transition-transform">
                <Instagram className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <div className="text-base md:text-lg text-stone-600 font-light">Instagram</div>
                <div className="text-xl md:text-2xl font-light text-purple-700">{siteConfig.social.instagramHandle}</div>
              </div>
            </a>

            <a 
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white px-8 py-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-blue-600 w-full sm:w-auto"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-full group-hover:scale-110 transition-transform">
                <Facebook className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <div className="text-base md:text-lg text-stone-600 font-light">Facebook</div>
                <div className="text-xl md:text-2xl font-light text-blue-700">Maison Bahia</div>
              </div>
            </a>
          </div>

          <p className="mt-8 text-stone-600 font-light italic text-lg md:text-xl">
            Découvrez nos nouveautés, nos coups de cœur et l'actualité de la boutique
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Logo */}
            <svg className="w-16 h-16 mx-auto mb-6 text-amber-300 opacity-80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 L90 50 L50 90 L10 50 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M50 25 L75 50 L50 75 L25 50 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="50" cy="50" r="8" fill="currentColor"/>
            </svg>

            <h3 className="text-4xl font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              MAISON BAHIA
            </h3>
            <p className="text-amber-300 mb-8 text-sm tracking-widest">
              MEUBLES & DÉCORATION
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mb-8">
              <a 
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-7 h-7 text-amber-300 hover:text-white" />
              </a>
              <a 
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Facebook className="w-7 h-7 text-amber-300 hover:text-white" />
              </a>
            </div>
            
            <div className="border-t border-amber-700 pt-8">
              <p className="text-amber-200 text-base md:text-lg mb-2">
                {siteConfig.contact.fullAddress}
              </p>
              <p className="text-amber-300 text-base md:text-lg">
                Ouvert du mardi au samedi • 10h - 19h
              </p>
              
              <p className="text-amber-400 text-sm md:text-base mt-8">
                © {new Date().getFullYear()} Maison Bahia - Tous droits réservés
              </p>
              <p className="text-amber-500 text-sm md:text-base mt-2">
                Site créé par <a href="https://avalon-stratege.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Avalon Stratège</a>
              </p>
            </div>

            {/* Decorative bottom diamond */}
            <div className="mt-8">
              <div className="w-8 h-8 mx-auto rotate-45 border border-amber-600"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;