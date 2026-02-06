import React from 'react';
import { MapPin, Phone, Instagram, Clock, Heart, Leaf, Euro, ShoppingBasket, Bike, Utensils, Star } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

function App() {
  const CheeseIcon = () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19h16M4 19l2-6h12l2 6M6 13L8 6h8l2 7"/>
      <circle cx="9" cy="10" r="1" fill="currentColor"/>
      <circle cx="15" cy="11" r="1" fill="currentColor"/>
      <circle cx="12" cy="15" r="1" fill="currentColor"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50/30">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-stone-100 to-orange-50">
        {/* Texture overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-orange-100 border-2 border-orange-200 rounded-full font-bold text-orange-900 text-sm">
              <Heart className="w-4 h-4" />
              <span>FROMAGERIE ENGAGÉE & DÉCALÉE</span>
            </div>

            {/* Main Title */}
            <h1 className="space-y-4">
              <span className="block text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight text-amber-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                CROÛTE
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-light text-stone-700 uppercase tracking-wider">
                Fromages
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
              {siteConfig.tagline}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2"
              >
                <Phone className="w-6 h-6" />
                {siteConfig.contact.phone}
              </a>

              <a 
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white hover:bg-stone-50 text-amber-900 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 border-2 border-amber-900 shadow-lg"
              >
                <Instagram className="w-6 h-6" />
                Instagram
              </a>
            </div>

            {/* Location */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 text-stone-700 font-medium">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>{siteConfig.contact.quartier} - Nantes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0,64 Q360,0 720,64 T1440,64 L1440,120 L0,120 Z" fill="#fafaf9"/>
          </svg>
        </div>
      </header>

      {/* Story Section with Photo */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo of Régis */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="/regis-ferre-crpoute.jpeg"
                    alt="Régis Ferré - Croûte Fromages"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-300 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-900 rounded-full font-bold text-sm mb-4">
                  <Heart className="w-4 h-4" />
                  <span>NOTRE HISTOIRE</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-stone-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Deux passionnés, un projet
                </h2>
              </div>

              <p className="text-lg text-stone-600 leading-relaxed">
                {siteConfig.story.concept}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
                  <h3 className="font-black text-lg text-amber-900 mb-2">{siteConfig.founders.regis.name}</h3>
                  <p className="text-sm text-stone-700 mb-2">{siteConfig.founders.regis.origin}</p>
                  <p className="text-sm text-stone-600 italic">{siteConfig.founders.regis.experience}</p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
                  <h3 className="font-black text-lg text-amber-900 mb-2">{siteConfig.founders.virginie.name}</h3>
                  <p className="text-sm text-stone-700 mb-2">{siteConfig.founders.virginie.background}</p>
                  <p className="text-sm text-stone-600 italic">{siteConfig.founders.virginie.reconversion}</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-stone-100">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
                  <span className="text-3xl font-black text-stone-800">{siteConfig.reviews.rating}/5</span>
                </div>
                <p className="text-stone-600">Basé sur {siteConfig.reviews.count} avis Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fromages Section with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-100 text-amber-900 rounded-full font-bold text-sm mb-4">
              <div className="w-6 h-6">
                <CheeseIcon />
              </div>
              <span>NOS FROMAGES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-stone-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Le terroir dans votre assiette
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Une sélection de fromages locaux, bio et raisonnés de France, Espagne et Italie
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square">
                <img 
                  src="/chevres-du-pays-nantais.jpeg"
                  alt="Chèvres du Pays Nantais"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/90 to-transparent p-6">
                <h3 className="text-white font-bold text-xl">Chèvres artisanaux</h3>
                <p className="text-stone-200 text-sm">Cendrés & fleuris du terroir</p>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square">
                <img 
                  src="/fromages-du-pays-nantais.jpeg"
                  alt="Fromages du Pays Nantais"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/90 to-transparent p-6">
                <h3 className="text-white font-bold text-xl">Spécialités locales</h3>
                <p className="text-stone-200 text-sm">Curé Nantais, Pavé du Gois...</p>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 md:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 text-amber-700">
                    <CheeseIcon />
                  </div>
                  <h3 className="text-amber-900 font-black text-2xl mb-2">+100</h3>
                  <p className="text-stone-700 font-semibold">Références disponibles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fromages List */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 sm:p-12 border-2 border-amber-200">
            <h3 className="text-3xl font-black text-stone-800 mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Fromages de Loire-Atlantique & Vendée
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.fromages.locaux.map((fromage, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-200"
                >
                  <h4 className="font-black text-lg text-amber-900 mb-2">{fromage.name}</h4>
                  <p className="text-sm font-semibold text-stone-600 mb-2">{fromage.type}</p>
                  <p className="text-sm text-stone-500 leading-relaxed">{fromage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-stone-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Notre concept
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Fromagerie, restaurant et épicerie fine en un seul lieu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.services.map((service, idx) => {
              const icons = {
                cheese: CheeseIcon,
                utensils: Utensils,
                'shopping-basket': ShoppingBasket,
                bike: Bike
              };
              const Icon = icons[service.icon as keyof typeof icons];

              return (
                <div 
                  key={idx}
                  className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-stone-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {Icon === CheeseIcon ? (
                      <div className="w-10 h-10 text-white">
                        <CheeseIcon />
                      </div>
                    ) : (
                      <Icon className="w-10 h-10 text-white" />
                    )}
                  </div>
                  <h3 className="text-xl font-black text-stone-800 mb-3">{service.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* Restaurant Detail */}
          <div className="mt-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full font-bold text-sm">
                <Utensils className="w-5 h-5" />
                <span>{siteConfig.hours.restaurant}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
                Notre cuisine fromagère
              </h3>
              <p className="text-xl text-white/90 leading-relaxed">
                {siteConfig.restaurant.philosophy}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h4 className="font-bold text-lg mb-2">{siteConfig.restaurant.formula}</h4>
                  <p className="text-white/80 text-sm">{siteConfig.restaurant.concept}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h4 className="font-bold text-lg mb-2">Planches</h4>
                  <p className="text-white/80 text-sm">{siteConfig.restaurant.planche}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-100 text-green-800 rounded-full font-bold text-sm mb-4">
              <Heart className="w-4 h-4" />
              <span>NOS ENGAGEMENTS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-stone-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Une fromagerie engagée
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.engagement.map((item, idx) => {
              const icons = {
                'map-pin': MapPin,
                heart: Heart,
                leaf: Leaf,
                euro: Euro
              };
              const Icon = icons[item.icon as keyof typeof icons];

              return (
                <div 
                  key={idx}
                  className="text-center space-y-4"
                  style={{ animation: 'fadeInUp 0.6s ease-out forwards', animationDelay: `${idx * 100}ms`, opacity: 0 }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full shadow-lg">
                    <Icon className="w-10 h-10 text-green-700" />
                  </div>
                  <h3 className="text-xl font-black text-stone-800">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-amber-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-100 text-amber-900 rounded-full font-black text-xl mb-4">
                <Clock className="w-7 h-7" />
                <span>HORAIRES</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {Object.entries(siteConfig.hours.schedule).map(([day, hours]) => (
                <div 
                  key={day}
                  className={`flex items-center justify-between px-6 py-4 rounded-xl font-semibold ${
                    hours === 'Fermé' 
                      ? 'bg-stone-100 text-stone-400' 
                      : 'bg-gradient-to-r from-amber-50 to-orange-50 text-stone-800 border-2 border-amber-200'
                  }`}
                >
                  <span className="capitalize text-lg">{day}</span>
                  <span className="text-lg">{hours}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 pt-6 border-t-2 border-amber-200">
              <p className="text-lg text-stone-700 font-semibold">
                {siteConfig.hours.restaurant}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-stone-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Venez nous voir !
            </h2>
            <p className="text-lg text-stone-600">
              {siteConfig.contact.quartier}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-xl border-2 border-amber-200">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <MapPin className="w-7 h-7 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-black text-stone-800 text-lg mb-1">Adresse</h3>
                      <p className="text-stone-700">{siteConfig.contact.address}</p>
                      <p className="text-stone-600 text-sm mt-1">{siteConfig.contact.quartier}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Phone className="w-7 h-7 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-black text-stone-800 text-lg mb-1">Téléphone</h3>
                      <a 
                        href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                        className="text-amber-600 hover:text-amber-700 font-bold text-lg"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 border-t-2 border-amber-200">
                    <h3 className="font-black text-stone-800 text-lg mb-4">Suivez-nous</h3>
                    <a 
                      href={siteConfig.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <Instagram className="w-5 h-5" />
                      <span>@fromageriecroute</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Bike className="w-6 h-6" />
                  <h3 className="font-black text-lg">LIVRAISON VÉLOCARGO</h3>
                </div>
                <p className="font-medium">Livraison écologique dans le quartier + Accueil de l'AMAP locale</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px] border-4 border-white">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.5!2d${siteConfig.contact.location.lng}!3d${siteConfig.contact.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDEzJzA2LjIiTiAxwrAzMycxMy4wIlc!5e0!3m2!1sfr!2sfr!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Fromagerie Croûte Nantes"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-stone-800 via-amber-900 to-stone-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {siteConfig.name}
              </h3>
              <p className="text-stone-300 text-lg">{siteConfig.tagline}</p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4 text-amber-300">Contact</h4>
              <div className="space-y-2 text-stone-300">
                <p className="text-sm">{siteConfig.contact.address}</p>
                <p className="font-bold text-white text-lg">{siteConfig.contact.phone}</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4 text-amber-300">Horaires</h4>
              <p className="text-stone-300 font-semibold">Lundi au Vendredi</p>
              <p className="text-white font-bold text-lg">9h30 - 19h</p>
              <p className="text-stone-300 font-semibold mt-2">Samedi</p>
              <p className="text-white font-bold text-lg">9h - 13h</p>
            </div>
          </div>

          <div className="border-t border-amber-700 pt-8 text-center text-stone-400 text-sm">
            <p>&copy; {new Date().getFullYear()} {siteConfig.fullName}. Tous droits réservés.</p>
            <p className="mt-2">Fromagerie artisanale à Nantes, quartier Champ de Mars / Olivettes</p>
            <p className="mt-4 text-stone-500">
              Site créé par <a href="https://avalon-stratege.fr" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors duration-200 underline decoration-stone-500">Avalon Stratège</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Animations CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lato:wght@400;700;900&display=swap');

        * {
          font-family: 'Lato', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;