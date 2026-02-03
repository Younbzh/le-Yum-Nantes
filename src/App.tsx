import React, { useState } from 'react';
import { MapPin, Phone, Mail, Waves, Award, Users, Clock, ShoppingBag, Info, ChevronDown, Ship, Anchor } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

const App = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section - Maritime élégant */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
        {/* Effet vagues subtiles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
        </div>

        {/* Motif maritime subtil */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 border-2 border-blue-400/10 rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-96 h-96 border border-cyan-400/10 rounded-full"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Ancre décorative */}
          <div className="flex justify-center mb-6">
            <Anchor className="w-16 h-16 text-cyan-400" />
          </div>

          {/* Logo & Titre */}
          <h1 className="text-6xl md:text-8xl font-light text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Les Huîtres RICOU
          </h1>
          
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px w-24 bg-cyan-400"></div>
            <Waves className="w-8 h-8 text-cyan-400" />
            <div className="h-px w-24 bg-cyan-400"></div>
          </div>

          <p className="text-2xl md:text-3xl text-cyan-100 mb-6 font-light">
            {siteConfig.tagline}
          </p>
          
          <p className="text-lg md:text-xl text-slate-300 mb-12 font-light max-w-3xl mx-auto">
            Île d'Oléron • Bassin Marennes-Oléron IGP
          </p>

          {/* Labels */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-400/30">
              <span className="text-cyan-100 font-light">IGP Marennes-Oléron</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/30">
              <span className="text-amber-100 font-light">Label Rouge</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30">
              <span className="text-blue-100 font-light">5 Générations</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-4 font-light text-lg transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 flex items-center justify-center gap-3 rounded-lg"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.contact.phone}
            </a>
            <a
              href="#marches"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-4 font-light text-lg border-2 border-white/30 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-3 rounded-lg"
            >
              <ShoppingBag className="w-5 h-5" />
              Nos Marchés
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </header>

      {/* Notre Histoire */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Tradition Familiale
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-8"></div>
            <p className="text-slate-600 text-lg font-light max-w-3xl mx-auto leading-relaxed">
              {siteConfig.about.story}
            </p>
          </div>

          {/* Values grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {siteConfig.about.values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 border-l-4 border-cyan-600 hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-slate-700 font-light">{value}</p>
              </div>
            ))}
          </div>

          {/* Heritage */}
          <div className="mt-16 bg-gradient-to-r from-blue-900 to-slate-800 p-10 rounded-lg text-white">
            <Ship className="w-12 h-12 text-cyan-400 mb-6 mx-auto" />
            <p className="text-center text-lg font-light leading-relaxed italic">
              "{siteConfig.about.heritage}"
            </p>
          </div>
        </div>
      </section>

      {/* Le Terroir */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Le Bassin Marennes-Oléron
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
            <p className="text-cyan-100 text-xl font-light mb-4">{siteConfig.terroir.igp}</p>
            <p className="text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
              {siteConfig.terroir.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            {/* Spécificités */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-cyan-400/30">
              <h3 className="text-2xl font-light text-cyan-400 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Spécificités du Bassin
              </h3>
              <ul className="space-y-3">
                {siteConfig.terroir.specificites.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-200 font-light">
                    <Waves className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-blue-400/30">
              <h3 className="text-2xl font-light text-blue-300 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Notre Processus
              </h3>
              <p className="text-slate-200 font-light leading-relaxed">
                {siteConfig.terroir.process}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Huîtres */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Notre Gamme
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.products.categories.map((product, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 border-t-4 border-cyan-600 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <span className="text-6xl mb-4 block group-hover:scale-110 transition-transform duration-300">{product.icon}</span>
                  <h3 className="text-2xl font-light text-slate-800 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {product.name}
                  </h3>
                  <div className="flex justify-center gap-2 mb-4">
                    {product.igp && (
                      <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">IGP</span>
                    )}
                    {product.labelRouge && (
                      <span className="text-xs px-3 py-1 bg-red-100 text-red-800 rounded-full font-medium">Label Rouge</span>
                    )}
                  </div>
                </div>

                <p className="text-slate-600 font-light leading-relaxed mb-6">
                  {product.description}
                </p>

                <ul className="space-y-2">
                  {product.caracteristiques.map((carac, idx) => (
                    <li key={idx} className="text-slate-600 text-sm font-light pl-4 border-l-2 border-cyan-300">
                      {carac}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Calibres */}
          <div className="mt-16 bg-slate-800 p-10 rounded-lg">
            <h3 className="text-2xl font-light text-white text-center mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Nos Calibres
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {siteConfig.products.calibres.map((calibre, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded text-center border border-cyan-400/30">
                  <p className="text-cyan-400 font-medium text-lg mb-1">{calibre.numero}</p>
                  <p className="text-slate-300 text-sm font-light mb-1">{calibre.poids}</p>
                  <p className="text-slate-400 text-xs font-light">{calibre.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vente Professionnelle */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Vente Professionnelle
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-blue-900 p-10 rounded-lg text-white">
            <Users className="w-12 h-12 text-cyan-400 mb-6 mx-auto" />
            <p className="text-center text-xl font-light mb-8 text-slate-200">
              {siteConfig.professional.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Services */}
              <div>
                <h3 className="text-xl font-light text-cyan-400 mb-4">Nos Services</h3>
                <ul className="space-y-3">
                  {siteConfig.professional.services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-200 font-light">
                      <Award className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clients */}
              <div>
                <h3 className="text-xl font-light text-cyan-400 mb-4">Nos Clients</h3>
                <p className="text-slate-200 font-light leading-relaxed">
                  {siteConfig.professional.clients}
                </p>
              </div>
            </div>

            {/* Contact pro */}
            <div className="text-center pt-8 border-t border-white/20">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 font-light transition-colors rounded-lg"
              >
                <Mail className="w-5 h-5" />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marchés */}
      <section className="py-20 px-4 bg-white" id="marches">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Nos Points de Vente
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-8"></div>
            <p className="text-slate-600 text-lg font-light mb-4">
              {siteConfig.markets.description}
            </p>
            <p className="text-cyan-700 font-medium">
              Période : {siteConfig.markets.period}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.markets.locations.map((market, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 border-l-4 border-cyan-600 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-light text-slate-800 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {market.city}
                </h3>
                <div className="space-y-2 text-slate-600 font-light">
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-600" />
                    <span className="font-medium text-cyan-700">{market.day}</span> - {market.hours}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-600" />
                    {market.place}
                  </p>
                  <p className="text-sm text-slate-500 italic">{market.frequency}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseils */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Conseils de Dégustation
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Conservation */}
            <div className="bg-white p-8 border-t-4 border-blue-600 rounded-lg">
              <h3 className="text-xl font-light text-slate-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Conservation
              </h3>
              <ul className="space-y-3">
                {siteConfig.conseils.conservation.map((conseil, index) => (
                  <li key={index} className="text-slate-600 font-light text-sm pl-4 border-l-2 border-blue-300">
                    {conseil}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dégustation */}
            <div className="bg-white p-8 border-t-4 border-cyan-600 rounded-lg">
              <h3 className="text-xl font-light text-slate-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Dégustation
              </h3>
              <ul className="space-y-3">
                {siteConfig.conseils.degustation.map((conseil, index) => (
                  <li key={index} className="text-slate-600 font-light text-sm pl-4 border-l-2 border-cyan-300">
                    {conseil}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ouverture */}
            <div className="bg-white p-8 border-t-4 border-slate-600 rounded-lg">
              <h3 className="text-xl font-light text-slate-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ouverture
              </h3>
              <ul className="space-y-3">
                {siteConfig.conseils.ouverture.map((conseil, index) => (
                  <li key={index} className="text-slate-600 font-light text-sm pl-4 border-l-2 border-slate-300">
                    {conseil}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Nous Contacter
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Production */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-cyan-400/30">
              <MapPin className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Exploitation Ostréicole
              </h3>
              <p className="text-slate-200 font-light leading-relaxed mb-4">
                {siteConfig.production.main.address}<br />
                {siteConfig.production.main.postalCode} {siteConfig.production.main.city}<br />
                {siteConfig.production.main.region}
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-blue-400/30">
              <Phone className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-2xl font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Coordonnées
              </h3>
              <div className="space-y-4 text-slate-200 font-light">
                <p>
                  <span className="text-blue-300">Responsable :</span><br />
                  {siteConfig.company.responsable}
                </p>
                <p>
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors break-all">
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {siteConfig.certifications.map((cert, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded border border-white/10 text-center">
                <Award className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                <h4 className="text-lg font-light text-cyan-400 mb-2">{cert.name}</h4>
                <p className="text-slate-300 text-sm font-light">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 text-slate-400">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-light text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Les Huîtres RICOU
          </h3>
          <div className="w-16 h-px bg-cyan-600 mx-auto mb-6"></div>
          <p className="font-light mb-8">
            Ostréiculteurs de père en fils depuis 5 générations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.contact.phone}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>

          <p className="text-sm font-light">
            © {new Date().getFullYear()} EARL Huîtres RICOU - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;