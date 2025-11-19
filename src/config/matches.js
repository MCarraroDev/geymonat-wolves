import geymonatLogo from '@/assets/logo/verticale.webp'
import donMilaniLogo from '@/assets/logo/teams/donmilani/Logo varese school cup DON MILANI colori.webp'
import montaleLogo from '@/assets/logo/teams/montale/montale.webp'
import colors from '@/config/colors'

/**
 * Configurazione partite per Geymonat Wolves
 * Ogni partita ha: data, squadre, loghi, colori
 */
export const matches = [
  {
    id: 1,
    title: 'Seconda Partita',
    date: new Date(2025, 10, 17, 11, 0, 0), // 17 novembre 2025, ore 8:00
    homeTeam: {
      name: 'Geymonat Wolves',
      logo: geymonatLogo,
      color: colors.lightBlue, // lightBlue
    },
    awayTeam: {
      name: 'Montale New Eagles',
      logo: montaleLogo,
      color: '#644493', // Verde Don Milani
    },
    location: 'Palestra Geymonat',
    homeScore: 48,
    awayScore: 21,
    status: 'completed', // scheduled, live, completed
  },
  {  id: 2,
    title: 'Prima Partita',
    date: new Date(2025, 10, 17, 9, 45, 0), // 17 novembre 2025, ore 8:00
    homeTeam: {
      name: 'Geymonat Wolves',
      logo: geymonatLogo,
      color: colors.lightBlue, // lightBlue
    },
    awayTeam: {
      name: 'Don Milani Shooters',
      logo: donMilaniLogo,
      color: '#2D5724', // Verde Don Milani
    },
    location: 'Palestra Geymonat',
    homeScore: 26,
    awayScore: 33,
    status: 'completed', // scheduled, live, completed
  }
]

/**
 * Restituisce la prossima partita in programma
 */
export const getNextMatch = () => {
  const now = new Date()
  return matches.find(match => match.date > now && match.status === 'scheduled') || matches[0]
}

/**
 * Restituisce tutte le partite future
 */
export const getUpcomingMatches = () => {
  const now = new Date()
  return matches.filter(match => match.date > now && match.status === 'scheduled')
}

/**
 * Restituisce tutte le partite passate
 */
export const getPastMatches = () => {
  const now = new Date()
  return matches.filter(match => match.date <= now || match.status === 'completed')
}

export default matches
