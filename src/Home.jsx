import { useState, useEffect } from 'react'
import logo from '@/assets/logo/orizzontale.webp'
import colors from '@/config/colors'
import RotatingText from '@/components/RotatingText'
import NextMatchPreview from '@/components/NextMatchPreview'
import { ChevronDown } from 'lucide-react'
import { getNextMatch } from '@/config/matches'

function Home() {
  const [showHero, setShowHero] = useState(true)
  const [isAutoScrolling, setIsAutoScrolling] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const nextMatch = getNextMatch()

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollToContent = () => {
    setIsAutoScrolling(true)
    // Scroll più lento usando animazione custom
    const start = window.scrollY
    const target = window.innerHeight
    const duration = 1500 // 1.5 secondi per uno scroll più lento
    const startTime = performance.now()
    
    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    
    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = easeInOutQuad(progress)
      
      window.scrollTo(0, start + (target - start) * easeProgress)
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      } else {
        setTimeout(() => setIsAutoScrolling(false), 500)
      }
    }
    
    requestAnimationFrame(animateScroll)
  }

  useEffect(() => {
    let scrollTimeout = null
    let previousScrollY = 0

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const isScrollingDown = scrollPosition > previousScrollY
      
      // Se l'utente scrolla manualmente VERSO IL BASSO e non siamo in auto-scroll (soglia: 80px)
      if (!isAutoScrolling && isScrollingDown && scrollPosition > 80 && scrollPosition < window.innerHeight - 100) {
        if (scrollTimeout) clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          scrollToContent()
        }, 100)
      }
      
      // Se sta scrollando verso l'alto, cancella eventuali timeout pendenti
      if (!isScrollingDown && scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
      
      previousScrollY = scrollPosition
      setLastScrollY(scrollPosition)
      
      // Mostra hero se scroll è vicino al top (meno di 80px)
      setShowHero(scrollPosition < 80)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [isAutoScrolling])

  return (
    <div 
      className="w-full flex flex-col items-center px-4 pb-20 relative"
      style={{ backgroundColor: colors.dark, minHeight: '200vh' }}
    >
      {/* Hero Section - Logo e Testo Rotante */}
      <div 
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-6 md:gap-8 px-4 pointer-events-none transition-opacity duration-700"
        style={{ 
          opacity: showHero ? 1 : 0,
          zIndex: 10
        }}
      >
        <div className="w-full max-w-xl lg:max-w-3xl">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-full h-auto"
            style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))' }}
          />
        </div>

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white flex flex-col md:flex-row items-center justify-center gap-3">
            <span>Pronti a</span>
            <RotatingText
              texts={["ululare", "combattere", "dare tutto", "spingere", "crescere"]}
              rotationInterval={2500}
              className="text-4xl md:text-5xl font-bold px-6 py-1 pb-3 rounded-2xl"
              style={{ backgroundColor: colors.yellow, color: colors.dark }}
              staggerDuration={0.03}
            />
          </h2>
        </div>

        {/* Next Match Preview */}
        {nextMatch && (
          <div className="w-full flex justify-center">
            <NextMatchPreview match={nextMatch} />
          </div>
        )}

        {/* Freccia Scroll */}
        <div 
          className="absolute bottom-8 md:bottom-12 animate-bounce pointer-events-auto cursor-pointer"
          onClick={scrollToContent}
        >
          <ChevronDown size={48} style={{ color: colors.yellow }} strokeWidth={2.5} />
        </div>
      </div>

      {/* Spacer per far partire il contenuto dopo la prima schermata */}
      <div className="h-screen"></div>

      {/* Contenuto */}
      <div 
        className="w-full max-w-4xl space-y-8 text-white px-4 py-8 rounded-2xl" 
        style={{ 
          position: 'relative', 
          zIndex: 20,
          backgroundColor: colors.dark
        }}
      >
        <section className="space-y-4">
          <h2 className="text-4xl font-bold" style={{ color: colors.yellow }}>Chi Siamo</h2>
          <p className="text-xl leading-relaxed">
            L'Istituto di istruzione Ludovico Geymonat è tra le 23 scuole superiori iscritte alla quarta edizione della Varese School Cup, progetto sportivo ed educativo che coinvolge le scuole superiori del territorio attraverso il basket e numerose attività complementari. La manifestazione non è soltanto un torneo, ma un'occasione di crescita personale e collettiva: gli studenti potranno contribuire secondo le proprie passioni e competenze, curando la comunicazione, la grafica, la musica, la danza e il tifo positivo.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-4xl font-bold" style={{ color: colors.yellow }}>La Nostra Storia</h2>
          <p className="text-xl leading-relaxed">
            Geymonat Wolves nasce dalla determinazione degli studenti, da sempre vogliosi di mettersi in gioco in un progetto volto alla loro crescita. La quarta edizione della manifestazione è stata l'occasione giusta per mettere in pratica il desiderio dei ragazzi. La nostra è una realtà giovane, ancora tutta da scrivere, ma l'obiettivo comune è di non smettere mai di riempire le pagine.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-4xl font-bold" style={{ color: colors.yellow }}>I Nostri Obiettivi</h2>
          <p className="text-xl leading-relaxed">
            L'iniziativa promuove valori come collaborazione, inclusione, rispetto delle regole e benessere, offrendo ai ragazzi un'esperienza formativa a 360°. Punti cardine del progetto la valorizzazione della nostra scuola, da cui deve emergere il senso di appartenenza, e l'uso corretto dei social. Le esperienze stimoleranno ogni team alla ricerca di soluzione intelligenti per ogni tipo di problema.
          </p>
        </section>

        <section className="space-y-4 pb-32">
          <h2 className="text-4xl font-bold" style={{ color: colors.yellow }}>Il Nostro Impegno</h2>
          <p className="text-xl leading-relaxed">
            La Varese School Cup è l'occasione per porre gli studenti al centro della scena, essendone i veri protagonisti. Il torneo non lo fanno soltanto gli atleti ma ogni team dovrà avere un peso determinante nel progetto, che non mira solamente alla valorizzazione sportiva ma anche all'educazione alla cittadinanza.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Home