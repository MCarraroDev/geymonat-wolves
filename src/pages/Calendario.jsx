import { useEffect } from 'react'
import MatchCard from '@/components/MatchCard'
import colors from '@/config/colors'
import matches from '@/config/matches'

function Calendario() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

        {/* Match Cards */}
        <div className="space-y-8">
          {matches.map((match) => (
            <MatchCard
              key={match.id}
              homeTeam={match.homeTeam.name}
              awayTeam={match.awayTeam.name}
              homeLogo={match.homeTeam.logo}
              awayLogo={match.awayTeam.logo}
              matchDate={match.date}
              homeScore={match.homeScore}
              awayScore={match.awayScore}
              awayColor={match.awayTeam.color}
            />
          ))}
        </div>

        {/* Message if no matches */}
        {matches.length === 0 && (
          <div className="mt-12 text-center text-white/60">
            <p>Nessuna partita in programma al momento...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Calendario
