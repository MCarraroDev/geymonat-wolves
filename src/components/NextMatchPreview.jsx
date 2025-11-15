import { useState, useEffect } from 'react'
import colors from '@/config/colors'

function NextMatchPreview({ match }) {
  const [timeLeft, setTimeLeft] = useState(null)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = match.date - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft(null)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [match.date])

  if (!timeLeft) return null

  return (
    <div className="w-full max-w-3xl">
      {/* Match Info - Horizontal Layout */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
        {/* Next Match Label */}
        <div className="text-center mb-2">
          <span 
            className="text-lg md:text-xl font-bold"
            style={{ color: colors.white }}
          >
            NEXT MATCH
          </span>
        </div>

        {/* Teams and Countdown */}
        <div className="flex items-center justify-between gap-4 md:gap-6">
        {/* Home Team Logo */}
        <div className="flex-shrink-0">
          <img 
            src={match.homeTeam.logo} 
            alt={match.homeTeam.name}
            className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-lg"
          />
        </div>

        {/* Countdown */}
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2 md:gap-3">
            {timeLeft.days > 0 && (
              <div className="flex flex-col items-center">
                <span 
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: colors.yellow }}
                >
                  {timeLeft.days}
                </span>
                <span className="text-xs md:text-sm text-white/70">giorni</span>
              </div>
            )}
            <div className="flex flex-col items-center">
              <span 
                className="text-2xl md:text-3xl font-bold"
                style={{ color: colors.yellow }}
              >
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-xs md:text-sm text-white/70">ore</span>
            </div>
            <span className="text-2xl md:text-3xl font-bold text-white/50">:</span>
            <div className="flex flex-col items-center">
              <span 
                className="text-2xl md:text-3xl font-bold"
                style={{ color: colors.yellow }}
              >
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-xs md:text-sm text-white/70">min</span>
            </div>
            <span className="text-2xl md:text-3xl font-bold text-white/50 hidden md:block">:</span>
            <div className="flex-col items-center hidden md:flex">
              <span 
                className="text-2xl md:text-3xl font-bold"
                style={{ color: colors.yellow }}
              >
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-xs md:text-sm text-white/70">sec</span>
            </div>
          </div>
        </div>

        {/* Away Team Logo */}
        <div className="flex-shrink-0">
          <img 
            src={match.awayTeam.logo} 
            alt={match.awayTeam.name}
            className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-lg"
          />
        </div>
        </div>
      </div>
    </div>
  )
}

export default NextMatchPreview
