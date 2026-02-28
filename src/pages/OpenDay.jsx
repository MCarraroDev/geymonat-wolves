import { useState, useEffect } from 'react'
import colors from '@/config/colors'
import { Camera, Palette, Lightbulb, Users, Sparkles, Zap, Play, Heart, Trophy, Rocket, Mic } from 'lucide-react'

const OpenDay = () => {
  const [activeCard, setActiveCard] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [images, setImages] = useState([])
  const [hoveredSkill, setHoveredSkill] = useState(null)

  // Carica immagini dal carosello
  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageModules = import.meta.glob('../assets/carusel/*.{jpg,JPG,jpeg,png,webp,gif}', { eager: true })
        const imageArray = Object.values(imageModules).map(module => module.default)
        setImages(imageArray)
      } catch (error) {
        console.error('Error loading images:', error)
      }
    }
    loadImages()
  }, [])

  // Auto-scroll carosello
  useEffect(() => {
    if (images.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 4000) // Cambia immagine ogni 4 secondi

    return () => clearInterval(interval)
  }, [images.length])

  const activities = [
    {
      id: 'fotografia',
      icon: Camera,
      title: 'Fotografia Sportiva',
      shortDesc: 'Cattura l\'azione sul campo',
      fullDesc: 'Impara a fotografare le partite, gestire la luce, usare reflex professionali e raccontare storie attraverso le immagini',
      color: colors.primary,
      emoji: '📸',
      skills: ['Composizione', 'Esposizione', 'Editing', 'Storytelling']
    },
    {
      id: 'design',
      icon: Palette,
      title: 'Grafica & Design',
      shortDesc: 'Crea contenuti che colpiscono',
      fullDesc: 'Usa Photoshop, Illustrator e altri tool per creare locandine, grafiche social, loghi e contenuti visivi accattivanti',
      color: colors.yellow,
      emoji: '🎨',
      skills: ['Photoshop', 'Illustrator', 'Design Thinking', 'Branding']
    },
    {
      id: 'video',
      icon: Play,
      title: 'Video Making',
      shortDesc: 'Produci video professionali',
      fullDesc: 'Riprendi partite ed eventi, monta video highlights, aggiungi effetti speciali e crea contenuti video virali',
      color: colors.purple,
      emoji: '🎬',
      skills: ['Riprese', 'Montaggio', 'Effetti', 'Storytelling']
    },
    {
      id: 'social',
      icon: Sparkles,
      title: 'Social Media',
      shortDesc: 'Gestisci la comunicazione digitale',
      fullDesc: 'Crea strategie social, scrivi post coinvolgenti, analizza metriche e fai crescere la community online',
      color: colors.primary,
      emoji: '📱',
      skills: ['Content Strategy', 'Copywriting', 'Analytics', 'Community']
    },
    {
      id: 'telecronaca',
      icon: Mic,
      title: 'Telecronaca Live',
      shortDesc: 'Commenta le partite in diretta',
      fullDesc: 'Diventa la voce dei Wolves! Impara a commentare partite in diretta, gestire streaming, intervistare giocatori e creare contenuti live coinvolgenti',
      color: colors.yellow,
      emoji: '🎙️',
      skills: ['Public Speaking', 'Live Streaming', 'Interviste', 'Improvvisazione']
    },
    {
      id: 'creative',
      icon: Lightbulb,
      title: 'Creative Thinking',
      shortDesc: 'Pensa fuori dagli schemi',
      fullDesc: 'Sviluppa creatività, trova soluzioni innovative ai problemi e impara a trasformare idee in progetti concreti',
      color: colors.purple,
      emoji: '💡',
      skills: ['Brainstorming', 'Innovation', 'Problem Solving', 'Execution']
    }
  ]

  const whyJoin = [
    {
      icon: Heart,
      title: 'Passione, non solo voti',
      desc: 'Qui conta quello che sai fare, non solo il voto sulla pagella'
    },
    {
      icon: Trophy,
      title: 'Progetti Reali',
      desc: 'Lavori su eventi veri, non solo esercizi in classe'
    },
    {
      icon: Rocket,
      title: 'Competenze Spendibili',
      desc: 'Quello che impari ti servirà nel mondo del lavoro'
    },
    {
      icon: Users,
      title: 'Costruire un team',
      desc: 'Fai parte di un gruppo, in un ambiente positivo'
    }
  ]

  return (
    <div className="w-full" style={{ backgroundColor: colors.dark }}>
      
      {/* Hero Section con Carosello */}
      <div className="relative py-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Badge Open Day */}
          <div className="inline-block mb-8">
            <div 
              className="px-6 py-2 rounded-full border-2 font-bold uppercase text-sm tracking-wider animate-pulse"
              style={{
                borderColor: colors.yellow,
                color: colors.yellow,
                backgroundColor: `${colors.yellow}20`
              }}
            >
              ✨ Open Day 2025
            </div>
          </div>

          {/* Titolo Principale */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            La Scuola è{' '}
            <span 
              style={{
                background: `linear-gradient(135deg, ${colors.yellow}, ${colors.primary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              più di un Banco
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-white/80 mb-8 max-w-3xl leading-relaxed">
            Unisciti al <strong style={{ color: colors.yellow }}>Team Comunicazione Geymonat Wolves</strong> e 
            scopri come trasformare la tua creatività in competenze reali
          </p>

          {/* Carosello Automatico */}
          {images.length > 0 && (
            <div className="mt-12">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-4" style={{ borderColor: colors.yellow }}>
                {/* Immagini con fade */}
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 transition-opacity duration-1000"
                    style={{
                      opacity: currentImageIndex === index ? 1 : 0,
                    }}
                  >
                    <img 
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* Overlay gradient per leggibilità */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)'
                  }}
                />

                {/* Indicatori */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className="h-2 rounded-full transition-all duration-300 hover:scale-110"
                      style={{
                        width: currentImageIndex === index ? '32px' : '12px',
                        backgroundColor: currentImageIndex === index ? colors.yellow : 'rgba(255,255,255,0.5)'
                      }}
                      aria-label={`Vai a immagine ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Scroll indicator */}
          {/* <div className="mt-8">
            <p className="text-white/60 text-lg animate-pulse text-center">
              ⬇️ Scorri per scoprire di più
            </p>
          </div> */}
        </div>
      </div>

      {/* Cosa Farai - Cards Interattive */}
      <div className="py-10 px-6 md:px-12" style={{
        background: `linear-gradient(180deg, ${colors.dark} 0%, ${colors.primary}10 50%, ${colors.dark} 100%)`
      }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              Cosa Farai con Noi?
            </h2>
            <p className="text-xl text-white/70">
              Clicca sulle card per scoprire di più! 👇
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => {
              const Icon = activity.icon
              const isActive = activeCard === activity.id
              
              return (
                <div
                  key={activity.id}
                  onClick={() => setActiveCard(isActive ? null : activity.id)}
                  className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                    isActive ? 'scale-105 shadow-2xl' : 'hover:scale-102'
                  }`}
                  style={{
                    backgroundColor: isActive ? `${activity.color}20` : 'rgba(255,255,255,0.03)',
                    borderColor: isActive ? activity.color : 'rgba(255,255,255,0.1)'
                  }}
                >
                  {/* Icon & Emoji */}
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${activity.color}30` }}
                    >
                      <Icon size={28} style={{ color: activity.color }} strokeWidth={2.5} />
                    </div>
                    <span className="text-4xl">{activity.emoji}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {activity.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-white/70 mb-4">
                    {activity.shortDesc}
                  </p>

                  {/* Expanded Content */}
                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-white/10 animate-fade-in">
                      <p className="text-white/80 mb-4 leading-relaxed">
                        {activity.fullDesc}
                      </p>
                      
                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2">
                        {activity.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{
                              backgroundColor: `${activity.color}40`,
                              color: colors.white
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Click hint */}
                  {!isActive && (
                    <div className="mt-4 text-sm font-semibold" style={{ color: activity.color }}>
                      Clicca per saperne di più →
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Perché Unirti */}
      <div className="py-20 px-6 md:px-12" style={{
        background: `linear-gradient(135deg, ${colors.primary}15, ${colors.purple}15)`
      }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-16">
            Perché Unirti a Noi?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyJoin.map((reason, idx) => {
              const Icon = reason.icon
              return (
                <div
                  key={idx}
                  className="group p-8 rounded-2xl backdrop-blur-sm border-2 border-white/10 hover:border-white/30 transition-all hover:scale-105"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  onMouseEnter={() => setHoveredSkill(idx)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: hoveredSkill === idx ? colors.yellow : `${colors.yellow}30`
                    }}
                  >
                    <Icon 
                      size={32} 
                      color={hoveredSkill === idx ? colors.dark : colors.yellow} 
                      strokeWidth={2.5} 
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {reason.title}
                  </h3>
                  
                  <p className="text-white/70 text-lg">
                    {reason.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Finale */}
      <div className="py-24 px-6 text-center" style={{ backgroundColor: colors.dark }}>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
          Pronti a Iniziare?
        </h2>
        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
          Non serve essere esperti. Serve solo voglia di imparare, sperimentare e divertirsi!
        </p>
        <div 
          className="inline-block px-12 py-6 rounded-full font-black text-2xl uppercase tracking-wider cursor-pointer transition-all hover:scale-110 shadow-2xl"
          style={{
            background: colors.yellow,
            color: colors.dark
          }}
        >
          🐺 Diventa un Lupo anche tu!
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  )
}

export default OpenDay
