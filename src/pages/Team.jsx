import { useEffect, useState } from 'react'
import ProfileCard from '@/components/ProfileCard/ProfileCard'
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
    
    // Ordina alfabeticamente per cognome quando si visualizza "tutti"
    if (selectedGroup === 'all') {
      members = [...members].sort((a, b) => {
        const lastNameCompare = a.lastName.localeCompare(b.lastName, 'it')
        if (lastNameCompare !== 0) return lastNameCompare
        return a.firstName.localeCompare(b.firstName, 'it')
      })
    }
    
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
            <span className="text-white/70 text-lg">Filtra per:</span>
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedGroup('all')}
                className={`px-6 py-3 rounded-lg font-semibold text-base transition-all ${
                  selectedGroup === 'all'
                    ? 'text-black'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
                style={selectedGroup === 'all' ? { backgroundColor: colors.yellow } : {}}
              >
                Tutti ({Object.values(groups).flat().length})
              </button>
              {Object.entries(GROUP_NAMES).map(([key, name]) => (
                <button
                  key={key}
                  onClick={() => setSelectedGroup(key)}
                  className={`px-6 py-3 rounded-lg font-semibold text-base transition-all ${
                    selectedGroup === key
                      ? 'text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                  style={selectedGroup === key ? { backgroundColor: GROUP_COLORS[key] } : {}}
                >
                  {name} ({groups[key].length})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid di ProfileCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 place-items-center">
          {displayMembers.map((member) => (
            <div key={member.id} className="w-full max-w-[280px] md:max-w-[320px] flex justify-center">
              <ProfileCard
                name={member.fullName}
                title={`Classe ${member.class}${member.role ? ` - ${member.role}` : ''}`}
                handle={member.handle}
                status={GROUP_NAMES[member.group]}
                avatarUrl={member.avatarUrl}
                miniAvatarUrl={member.avatarUrl}
                iconUrl="/vite.svg"
                showUserInfo={false}
                innerGradient={`linear-gradient(145deg, ${GROUP_COLORS[member.group]}44 0%, ${colors.lightBlue}33 100%)`}
                behindGlowColor={GROUP_COLORS[member.group]}
                className="w-full"
                enableMobileTilt={true}
              />
            </div>
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
