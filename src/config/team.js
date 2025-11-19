import colors from '@/config/colors'

/**
 * Configurazione membri del team Geymonat Wolves
 * Organizzati per gruppo: TIFOPOSITIVO, Comunicazione, Basket, Dance Crew
 */

// Placeholder avatar - può essere sostituito con foto reali
const DEFAULT_AVATAR = 'https://api.dicebear.com/7.x/avataaars/svg?seed='

export const GROUPS = {
  TIFOPOSITIVO: 'tifo positivo',
  COMUNICAZIONE: 'comunicazione',
  BASKET: 'basket',
  DANCE: 'dance'
}

export const teamMembers = [
  // GRUPPO TIFOPOSITIVO
  { id: 1, firstName: 'Andrea', lastName: 'Capelli', class: '5SC', group: GROUPS.TIFOPOSITIVO },
  { id: 2, firstName: 'Matteo', lastName: 'Pintonello', class: '5SC', group: GROUPS.TIFOPOSITIVO },
  { id: 3, firstName: 'Giovanni', lastName: 'Sena', class: '5SC', group: GROUPS.TIFOPOSITIVO },
  { id: 4, firstName: 'Elisa', lastName: 'Ceriani', class: '5SB', group: GROUPS.TIFOPOSITIVO },
  { id: 5, firstName: 'Tommaso', lastName: 'Caccia', class: '5D', group: GROUPS.TIFOPOSITIVO },
  { id: 6, firstName: 'Demis', lastName: 'Dugo', class: '5D', group: GROUPS.TIFOPOSITIVO },
  { id: 7, firstName: 'Cristian', lastName: 'Scolari', class: '5D', group: GROUPS.TIFOPOSITIVO },
  { id: 8, firstName: 'Federico', lastName: 'Maso', class: '5B', group: GROUPS.TIFOPOSITIVO },
  { id: 9, firstName: 'Manuel', lastName: 'Nucera', class: '5B', group: GROUPS.TIFOPOSITIVO },
  { id: 10, firstName: 'Jack', lastName: 'Shpati', class: '5B', group: GROUPS.TIFOPOSITIVO },
  { id: 11, firstName: 'Alessandro', lastName: 'Toborelli', class: '5B', group: GROUPS.TIFOPOSITIVO },
  { id: 12, firstName: 'Francesco', lastName: 'De Toni', class: '5A', group: GROUPS.TIFOPOSITIVO },
  { id: 13, firstName: 'Roberto', lastName: 'Fadin', class: '5A', group: GROUPS.TIFOPOSITIVO },
  { id: 14, firstName: 'Davide Giulio', lastName: 'Insinna', class: '5A', group: GROUPS.TIFOPOSITIVO },
  { id: 15, firstName: 'Niccolò', lastName: 'Monizza', class: '5A', group: GROUPS.TIFOPOSITIVO },
  { id: 16, firstName: 'Sara', lastName: 'Colombo', class: '4SB', group: GROUPS.TIFOPOSITIVO },
  { id: 17, firstName: 'Stefano', lastName: 'Gelosi', class: '4SB', group: GROUPS.TIFOPOSITIVO },
  { id: 18, firstName: 'Cristian', lastName: 'Vallini', class: '4SB', group: GROUPS.TIFOPOSITIVO },
  { id: 19, firstName: 'Fedele', lastName: 'Battipede', class: '4SA', group: GROUPS.TIFOPOSITIVO },
  { id: 20, firstName: 'Mohamed Aiman', lastName: 'Bhokout', class: '4C', group: GROUPS.TIFOPOSITIVO },
  { id: 21, firstName: 'Alessandro', lastName: 'Bozza', class: '4B', group: GROUPS.TIFOPOSITIVO },
  { id: 22, firstName: 'Mathias Eugenio', lastName: 'Cavalcante', class: '4B', group: GROUPS.TIFOPOSITIVO },
  { id: 23, firstName: 'Davide', lastName: 'Cermisoni', class: '4B', group: GROUPS.TIFOPOSITIVO },
  { id: 24, firstName: 'Matteo', lastName: 'Antonini', class: '3SC', group: GROUPS.TIFOPOSITIVO },
  { id: 25, firstName: 'Martina', lastName: 'Fulgione', class: '3SC', group: GROUPS.TIFOPOSITIVO },
  { id: 26, firstName: 'Christian', lastName: 'Malnati', class: '3SB', group: GROUPS.TIFOPOSITIVO },
  { id: 27, firstName: 'Camilla', lastName: 'Munaretti', class: '3SB', group: GROUPS.TIFOPOSITIVO },
  { id: 28, firstName: 'Giorgia', lastName: 'Navari', class: '3SB', group: GROUPS.TIFOPOSITIVO },
  { id: 29, firstName: 'Tommaso', lastName: 'Sofrà', class: '3SB', group: GROUPS.TIFOPOSITIVO },
  { id: 30, firstName: 'Cecilia', lastName: 'Tabano', class: '3SB', group: GROUPS.TIFOPOSITIVO },
  { id: 31, firstName: 'Matteo', lastName: 'Agliati', class: '3SA', group: GROUPS.TIFOPOSITIVO },
  { id: 32, firstName: 'Andrea', lastName: 'Cali', class: '3SA', group: GROUPS.TIFOPOSITIVO },
  { id: 33, firstName: 'Alessandro', lastName: 'Castelli', class: '3SA', group: GROUPS.TIFOPOSITIVO },
  { id: 34, firstName: 'Davide', lastName: 'Serra', class: '3D', group: GROUPS.TIFOPOSITIVO },
  { id: 35, firstName: 'Harouna', lastName: 'Branham', class: '3C', group: GROUPS.TIFOPOSITIVO },
  { id: 36, firstName: 'Simone', lastName: 'Forese', class: '3C', group: GROUPS.TIFOPOSITIVO },
  { id: 37, firstName: 'Filippo', lastName: 'Montorfano', class: '3C', group: GROUPS.TIFOPOSITIVO },
  { id: 38, firstName: 'Andrii', lastName: 'Valovina', class: '3C', group: GROUPS.TIFOPOSITIVO },
  { id: 39, firstName: 'Simone', lastName: 'Bustreo', class: '3A', group: GROUPS.TIFOPOSITIVO },
  { id: 40, firstName: 'Filippo', lastName: 'Pagani', class: '3A', group: GROUPS.TIFOPOSITIVO },
  { id: 41, firstName: 'Gaia', lastName: 'Foroni', class: '2E', group: GROUPS.TIFOPOSITIVO },

  // GRUPPO COMUNICAZIONE
  { id: 42, firstName: 'Simone', lastName: 'Buzzetti', class: '5D', group: GROUPS.COMUNICAZIONE },
  { id: 43, firstName: 'Giovanni', lastName: 'Lerro', class: '4SD', group: GROUPS.COMUNICAZIONE },
  { id: 44, firstName: 'Gabriele', lastName: 'Montani', class: '4SB', group: GROUPS.COMUNICAZIONE },
  { id: 45, firstName: 'Camilla', lastName: 'Buttitta', class: '4D', group: GROUPS.COMUNICAZIONE },
  { id: 46, firstName: 'Giada', lastName: 'Morganti', class: '4D', group: GROUPS.COMUNICAZIONE },
  { id: 47, firstName: 'Valerio', lastName: 'Romito', class: '4D', group: GROUPS.COMUNICAZIONE },
  { id: 48, firstName: 'Matteo', lastName: 'Viscardi', class: '4B', group: GROUPS.COMUNICAZIONE },
  { id: 49, firstName: 'Fabio', lastName: 'Ciceri', class: '3SB', group: GROUPS.COMUNICAZIONE },
  { id: 50, firstName: 'Elisa', lastName: 'Morganti', class: '3E', group: GROUPS.COMUNICAZIONE },
  { id: 51, firstName: 'Marco', lastName: 'Carraro', class: '3D', group: GROUPS.COMUNICAZIONE },
  { id: 52, firstName: 'Alice', lastName: 'Biganzoli', class: '2SB', group: GROUPS.COMUNICAZIONE },
  { id: 53, firstName: 'Giulia', lastName: 'Corrazzin', class: '2SB', group: GROUPS.COMUNICAZIONE },
  { id: 54, firstName: 'Ilaria', lastName: 'Guerini Rocco', class: '1SA', group: GROUPS.COMUNICAZIONE },

  // SQUADRA DI BASKET
  { id: 55, firstName: 'Davide', lastName: 'Ciampoli', class: '5SC', group: GROUPS.BASKET },
  { id: 56, firstName: 'Federico', lastName: 'Borroni', class: '5SA', group: GROUPS.BASKET },
  { id: 57, firstName: 'Marco', lastName: 'Bacchiega', class: '5F', group: GROUPS.BASKET },
  { id: 58, firstName: 'Alessandro', lastName: 'Villivà', class: '5C', group: GROUPS.BASKET },
  { id: 59, firstName: 'Davide', lastName: 'Guirguis', class: '5B', group: GROUPS.BASKET },
  { id: 60, firstName: 'Alessandro', lastName: 'Calvi', class: '5A', group: GROUPS.BASKET },
  { id: 61, firstName: 'Riccardo', lastName: 'Dalla Pozza', class: '5A', group: GROUPS.BASKET },
  { id: 62, firstName: 'Federico', lastName: 'Bolletta', class: '4SB', group: GROUPS.BASKET },
  { id: 63, firstName: 'Francesco', lastName: 'Farinato', class: '4SB', group: GROUPS.BASKET },
  { id: 64, firstName: 'Tommaso', lastName: 'Valotta', class: '4SB', group: GROUPS.BASKET },
  { id: 65, firstName: 'Thomas', lastName: 'Ferrario', class: '4D', group: GROUPS.BASKET },
  { id: 66, firstName: 'Riccardo', lastName: 'Busata', class: '4B', group: GROUPS.BASKET },
  { id: 67, firstName: 'Simone', lastName: 'Chiarello', class: '3SB', group: GROUPS.BASKET },
  { id: 68, firstName: 'Manuel', lastName: 'Lamperti', class: '3SA', group: GROUPS.BASKET },
  { id: 69, firstName: 'Gabriele', lastName: 'Bandiera', class: '3E', group: GROUPS.BASKET },
  { id: 70, firstName: 'Davide', lastName: 'Mascetti', class: '3E', group: GROUPS.BASKET },
  { id: 71, firstName: 'Alessandro Carlo', lastName: 'Valli', class: '3E', group: GROUPS.BASKET },
  { id: 72, firstName: 'Stefano Luca', lastName: 'Macchi', class: '3D', group: GROUPS.BASKET },
  { id: 73, firstName: 'Marcello', lastName: 'Toscani', class: '3AE', group: GROUPS.BASKET },
  { id: 74, firstName: 'Tommaso', lastName: 'Giuduci', class: '2SC', group: GROUPS.BASKET },
  { id: 75, firstName: 'Sara', lastName: 'Vitangeli', class: '5B', group: GROUPS.BASKET, role: 'Viceallenatrice' },

  // DANCE CREW
  { id: 76, firstName: 'Aurora', lastName: 'Cabassa', class: '5SC', group: GROUPS.DANCE },
  { id: 77, firstName: 'Nadia', lastName: 'Billo', class: '5E', group: GROUPS.DANCE },
  { id: 78, firstName: 'Calin', lastName: 'Ghimp', class: '5D', group: GROUPS.DANCE },
  { id: 79, firstName: 'Matilda', lastName: 'Cortiana', class: '4SD', group: GROUPS.DANCE },
  { id: 80, firstName: 'Erika', lastName: 'Pierobon', class: '4SC', group: GROUPS.DANCE },
  { id: 81, firstName: 'Martina', lastName: 'Peri', class: '4SA', group: GROUPS.DANCE },
  { id: 82, firstName: 'Chiara', lastName: 'Marongiu', class: '4E', group: GROUPS.DANCE },
  { id: 83, firstName: 'Marta', lastName: 'Vezzoli', class: '3SA', group: GROUPS.DANCE },
  { id: 84, firstName: 'Gloria', lastName: 'Di Netto Tempesta', class: '3E', group: GROUPS.DANCE },
  { id: 85, firstName: 'Zoe', lastName: 'Erba', class: '3E', group: GROUPS.DANCE },
  { id: 86, firstName: 'Giulia', lastName: 'Fantin', class: '3E', group: GROUPS.DANCE },
  { id: 87, firstName: 'Eleonora', lastName: 'Floreno', class: '3E', group: GROUPS.DANCE },
  { id: 88, firstName: 'Alice', lastName: 'Piva', class: '3E', group: GROUPS.DANCE },
  { id: 89, firstName: 'Caterina', lastName: 'Vaccaro', class: '3E', group: GROUPS.DANCE },
  { id: 90, firstName: 'Ambra', lastName: 'Pedori', class: '2SC', group: GROUPS.DANCE },
  { id: 91, firstName: 'Cristina', lastName: 'Pegorin', class: '2SB', group: GROUPS.DANCE },
  { id: 92, firstName: 'Rebecca', lastName: 'Salin', class: '2SB', group: GROUPS.DANCE },
]

// Genera avatar URL per ogni membro
teamMembers.forEach(member => {
  const seed = `${member.firstName}${member.lastName}`.toLowerCase().replace(/\s/g, '')
  member.avatarUrl = `${DEFAULT_AVATAR}${seed}`
  member.handle = `${member.firstName.toLowerCase()}.${member.lastName.toLowerCase().replace(/\s/g, '')}`
  member.fullName = `${member.firstName} ${member.lastName}`
})

/**
 * Ottiene membri per gruppo
 */
export const getMembersByGroup = (group) => {
  return teamMembers.filter(member => member.group === group)
}

/**
 * Ottiene tutti i gruppi con i loro membri
 */
export const getAllGroups = () => {
  return {
    [GROUPS.TIFOPOSITIVO]: getMembersByGroup(GROUPS.TIFOPOSITIVO),
    [GROUPS.COMUNICAZIONE]: getMembersByGroup(GROUPS.COMUNICAZIONE),
    [GROUPS.BASKET]: getMembersByGroup(GROUPS.BASKET),
    [GROUPS.DANCE]: getMembersByGroup(GROUPS.DANCE),
  }
}

/**
 * Nomi visualizzabili dei gruppi
 */
export const GROUP_NAMES = {
  [GROUPS.TIFOPOSITIVO]: 'Gruppo Tifo Positivo',
  [GROUPS.COMUNICAZIONE]: 'Gruppo Comunicazione',
  [GROUPS.BASKET]: 'Squadra Basket',
  [GROUPS.DANCE]: 'Dance Crew',
}

/**
 * Colori dei gruppi
 */
export const GROUP_COLORS = {
  [GROUPS.TIFOPOSITIVO]: colors.lightBlue,
  [GROUPS.COMUNICAZIONE]: colors.purple,
  [GROUPS.BASKET]: colors.yellow,
  [GROUPS.DANCE]: colors.primary,
}

export default teamMembers
