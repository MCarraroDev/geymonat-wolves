import { useState, useEffect } from 'react'
import colors from '@/config/colors'

function MatchCard({ 
  homeTeam, 
  awayTeam, 
  homeLogo, 
  awayLogo, 
  matchDate,
  homeScore = 0,
  awayScore = 0,
  awayColor = '#2ecc71' // Verde Don Milani, personalizzabile per altre squadre
}) {
  const [timeLeft, setTimeLeft] = useState(null)
  const [isMatchStarted, setIsMatchStarted] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = matchDate - new Date()
      
      if (difference <= 0) {
        setIsMatchStarted(true)
        return null
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [matchDate])

  return (
    <div 
      className="w-full max-w-4xl mx-auto p-8 rounded-2xl shadow-2xl"
      style={{ 
        background: `linear-gradient(to right, ${awayColor} 0%, ${colors.lightBlue} 100%)`,
      }}
    >
      {/* Titolo */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2" style={{ color: colors.yellow }}>Prima Partita</h2>
        <p className="text-white/80 text-lg">
          {matchDate.toLocaleDateString('it-IT', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })} - {matchDate.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>

      {/* Match */}
      <div className="flex items-center justify-between gap-8 mb-8">
        {/* Home Team */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <img 
            src={homeLogo} 
            alt={homeTeam}
            className="w-40 h-auto object-contain drop-shadow-lg"
          />
          <h3 className="text-2xl font-bold text-white text-center">{homeTeam}</h3>
          {isMatchStarted && (
            <div className="text-5xl font-bold" style={{ color: colors.yellow }}>{homeScore}</div>
          )}
        </div>

        {/* VS or Score */}
        <div className="flex items-center justify-center">
          {!isMatchStarted ? (
            <div className="text-4xl font-bold" style={{ color: colors.yellow }}>VS</div>
          ) : (
            <div className="text-4xl font-bold text-white/80">-</div>
          )}
        </div>

        {/* Away Team */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <img 
            src={awayLogo} 
            alt={awayTeam}
            className="w-40 h-auto object-contain drop-shadow-lg"
          />
          <h3 className="text-2xl font-bold text-white text-center">{awayTeam}</h3>
          {isMatchStarted && (
            <div className="text-5xl font-bold" style={{ color: colors.yellow }}>{awayScore}</div>
          )}
        </div>
      </div>

      {/* Countdown */}
      {!isMatchStarted && timeLeft && (
        <div className="bg-white/20 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-center mb-4 text-white">
            Mancano:
          </h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: colors.yellow }}>{timeLeft.days}</div>
              <div className="text-sm text-white/80 mt-1">Giorni</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: colors.yellow }}>{timeLeft.hours}</div>
              <div className="text-sm text-white/80 mt-1">Ore</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: colors.yellow }}>{timeLeft.minutes}</div>
              <div className="text-sm text-white/80 mt-1">Minuti</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: colors.yellow }}>{timeLeft.seconds}</div>
              <div className="text-sm text-white/80 mt-1">Secondi</div>
            </div>
          </div>
        </div>
      )}

      {/* Match Started */}
      {isMatchStarted && (
        <div className="bg-white/20 rounded-xl p-6 text-center">
          <h3 className="text-2xl font-bold" style={{ color: colors.yellow }}>Partita in Corso!</h3>
        </div>
      )}
    </div>
  )
}

export default MatchCard
