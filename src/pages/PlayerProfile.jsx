import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMemberBySlug, GROUP_NAMES, GROUP_COLORS } from '@/config/team'
import colors from '@/config/colors'
import { ArrowLeft, Calendar, Instagram, Users } from 'lucide-react'

// Converte URL Spotify normale in embed URL
const getSpotifyEmbedUrl = (url) => {
  if (!url) return null
  // Estrae il tipo (track/playlist) e l'ID dall'URL
  const match = url.match(/spotify\.com\/(track|playlist)\/([a-zA-Z0-9]+)/)
  if (match) {
    const [, type, id] = match
    return `https://open.spotify.com/embed/${type}/${id}?utm_source=generator`
  }
  return null
}

function PlayerProfile() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const member = getMemberBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!member) {
    return (
      <div
        className="w-full min-h-screen flex flex-col items-center justify-center px-4"
        style={{ backgroundColor: colors.dark }}
      >
        <h1 className="text-4xl font-bold text-white mb-4">Giocatore non trovato</h1>
        <button
          onClick={() => navigate('/team')}
          className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
        >
          Torna al Team
        </button>
      </div>
    )
  }

  const groupColor = GROUP_COLORS[member.group]

  return (
    <div
      className="w-full min-h-screen pb-32"
      style={{ backgroundColor: colors.dark }}
    >
      {/* Hero section with photo */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-gradient-to-b from-black/40 to-transparent">
        {/* Background blur effect */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-2xl opacity-30"
          style={{
            backgroundImage: `url(${member.avatarUrl})`
          }}
        />

        {/* Main image - contained */}
        <div className="absolute inset-0 flex items-end justify-center pb-0">
          <img
            src={member.avatarUrl}
            alt={member.fullName}
            className="h-full w-auto object-contain object-bottom"
            style={{
              filter: 'drop-shadow(0 10px 40px rgba(0,0,0,0.6))'
            }}
          />
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, 
              rgba(0,0,0,0.4) 0%, 
              rgba(0,0,0,0.2) 30%,
              transparent 50%,
              rgba(0,0,0,0.3) 70%,
              ${colors.dark} 100%)`
          }}
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            {/* Group badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 font-bold text-sm uppercase tracking-wide"
              style={{
                backgroundColor: `${groupColor}20`,
                border: `2px solid ${groupColor}`,
                color: groupColor,
                boxShadow: `0 0 20px ${groupColor}40`
              }}
            >
              <Users size={16} />
              {GROUP_NAMES[member.group]}
            </div>

            {/* Name */}
            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-3"
              style={{
                textShadow: `0 4px 20px rgba(0,0,0,0.8), 0 0 40px ${groupColor}60`
              }}
            >
              {member.fullName}
            </h1>

            {/* Role and Class */}
            <div className="flex flex-wrap items-center gap-4 text-xl text-white/90">
              <span className="font-semibold">Classe {member.class}</span>
              {member.role && (
                <>
                  <span className="text-white/40">•</span>
                  <span style={{ color: groupColor }}>{member.role}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-12 md:mt-16">
        <div className={`grid grid-cols-1 gap-8 ${(member.birthday || member.instagram) ? 'lg:grid-cols-3' : ''}`}>
          {/* Left column - Main info */}
          <div className={`space-y-8 ${(member.birthday || member.instagram) ? 'lg:col-span-2' : ''}`}>
            {/* Bio */}
            {member.bio && (
              <div
                className="p-6 md:p-8 rounded-2xl border"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.1)'
                }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Bio</h2>
                <p className="text-white/80 text-lg leading-loose">{member.bio}</p>
              </div>
            )}

            {/* External Team */}
            {member.externalTeam && (
              <div
                className="p-6 md:p-8 rounded-2xl border"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.1)'
                }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Squadra Esterna</h2>
                <div className="flex items-center gap-6">
                  {member.externalTeam.logo && (
                    <img
                      src={member.externalTeam.logo}
                      alt={member.externalTeam.name}
                      className="w-20 h-20 object-contain rounded-lg bg-white/5 p-2"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: groupColor }}>
                      {member.externalTeam.name}
                    </h3>
                  </div>
                </div>
              </div>
            )}

            {/* Music Section */}
            {(member.favoriteSong || member.playlist) && (
              <div
                className="p-6 md:p-8 rounded-2xl border"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.1)'
                }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Musica</h2>
                <div className="space-y-6">
                  {/* Favorite Song */}
                  {member.favoriteSong && getSpotifyEmbedUrl(member.favoriteSong) && (
                    <div>
                      <h3 className="text-sm text-white/60 uppercase tracking-wide font-semibold mb-3">Canzone Preferita</h3>
                      <iframe
                        data-testid="embed-iframe"
                        style={{ borderRadius: '12px' }}
                        src={getSpotifyEmbedUrl(member.favoriteSong)}
                        width="100%"
                        height="152"
                        frameBorder="0"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Playlist */}
                  {member.playlist && getSpotifyEmbedUrl(member.playlist) && (
                    <div>
                      <h3 className="text-sm text-white/60 uppercase tracking-wide font-semibold mb-3">Playlist</h3>
                      <iframe
                        data-testid="embed-iframe"
                        style={{ borderRadius: '12px' }}
                        src={getSpotifyEmbedUrl(member.playlist)}
                        width="100%"
                        height="152"
                        frameBorder="0"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right column - Quick info */}
          {(member.birthday || member.instagram) && (
            <div className="space-y-6">
              {/* Birthday */}
              {member.birthday && (
                <div
                  className="p-6 rounded-2xl border"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.1)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar size={20} style={{ color: groupColor }} />
                    <h3 className="text-sm uppercase tracking-wide text-white/60 font-bold">Compleanno</h3>
                  </div>
                  <p className="text-2xl font-bold text-white">{member.birthday}</p>
                </div>
              )}

              {/* Instagram */}
              {member.instagram && (
                <a
                  href={`https://instagram.com/${member.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl border hover:scale-105 transition-transform group"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.1)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Instagram size={20} style={{ color: groupColor }} />
                    <h3 className="text-sm uppercase tracking-wide text-white/60 font-bold">Instagram</h3>
                  </div>
                  <p className="text-xl font-bold text-white group-hover:text-[#E1306C] transition-colors">
                    @{member.instagram}
                  </p>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PlayerProfile
