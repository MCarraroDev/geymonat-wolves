import { useEffect, useState } from 'react'
import TeamCard from '@/components/TeamCard/TeamCard'
import FilterButton from '@/components/FilterButton'
import colors from '@/config/colors'
import { getAllGroups, GROUP_NAMES, GROUP_COLORS, GROUPS } from '@/config/team'

function Team() {
  const [selectedGroup, setSelectedGroup] = useState('all')
  const groups = getAllGroups()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getDisplayMembers = () => {
    let members = []
    if (selectedGroup === 'all') {
      members = Object.values(groups).flat()
    } else {
      members = groups[selectedGroup] || []
    }
    
    // Ordina sempre alfabeticamente per cognome, poi per nome
    members = [...members].sort((a, b) => {
      const lastNameCompare = a.lastName.localeCompare(b.lastName, 'it')
      if (lastNameCompare !== 0) return lastNameCompare
      return a.firstName.localeCompare(b.firstName, 'it')
    })
    
    return members
  }

  const displayMembers = getDisplayMembers()

  return (
    <div 
      className="w-full min-h-screen flex flex-col items-center px-4 pt-32 pb-20 md:pt-20"
      style={{ backgroundColor: colors.dark }}
    >
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-5xl font-bold mb-4"
            style={{ color: colors.yellow }}
          >
            Il Nostro Team
          </h1>
          <p className="text-white/80 text-lg mb-8">
            Scopri tutti i membri del team Geymonat Wolves
          </p>
          
          {/* Filtri per gruppo */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-white text-lg font-medium">Filtra per:</span>
            <div className="flex flex-wrap gap-2 justify-center">
              <FilterButton
                isActive={selectedGroup === 'all'}
                onClick={() => setSelectedGroup('all')}
                color={colors.yellow}
              >
                Tutti ({Object.values(groups).flat().length})
              </FilterButton>
              {Object.entries(GROUP_NAMES).map(([key, name]) => (
                <FilterButton
                  key={key}
                  isActive={selectedGroup === key}
                  onClick={() => setSelectedGroup(key)}
                  color={GROUP_COLORS[key]}
                >
                  {name} ({groups[key].length})
                </FilterButton>
              ))}
            </div>
          </div>
        </div>

        {/* Grid di TeamCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
          {displayMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              name={member.fullName}
              title={`Classe ${member.class}${member.role ? ` - ${member.role}` : ''}`}
              status={GROUP_NAMES[member.group]}
              avatarUrl={member.avatarUrl}
              groupColor={GROUP_COLORS[member.group]}
              slug={member.slug}
              className="w-full"
              style={{ animationDelay: `${index * 0.05}s` }}
            />
          ))}
        </div>

        {/* Message if no members */}
        {displayMembers.length === 0 && (
          <div className="mt-12 text-center text-white/60">
            <p>Nessun membro trovato per questo gruppo...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Team
