import { useEffect, useState, useMemo } from 'react'
import MatchCard from '@/components/MatchCard'
import colors from '@/config/colors'
import matches from '@/config/matches'

function Calendario() {
  const [sortOrder, setSortOrder] = useState('recent') // 'recent' o 'oldest'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sortedMatches = useMemo(() => {
    const sorted = [...matches].sort((a, b) => {
      if (sortOrder === 'recent') {
        return b.date - a.date // Più recente prima
      } else {
        return a.date - b.date // Meno recente prima
      }
    })
    return sorted
  }, [sortOrder])

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
          <p className="text-white/80 text-lg mb-6">
            Segui tutte le nostre partite della stagione 2025/26
          </p>
          
          {/* Filtro */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-white/70 text-lg">Filtra per:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setSortOrder('recent')}
                className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all ${
                  sortOrder === 'recent'
                    ? 'text-black'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
                style={sortOrder === 'recent' ? { backgroundColor: colors.yellow } : {}}
              >
                Più recente
              </button>
              <button
                onClick={() => setSortOrder('oldest')}
                className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all ${
                  sortOrder === 'oldest'
                    ? 'text-black'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
                style={sortOrder === 'oldest' ? { backgroundColor: colors.yellow } : {}}
              >
                Meno recente
              </button>
            </div>
          </div>
        </div>

        {/* Match Cards */}
        <div className="space-y-8 mt-12">
          {sortedMatches.map((match) => (
            <MatchCard
              key={match.id}
              title={match.title}
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
