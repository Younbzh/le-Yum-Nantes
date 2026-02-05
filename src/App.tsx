import React, { useState, useEffect } from 'react';
import { 
  Beer, 
  Wine, 
  Flame,
  Tv,
  Target,
  Music,
  MapPin,
  Phone,
  Clock,
  Users,
  Sparkles,
  Calendar,
  Info,
  ChevronRight,
  Star,
  Home,
  GlassWater
} from 'lucide-react';
import { siteConfig } from './config/siteConfig';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const iconMap: { [key: string]: any } = {
    beer: Beer,
    wine: Wine,
    flame: Flame,
    glass: GlassWater,
    tv: Tv,
    target: Target,
    music: Music,
    circle: Target
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-sans antialiased">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-stone-900/98 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-900 rounded-lg flex items-center justify-center shadow-lg transform -rotate-3">
              <Beer className="w-7 h-7 text-amber-300" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-amber-400 uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {siteConfig.name}
              </h1>
              <p className="text-xs text-stone-400 tracking-wide">{siteConfig.tagline}</p>
            </div>
          </div>
          
          <a 
            href={`tel:${siteConfig.contact.phone}`}
            className="hidden sm:flex items-center gap-2 bg-amber-600 text-stone-900 px-5 py-3 rounded-lg font-bold uppercase text-sm hover:bg-amber-500 transition-all duration-300 shadow-lg"
          >
            <Phone className="w-4 h-4" />
            Appeler
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(217, 119, 6, 0.05) 20px, rgba(217, 119, 6, 0.05) 40px)`
          }}></div>
        </div>

        {/* Animated accents */}
        <div className={`absolute top-20 right-10 w-96 h-96 bg-green-800/30 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
        <div className={`absolute bottom-20 left-10 w-80 h-80 bg-amber-700/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Status Badge */}
            <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg shadow-xl transform -rotate-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
                <p className="text-white font-bold text-sm uppercase tracking-wider">
                  {siteConfig.transition.status}
                </p>
              </div>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-none uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              <span className="text-amber-400 drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]">
                Wine
              </span>
              <br />
              <span className="text-green-500 drop-shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                Beer
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl text-amber-300 mb-4 font-bold italic">
              "{siteConfig.slogan}"
            </p>

            <p className="text-base sm:text-lg text-stone-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              {siteConfig.statusMessage}
            </p>

            <div className="mb-10 p-6 bg-stone-800/60 backdrop-blur-sm border-2 border-amber-600/50 rounded-xl max-w-2xl mx-auto">
              <p className="text-stone-200 text-lg font-semibold mb-2">
                {siteConfig.transition.newNameReveal}
              </p>
              <p className="text-amber-400 font-bold">
                {siteConfig.transition.reopeningMessage}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#about" 
                className="w-full sm:w-auto bg-amber-600 text-stone-900 px-10 py-5 rounded-lg font-black uppercase text-lg hover:bg-amber-500 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2"
              >
                Découvrir le projet
                <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href={`tel:${siteConfig.contact.phone}`}
                className="w-full sm:w-auto border-3 border-amber-500 text-amber-400 px-10 py-5 rounded-lg font-black uppercase text-lg hover:bg-amber-500/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-amber-400 transform rotate-90" />
        </div>
      </section>

      {/* New Owners Section */}
      <section id="about" className="py-24 bg-stone-950 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-green-900/30 border border-green-700 rounded-lg">
              <p className="text-green-400 font-bold text-sm uppercase tracking-wider">Nouvelle Équipe</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4 uppercase text-amber-400" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Grégory & Guillermo
            </h2>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto">
              Deux passionnés reprennent le Wine Beer pour en faire LE lieu convivial de Nozay
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {siteConfig.newOwners.map((owner, idx) => (
              <div key={idx} className="bg-gradient-to-br from-stone-800 to-stone-900 p-8 rounded-xl border-2 border-amber-600/30 hover:border-amber-600 transition-all duration-300 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <Users className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-amber-400">{owner.name}</h3>
                    <p className="text-stone-400 font-semibold">{owner.role}</p>
                  </div>
                </div>
                <div className="space-y-3 text-stone-300">
                  {owner.age && (
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full block"></span>
                      <span>{owner.age} ans</span>
                    </p>
                  )}
                  {owner.origin && (
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full block"></span>
                      <span>{owner.origin}</span>
                    </p>
                  )}
                  <p className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full block mt-2"></span>
                    <span>{owner.background}</span>
                  </p>
                  {owner.vision && (
                    <p className="italic text-amber-300 font-medium mt-4 pt-4 border-t border-stone-700">
                      "{owner.vision}"
                    </p>
                  )}
                  {owner.expertise && (
                    <p className="italic text-green-300 font-medium mt-4 pt-4 border-t border-stone-700">
                      {owner.expertise}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Venue Info */}
          <div className="bg-gradient-to-br from-amber-900/30 to-green-900/30 p-8 rounded-xl border-2 border-amber-600 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Home className="w-8 h-8 text-amber-400" strokeWidth={2} />
              <h3 className="text-2xl font-black text-amber-400 uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Un Lieu Emblématique
              </h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-stone-900/50 rounded-lg">
                <p className="text-3xl font-black text-amber-400 mb-1">{siteConfig.venue.surfaceIndoor}</p>
                <p className="text-stone-400 text-sm uppercase tracking-wide">Salle Intérieure</p>
              </div>
              <div className="text-center p-4 bg-stone-900/50 rounded-lg">
                <p className="text-3xl font-black text-green-400 mb-1">{siteConfig.venue.surfaceOutdoor}</p>
                <p className="text-stone-400 text-sm uppercase tracking-wide">Terrasse</p>
              </div>
              <div className="text-center p-4 bg-stone-900/50 rounded-lg">
                <p className="text-3xl font-black text-amber-400 mb-1">{siteConfig.venue.totalSurface}</p>
                <p className="text-stone-400 text-sm uppercase tracking-wide">Total</p>
              </div>
            </div>
            <p className="text-stone-300 leading-relaxed">
              {siteConfig.venue.history}
            </p>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4 uppercase text-amber-400" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Notre Sélection
            </h2>
            <p className="text-xl text-stone-300">
              Bières artisanales, vins de qualité et rhums arrangés maison
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {siteConfig.offerings.beverages.map((beverage, idx) => {
              const Icon = iconMap[beverage.icon];
              return (
                <div 
                  key={idx} 
                  className="group bg-gradient-to-br from-stone-800 to-stone-900 p-8 rounded-xl border-2 border-stone-700 hover:border-amber-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-3 uppercase text-amber-400 group-hover:text-amber-300 transition-colors">
                    {beverage.category}
                  </h3>
                  <p className="text-stone-400 leading-relaxed">
                    {beverage.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Activities */}
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-black mb-4 uppercase text-green-400" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Animations & Jeux
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.offerings.activities.map((activity, idx) => {
              const Icon = iconMap[activity.icon];
              return (
                <div 
                  key={idx} 
                  className="bg-stone-800/50 p-6 rounded-xl border border-green-700/50 hover:border-green-500 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-green-400 mb-4" strokeWidth={2} />
                  <h4 className="text-lg font-bold mb-2 text-green-300">{activity.title}</h4>
                  <p className="text-stone-400 text-sm">{activity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4 uppercase text-amber-400" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Ils en Parlent
            </h2>
            <p className="text-xl text-stone-300">
              Avis de clients sur l'ancienne équipe
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-stone-900 p-8 rounded-xl border border-amber-600/30 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-stone-300 italic leading-relaxed mb-4">
                  "{testimonial.comment}"
                </p>
                <p className="text-stone-500 text-sm font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-black mb-8 uppercase text-amber-400" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Nous Trouver
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 bg-stone-800 p-6 rounded-xl border-l-4 border-amber-600">
                  <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <p className="font-bold text-lg mb-1 text-amber-400">Adresse</p>
                    <p className="text-stone-200">{siteConfig.contact.fullAddress}</p>
                    <p className="text-sm text-stone-400 mt-2">{siteConfig.ambiance.atmosphere}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-stone-800 p-6 rounded-xl border-l-4 border-green-600">
                  <Phone className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <p className="font-bold text-lg mb-1 text-green-400">Téléphone</p>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-stone-200 text-lg hover:text-amber-400 transition-colors font-semibold">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-stone-800 p-6 rounded-xl border-l-4 border-orange-600">
                  <Info className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <p className="font-bold text-lg mb-1 text-orange-400">Statut</p>
                    <p className="text-stone-200">{siteConfig.transition.reopeningMessage}</p>
                    <p className="text-sm text-stone-400 mt-2">SIRET: {siteConfig.contact.siret}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-900/50 to-green-900/50 p-8 rounded-xl border-2 border-amber-600">
                <h3 className="text-2xl font-black mb-4 uppercase text-amber-400">Points Forts</h3>
                <ul className="space-y-3">
                  {siteConfig.ambiance.strengths.map((strength, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-stone-200">
                      <span className="w-2 h-2 bg-amber-500 rounded-full block"></span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Map */}
            <div className="h-[500px] lg:h-full rounded-xl overflow-hidden shadow-2xl border-4 border-amber-600">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.8!2d${siteConfig.contact.coordinates.lng}!3d${siteConfig.contact.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDM0JzA2LjAiTiAxwrAzNycwOC4wIlc!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wine Beer - Localisation"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 border-t-4 border-amber-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-green-700 to-green-900 rounded-lg flex items-center justify-center transform -rotate-3">
                <Beer className="w-8 h-8 text-amber-300" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-2xl font-black text-amber-400 uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {siteConfig.name}
                </p>
                <p className="text-sm text-stone-400">{siteConfig.tagline}</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-stone-400 mb-2">
                {siteConfig.contact.fullAddress}
              </p>
              <p className="text-stone-200 font-semibold mb-2">
                {siteConfig.contact.phone}
              </p>
              <p className="text-xs text-stone-500">
                © 2025 Wine Beer. Tous droits réservés.
              </p>
              <p className="text-xs text-stone-500 mt-1">
                Site créé par <span className="text-amber-500 font-semibold">Avalon Stratège</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;