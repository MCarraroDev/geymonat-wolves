/**
 * FilterButton - Reusable filter button component
 * Works consistently across all system themes (light/dark)
 */

/**
 * Calculate luminance of a color to determine if text should be dark or light
 * @param {string} color - Color in hex or rgb format
 * @returns {boolean} - True if color is light (needs dark text)
 */
function isLightColor(color) {
  // Convert color to RGB
  let r, g, b
  
  if (color.startsWith('#')) {
    // Hex color
    const hex = color.replace('#', '')
    r = parseInt(hex.substr(0, 2), 16)
    g = parseInt(hex.substr(2, 2), 16)
    b = parseInt(hex.substr(4, 2), 16)
  } else if (color.startsWith('rgb')) {
    // RGB color
    const matches = color.match(/\d+/g)
    if (matches && matches.length >= 3) {
      r = parseInt(matches[0])
      g = parseInt(matches[1])
      b = parseInt(matches[2])
    }
  } else {
    return false
  }
  
  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  
  // If luminance > 0.5, color is light and needs dark text
  return luminance > 0.5
}

function FilterButton({ 
  isActive, 
  onClick, 
  color, 
  children,
  className = ''
}) {
  const textColor = isLightColor(color) ? '#000000' : '#ffffff'
  
  const activeStyle = {
    backgroundColor: color,
    color: textColor,
    border: `2px solid ${color}`,
    boxShadow: `0 4px 12px ${color}40`
  }

  const inactiveStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: '#ffffff',
    border: '2px solid rgba(255, 255, 255, 0.2)'
  }

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold text-base transition-all hover:scale-105 active:scale-95 ${className}`}
      style={isActive ? activeStyle : inactiveStyle}
    >
      {children}
    </button>
  )
}

export default FilterButton
