import React from 'react';
import { Phone, Instagram, Facebook, MapPin, Clock, Apple, Heart, Star, Smile, Check, TrendingUp, Zap } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

function App() {
  const SmoothieIcon = () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 2h8M9 2v2h6V2M8 4h8l-1 6H9l-1-6zM7 10h10v2a5 5 0 01-10 0v-2z"/>
      <line x1="7" y1="10" x2="17" y2="10"/>
    </svg>
  );

  const DumbbellIcon = () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6.5 6.5l11 11M6.5 17.5l11-11"/>
      <circle cx="5" cy="5" r="2"/>
      <circle cx="19" cy="19" r="2"/>
      <circle cx="5" cy="19" r="2"/>
      <circle cx="19" cy="5" r="2"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50/30">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-green-500 via-green-600 to-lime-600">
        {/* Animated background pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            {/* Logo */}
            <div className="flex justify-center mb-8 animate-bounce-slow">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white p-4 shadow-2xl">
                <img 
                  src="/logo-leyum.jpg"
                  alt="Le Yum Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-green-900 rounded-full font-black text-sm shadow-lg animate-pulse">
              <Star className="w-5 h-5" />
              <span className="uppercase tracking-wider">Premier en France • Concept Australien</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tight">
              <span className="block" style={{ fontFamily: "'Poppins', sans-serif" }}>
                LE YUM
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-2xl sm:text-3xl text-white/90 font-bold max-w-3xl mx-auto">
              {siteConfig.tagline}
            </p>

            {/* Formula Badge */}
            <div className="flex justify-center pt-4">
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/20 backdrop-blur-md rounded-2xl border-2 border-white/30">
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-300">80%</div>
                  <div className="text-sm font-bold text-white">Nutrition</div>
                </div>
                <div className="text-3xl font-black text-white">+</div>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-300">20%</div>
                  <div className="text-sm font-bold text-white">Sport</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="px-10 py-5 bg-yellow-400 hover:bg-yellow-500 text-green-900 text-lg font-black rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center gap-3"
              >
                <Phone className="w-6 h-6" />
                {siteConfig.contact.phone}
              </a>

              <div className="flex gap-3">
                <a 
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a 
                  href={siteConfig.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0,64 Q360,0 720,64 T1440,64 L1440,120 L0,120 Z" fill="#ffffff"/>
          </svg>
        </div>
      </header>

      {/* Concept Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-100 text-green-800 rounded-full font-bold text-sm mb-4">
              <Zap className="w-4 h-4" />
              <span>NOTRE MÉTHODE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-green-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {siteConfig.concept.formula}
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              {siteConfig.concept.philosophy}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Nutrition Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-lime-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-green-500 to-lime-600 rounded-3xl p-8 text-white shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                  <Apple className="w-12 h-12" />
                </div>
                <div className="text-5xl font-black mb-2">80%</div>
                <h3 className="text-2xl font-black mb-4">Nutrition</h3>
                <p className="text-white/90 leading-relaxed">
                  Conseils alimentaires personnalisés, gestion de votre alimentation au quotidien. Élise vous guide avec douceur et fermeté.
                </p>
              </div>
            </div>

            {/* Sport Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 text-white shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                  <div className="w-12 h-12">
                    <DumbbellIcon />
                  </div>
                </div>
                <div className="text-5xl font-black mb-2">20%</div>
                <h3 className="text-2xl font-black mb-4">Sport</h3>
                <p className="text-white/90 leading-relaxed">
                  Séances encadrées mercredi et samedi pour compléter votre transformation. L'activité physique essentielle à vos résultats.
                </p>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-100 to-lime-100 rounded-2xl border-2 border-green-200 shadow-lg">
              <Check className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-black text-green-900">{siteConfig.concept.guarantee}</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Élise Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-lime-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="/elise-coach.jpg"
                    alt="Élise - Coach nutrition Le Yum"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-400 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full font-bold text-sm mb-4">
                  <Heart className="w-4 h-4" />
                  <span>VOTRE COACH</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-green-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {siteConfig.founder.name}
                </h2>
                <p className="text-xl text-green-700 font-semibold mb-2">{siteConfig.founder.role}</p>
              </div>

              <p className="text-lg text-stone-600 leading-relaxed">
                {siteConfig.founder.background}. {siteConfig.founder.origin}, elle a décidé de le transposer à Nantes, une première en France.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-green-100">
                <p className="text-lg text-stone-700 italic leading-relaxed">
                  <span className="text-green-700 font-bold">Mission :</span> {siteConfig.founder.mission}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-100 to-lime-100 rounded-xl p-5 border-2 border-green-200">
                  <Star className="w-6 h-6 text-green-600 mb-2" />
                  <h4 className="font-black text-green-900">Premier en France</h4>
                  <p className="text-sm text-stone-700">Concept unique australien</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-5 border-2 border-yellow-200">
                  <Check className="w-6 h-6 text-orange-600 mb-2" />
                  <h4 className="font-black text-orange-900">Résultats prouvés</h4>
                  <p className="text-sm text-stone-700">Méthode efficace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-100 text-green-800 rounded-full font-bold text-sm mb-4">
              <TrendingUp className="w-4 h-4" />
              <span>COMMENT ÇA MARCHE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-green-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Votre parcours en 4 étapes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.process.steps.map((step, idx) => (
              <div 
                key={idx}
                className="relative group"
                style={{ animation: 'fadeInUp 0.6s ease-out forwards', animationDelay: `${idx * 150}ms`, opacity: 0 }}
              >
                <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-green-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-lime-600 rounded-2xl flex items-center justify-center mb-6 text-white text-3xl font-black shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-black text-green-900 mb-3">{step.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shake Bar Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-100 text-yellow-900 rounded-full font-bold text-sm mb-4">
              <div className="w-5 h-5">
                <SmoothieIcon />
              </div>
              <span>SHAKE BAR</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-green-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Un espace cosy pour vous
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              {siteConfig.shakeBar.concept}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {siteConfig.shakeBar.products.map((product, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-yellow-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
                  <div className="w-10 h-10">
                    <SmoothieIcon />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-green-900 mb-3">{product.name}</h3>
                <p className="text-stone-600 leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.benefits.map((benefit, idx) => {
              const icons = {
                check: Check,
                star: Star,
                heart: Heart,
                smile: Smile
              };
              const Icon = icons[benefit.icon as keyof typeof icons];

              return (
                <div key={idx} className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-lime-100 rounded-full shadow-lg">
                    <Icon className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-black text-green-900">{benefit.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-lime-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-green-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-100 text-green-800 rounded-full font-black text-xl mb-4">
                <Clock className="w-7 h-7" />
                <span>HORAIRES</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-6">
              {Object.entries(siteConfig.hours.schedule).map(([day, hours]) => (
                <div 
                  key={day}
                  className={`flex items-center justify-between px-6 py-4 rounded-xl font-semibold ${
                    hours === 'Fermé' 
                      ? 'bg-stone-100 text-stone-400' 
                      : 'bg-gradient-to-r from-green-50 to-lime-50 text-green-900 border-2 border-green-200'
                  }`}
                >
                  <span className="capitalize text-lg">{day}</span>
                  <span className="text-lg">{hours}</span>
                </div>
              ))}
            </div>

            <div className="text-center pt-6 border-t-2 border-green-200">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full font-bold shadow-lg">
                <DumbbellIcon />
                <span>{siteConfig.hours.sport}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-green-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Venez nous découvrir
            </h2>
            <p className="text-lg text-stone-600">Quai Magellan, Nantes</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl p-8 shadow-xl border-2 border-green-200">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <MapPin className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-black text-green-900 text-lg mb-1">Adresse</h3>
                      <p className="text-stone-700">{siteConfig.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Phone className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-black text-green-900 text-lg mb-1">Téléphone</h3>
                      <a 
                        href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                        className="text-green-600 hover:text-green-700 font-bold text-lg"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 border-t-2 border-green-200">
                    <h3 className="font-black text-green-900 text-lg mb-4">Suivez-nous</h3>
                    <div className="flex gap-3">
                      <a 
                        href={siteConfig.contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <Instagram className="w-5 h-5" />
                        <span>Instagram</span>
                      </a>
                      <a 
                        href={siteConfig.contact.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <Facebook className="w-5 h-5" />
                        <span>Facebook</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px] border-4 border-white">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.5!2d${siteConfig.contact.location.lng}!3d${siteConfig.contact.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDEyJzM0LjQiTiAxwrAzMic0OS4xIlc!5e0!3m2!1sfr!2sfr!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Le Yum Nantes"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-green-900 via-green-800 to-lime-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {siteConfig.name}
              </h3>
              <p className="text-green-200 text-lg">{siteConfig.tagline}</p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4 text-lime-300">Contact</h4>
              <div className="space-y-2 text-green-200">
                <p className="text-sm">{siteConfig.contact.address}</p>
                <p className="font-bold text-white text-lg">{siteConfig.contact.phone}</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4 text-lime-300">Horaires</h4>
              <p className="text-green-200 font-semibold">Lundi au Vendredi</p>
              <p className="text-white font-bold text-lg">12h - 18h</p>
              <p className="text-green-200 text-sm mt-2">{siteConfig.hours.sport}</p>
            </div>
          </div>

          <div className="border-t border-green-700 pt-8 text-center text-green-300 text-sm">
            <p>&copy; {new Date().getFullYear()} {siteConfig.fullName}. Tous droits réservés.</p>
            <p className="mt-2">Shake Bar & Coaching Nutrition/Sport à Nantes</p>
            <p className="mt-4 text-green-400">
              Site créé par <a href="https://avalon-stratege.fr" target="_blank" rel="noopener noreferrer" className="hover:text-lime-300 transition-colors duration-200 underline">Avalon Stratège</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Animations CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
