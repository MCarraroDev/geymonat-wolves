import MatchCard from '@/components/MatchCard'
import colors from '@/config/colors'
import geymonatLogo from '@/assets/logo/verticale.webp'
import donMilaniLogo from '@/assets/logo/teams/donmilani/Logo varese school cup DON MILANI colori.webp'

function Calendario() {
  // Data della partita: 17 novembre 2025 alle 8:00
  const matchDate = new Date(2025, 10, 17, 8, 0, 0) // Mese 10 = novembre (0-indexed)

  return (
    <div 
      className="w-full min-h-screen flex flex-col items-center px-4 pt-32 pb-20 md:pt-20"
      style={{ backgroundColor: colors.dark }}
    >
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-5xl font-bold mb-4"
            style={{ 
              color: colors.yellow 
            }}
          >
            Calendario Partite
          </h1>
          <p className="text-white/80 text-lg">
            Segui tutte le nostre partite della stagione 2025/26
          </p>
        </div>

        {/* Match Card */}
        <MatchCard
          homeTeam="Geymonat Wolves"
          awayTeam="Don Milani Shooters"
          homeLogo={geymonatLogo}
          awayLogo={donMilaniLogo}
          matchDate={matchDate}
          homeScore={0}
          awayScore={0}
          awayColor="#2D5724"
        />

        {/* Placeholder per future partite */}
        <div className="mt-12 text-center text-white/60">
          <p>Altre partite verranno aggiunte presto...</p>
        </div>
      </div>
    </div>
  )
}

export default Calendario
