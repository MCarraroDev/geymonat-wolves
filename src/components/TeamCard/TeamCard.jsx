import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TeamCard.css'
import colors from '@/config/colors'

/**
 * TeamCard - Modern card component for team members
 * Clean design with hover effects and responsive layout
 */
function TeamCard({ 
  name, 
  title, 
  status, 
  avatarUrl, 
  groupColor = colors.lightBlue,
  slug,
  className = '',
  style = {}
}) {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    if (slug) {
      navigate(`/team/${slug}`)
    }
  }

  return (
    <div 
      className={`team-card ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{
        '--group-color': groupColor,
        '--hover-intensity': isHovered ? '1' : '0',
        cursor: slug ? 'pointer' : 'default'
      }}
    >
      {/* Glow effect on hover */}
      <div className="team-card-glow" />
      
      {/* Avatar section (background) */}
      <div className="team-card-avatar-container">
        <div className="team-card-avatar-wrapper">
          <img 
            src={avatarUrl} 
            alt={name}
            className="team-card-avatar"
            loading="lazy"
          />
        </div>
        
        {/* Decorative accent */}
        <div className="team-card-accent" />
      </div>
      
      {/* Card content */}
      <div className="team-card-inner">

        {/* Info section */}
        <div className="team-card-info">
          <div className="team-card-status-badge">
            <span className="team-card-status-dot" />
            {status}
          </div>
          
          <h3 className="team-card-name">{name}</h3>
          
          <p className="team-card-title">{title}</p>
        </div>

        {/* Decorative corner elements */}
        <div className="team-card-corner team-card-corner-tl" />
        <div className="team-card-corner team-card-corner-br" />
      </div>
    </div>
  )
}

export default TeamCard
