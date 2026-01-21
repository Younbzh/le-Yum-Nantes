// 📁 src/App.tsx - Version pour S64 Sauna Bayonne
import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Clock, ChevronRight, Users, Calendar } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [ageVerified, setAgeVerified] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!ageVerified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-800 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-light text-amber-300 mb-2 tracking-wide">
              {siteConfig.clubName}
            </h1>
            <p className="text-zinc-400 text-sm">{siteConfig.city}</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
              <p className="text-zinc-300 text-sm leading-relaxed">
                Ce site est exclusivement réservé à un public majeur et averti.
              </p>
            </div>
            
            <div className="text-zinc-400 text-xs leading-relaxed space-y-3">
              <p>En accédant à ce site, je certifie :</p>
              <ul className="space-y-2 pl-4">
                <li>• Avoir atteint l'âge de majorité légale dans mon pays</li>
                <li>• Être averti du caractère érotique du contenu</li>
                <li>• Avoir mis en place les moyens nécessaires pour empêcher l'accès aux mineurs</li>
                <li>• Consulter ce site à titre personnel</li>
              </ul>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setAgeVerified(true)}
                className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 rounded-lg transition-all duration-300 font-light tracking-wide"
              >
                J'accepte
              </button>
              <button
                onClick={() => window.location.href = 'https://www.google.com'}
                className="flex-1 bg-white/5 hover:bg-white/10 text-zinc-400 py-3 rounded-lg transition-all duration-300 font-light tracking-wide border border-white/10"
              >
                Quitter
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const navItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Le Sauna', href: '#sauna' },
    { label: 'Espaces', href: '#espaces' },
    { label: 'Planning', href: '#planning' },
    { label: 'Soirées', href: '#soirees' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'Contact', href: '#contact' }
  ];

  // Couleurs par orientation
  const getOrientationColor = (orientation: string) => {
    if (orientation.includes('Gay')) return 'from-purple-500/20 to-blue-500/20 border-purple-500/30';
    if (orientation.includes('Bi')) return 'from-pink-500/20 to-purple-500/20 border-pink-500/30';
    if (orientation.includes('Mixte')) return 'from-amber-500/20 to-rose-500/20 border-amber-500/30';
    return 'from-zinc-500/20 to-zinc-600/20 border-zinc-500/30';
  };

  const getOrientationBadgeColor = (orientation: string) => {
    if (orientation.includes('Gay')) return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
    if (orientation.includes('Bi')) return 'bg-pink-500/20 text-pink-300 border-pink-500/30';
    if (orientation.includes('Mixte')) return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    return 'bg-zinc-500/20 text-zinc-300 border-zinc-500/30';
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-900/95 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-light tracking-wider text-amber-300">
                {siteConfig.clubName}
              </h1>
              <p className="text-xs text-zinc-500 font-light">{siteConfig.positioning}</p>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-light text-zinc-400 hover:text-amber-300 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-zinc-400 hover:text-amber-300"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-white/5">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm font-light text-zinc-400 hover:text-amber-300 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-purple-950/20 to-zinc-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.08),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(251,191,36,0.06),transparent_40%)]"></div>
        
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-amber-300 to-purple-300 mb-6 tracking-wide">
            {siteConfig.hero.title}
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 font-light mb-8 leading-relaxed">
            {siteConfig.hero.subtitle}
          </p>
          <p className="text-lg text-zinc-400 font-light mb-4 max-w-2xl mx-auto italic">
            {siteConfig.hero.tagline}
          </p>
          <p className="text-base text-zinc-500 font-light mb-12 max-w-2xl mx-auto">
            {siteConfig.tone.promise}
          </p>
          <a
            href="#sauna"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#sauna')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-purple-700 to-amber-600 hover:from-purple-700 hover:via-purple-800 hover:to-amber-700 text-white px-8 py-4 rounded-lg transition-all duration-300 font-light tracking-wide shadow-lg shadow-purple-900/30"
          >
            {siteConfig.hero.cta}
            <ChevronRight size={20} />
          </a>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {siteConfig.values.map((value, idx) => (
              <div 
                key={idx}
                className="bg-zinc-800/50 border border-white/5 rounded-xl p-4 text-center hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{value.icon}</div>
                <p className="text-zinc-400 text-xs font-light">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sauna" className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-6 relative">
          <h3 className="text-4xl font-light bg-gradient-to-r from-purple-300 to-amber-300 bg-clip-text text-transparent mb-12 text-center">
            Le S64 Sauna Bayonne
          </h3>
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.tone.promise}
          </p>
          
          <div className="bg-gradient-to-br from-zinc-800/80 to-purple-950/20 rounded-2xl p-8 border border-purple-500/10 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-purple-300 font-light mb-2">Principal Public</p>
                <p className="text-2xl text-amber-300">{siteConfig.audience.primary}</p>
              </div>
              <div className="text-center">
                <p className="text-purple-300 font-light mb-2">Également</p>
                <p className="text-2xl text-amber-300">{siteConfig.audience.secondary}</p>
              </div>
              <div className="text-center">
                <p className="text-purple-300 font-light mb-2">Ambiance</p>
                <p className="text-xl text-amber-300">{siteConfig.tone.keywords.slice(0, 3).join(' • ')}</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm mt-6 text-center italic">
              {siteConfig.audience.philosophy}
            </p>
          </div>
        </div>
      </section>

      {/* Spaces Section */}
      <section id="espaces" className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <h3 className="text-4xl font-light bg-gradient-to-r from-amber-300 to-purple-300 bg-clip-text text-transparent mb-4 text-center">
            Nos Espaces
          </h3>
          <p className="text-zinc-400 text-center mb-16 font-light italic">
            600 m² entièrement climatisés pour votre confort
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.spaces.map((space, idx) => (
              <div 
                key={idx}
                className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 hover:border-purple-500/30 hover:bg-gradient-to-br hover:from-zinc-900/80 hover:to-purple-950/20 transition-all duration-500 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {space.emoji}
                </div>
                <h4 className="text-xl font-light text-amber-300 mb-3 group-hover:text-purple-300 transition-colors">
                  {space.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                  {space.description}
                </p>
                <p className="text-zinc-500 text-xs italic">
                  {space.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule Section - Spécifique S64 */}
      {siteConfig.weeklySchedule && (
        <section id="planning" className="py-24 bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="max-w-6xl mx-auto px-6 relative">
            <h3 className="text-4xl font-light bg-gradient-to-r from-purple-300 to-amber-300 bg-clip-text text-transparent mb-4 text-center">
              Planning Hebdomadaire
            </h3>
            <p className="text-zinc-400 text-center mb-16 font-light italic">
              Une programmation unique : Gay • Bi • Mixte
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.weeklySchedule.map((schedule, idx) => (
                <div 
                  key={idx}
                  className={`bg-gradient-to-br ${getOrientationColor(schedule.orientation)} border rounded-xl p-6 hover:shadow-xl transition-all duration-500`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-light text-amber-300 mb-1">{schedule.day}</h4>
                      <p className="text-purple-300 text-sm font-light">{schedule.hours}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs border ${getOrientationBadgeColor(schedule.orientation)}`}>
                      {schedule.orientation}
                    </span>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3 mb-3">
                    <p className="text-amber-400 font-light text-sm mb-1">🎉 {schedule.theme}</p>
                  </div>
                  <p className="text-zinc-400 text-xs italic leading-relaxed">
                    {schedule.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Légende */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-lg px-4 py-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-purple-300 text-sm">100% Gay</span>
              </div>
              <div className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-lg px-4 py-2">
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                <span className="text-pink-300 text-sm">Bi</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-amber-300 text-sm">Mixte</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Thematic Events Section */}
      {siteConfig.thematicEvents && (
        <section className="py-16 bg-zinc-950">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl font-light text-center text-amber-300 mb-12">
              Soirées Thématiques
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {siteConfig.thematicEvents.map((event, idx) => (
                <div 
                  key={idx}
                  className="bg-zinc-900/50 border border-white/5 rounded-xl px-6 py-4 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2">{event.icon}</div>
                    <p className="text-amber-300 font-light mb-1">{event.name}</p>
                    <p className="text-zinc-500 text-xs">{event.day}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Events Detail Section */}
      <section id="soirees" className="py-24 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <h3 className="text-4xl font-light bg-gradient-to-r from-amber-300 to-purple-300 bg-clip-text text-transparent mb-4 text-center">
            Détail des Soirées
          </h3>
          <p className="text-zinc-400 text-center mb-16 font-light italic">
            Découvrez nos événements réguliers
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.events.map((event, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-zinc-800 to-purple-950/30 border border-purple-500/20 rounded-xl p-8 hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-purple-500/10 to-amber-500/10 p-3 rounded-lg">
                    <Users className="text-purple-400" size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-light text-amber-300 mb-2">{event.title}</h4>
                    <p className="text-purple-300 text-sm font-light">{event.schedule}</p>
                  </div>
                </div>
                <p className="text-zinc-300 mb-4 leading-relaxed">{event.description}</p>
                <p className="text-zinc-500 text-sm italic">{event.atmosphere}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <h3 className="text-4xl font-light bg-gradient-to-r from-purple-300 to-amber-300 bg-clip-text text-transparent mb-4 text-center">
            Nos Tarifs
          </h3>
          <p className="text-zinc-500 text-center mb-12 font-light">{siteConfig.pricing.includes}</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tarifs Gay */}
            {siteConfig.pricing.gay && (
              <div className="bg-gradient-to-br from-purple-900/20 to-zinc-800/50 border border-purple-500/20 rounded-2xl p-8">
                <h4 className="text-2xl font-light text-purple-300 mb-6 text-center">Soirées Gay</h4>
                <div className="space-y-4">
                  {siteConfig.pricing.gay.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline border-b border-white/5 pb-3">
                      <div>
                        <span className="text-zinc-400 font-light">{item.label}</span>
                        <p className="text-zinc-500 text-xs">{item.note}</p>
                      </div>
                      <span className="text-2xl font-light text-purple-300">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tarifs Bi */}
            {siteConfig.pricing.bi && (
              <div className="bg-gradient-to-br from-pink-900/20 to-zinc-800/50 border border-pink-500/20 rounded-2xl p-8">
                <h4 className="text-2xl font-light text-pink-300 mb-6 text-center">Jeudi Bi</h4>
                <div className="space-y-4">
                  {siteConfig.pricing.bi.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline border-b border-white/5 pb-3">
                      <div>
                        <span className="text-zinc-400 font-light">{item.label}</span>
                        <p className="text-zinc-500 text-xs">{item.note}</p>
                      </div>
                      <span className="text-2xl font-light text-pink-300">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tarifs Mixte */}
            {siteConfig.pricing.mixte && (
              <div className="bg-gradient-to-br from-amber-900/20 to-zinc-800/50 border border-amber-500/20 rounded-2xl p-8">
                <h4 className="text-2xl font-light text-amber-300 mb-6 text-center">Mar & Ven Mixte</h4>
                <div className="space-y-4">
                  {siteConfig.pricing.mixte.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline border-b border-white/5 pb-3">
                      <div>
                        <span className="text-zinc-400 font-light">{item.label}</span>
                        <p className="text-zinc-500 text-xs">{item.note}</p>
                      </div>
                      <span className="text-2xl font-light text-amber-300">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-light bg-gradient-to-r from-purple-300 to-amber-300 bg-clip-text text-transparent mb-16 text-center">
            Nous Contacter
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <MapPin className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-light text-amber-300 mb-2">Adresse</h4>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    {siteConfig.contact.address.street}<br />
                    {siteConfig.contact.address.city}<br />
                    {siteConfig.contact.address.region}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <Mail className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-light text-amber-300 mb-2">Email</h4>
                  <p className="text-zinc-400 font-light">{siteConfig.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <Clock className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-light text-amber-300 mb-2">Horaires</h4>
                  <div className="text-zinc-400 font-light space-y-1 text-sm">
                    {siteConfig.contact.hours.map((h, idx) => (
                      <p key={idx}>{h.day} : {h.time}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 border border-white/5 rounded-2xl p-8">
              <h4 className="text-2xl font-light text-amber-300 mb-6">Le S64 Recrute !</h4>
              <div className="space-y-4 text-zinc-400 font-light leading-relaxed text-sm">
                <p>Vous souhaitez rejoindre notre équipe ? Envoyez-nous votre CV à {siteConfig.contact.email}</p>
                <p className="pt-4 border-t border-white/5">
                  {siteConfig.contact.parking}
                </p>
                <p className="pt-4 border-t border-white/5 text-xs italic text-zinc-500">
                  {siteConfig.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-light text-amber-300 mb-2">{siteConfig.clubName}</h2>
          <p className="text-zinc-500 text-sm font-light mb-6">{siteConfig.positioning}</p>
          <p className="text-zinc-600 text-xs font-light">
            © 2026 {siteConfig.clubName} - Site réservé aux adultes
          </p>
        </div>
      </footer>
    </div>
  );
}