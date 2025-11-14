import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import StaggeredMenu from './StaggeredMenu'
import colors from '@/config/colors'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Calendario Partite', labelMobile: 'Calendario\nPartite', path: '/calendario' },
  { label: 'Il Nostro Team', path: '/team' },
  { label: 'Media', path: '/media' },
  { label: 'Contatti', path: '/contatti' },
]

const SOCIAL_LINKS = [
  { label: 'Instagram', link: 'https://www.instagram.com/geymonat_wolves/' },
  { label: 'YouTube', link: 'https://www.youtube.com/@isgeymonat-tradate-va155' },
]

function Navbar() {
  const location = useLocation()
  const currentPath = location.hash ? location.hash.replace('#', '') : (location.pathname || '/')

  const menuItems = useMemo(
    () =>
      NAV_LINKS.map((item, index) => ({
        label: item.label,
        labelMobile: item.labelMobile,
        link: item.path === '/' ? '#/' : `#${item.path}`,
        ariaLabel: `${item.label} page`,
        binaryNumber: (index + 1).toString(2).padStart(3, '0'),
      })),
    []
  )

  return (
    <div
      className="pointer-events-none"
      data-active-path={currentPath || '/'}
    >
      <StaggeredMenu
        className="navbar-menu"
        colors={[colors.dark, colors.primary, colors.purple, colors.dark]}
        accentColor={colors.primary}
        menuButtonColor={colors.dark}
        openMenuButtonColor={colors.dark}
        changeMenuColorOnOpen={false}
        displayItemNumbering={false}
        displaySocials={true}
        socialItems={SOCIAL_LINKS}
        items={menuItems}
        isFixed={true}
      />
      <style>{`
        .sm-scope {
          pointer-events: none;
        }
        .navbar-menu .staggered-menu-header {
          background: transparent;
          padding: 2rem;
          pointer-events: auto;
        }
        .navbar-menu .sm-toggle {
          color: ${colors.dark};
          background: ${colors.yellow};
          padding: 1rem 1.5rem;
          border-radius: 50px;
          border: 3px solid ${colors.dark};
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
          transition: all 0.3s ease;
          font-weight: 600;
        }
        .navbar-menu .sm-toggle:hover {
          background: ${colors.white};
          border-color: ${colors.primary};
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
          transform: scale(1.05);
        }
        .navbar-menu[data-open] {
          pointer-events: auto;
        }
        .navbar-menu[data-open] .sm-toggle {
          background: rgba(255, 255, 255, 0.95);
        }
        .navbar-menu[data-open] .staggered-menu-panel {
          background: rgba(255, 255, 255, 0.95);
        }
        [data-active-path="/"] .navbar-menu a[href="#/"] .sm-panel-itemLabel,
        [data-active-path="/calendario"] .navbar-menu a[href="#/calendario"] .sm-panel-itemLabel,
        [data-active-path="/team"] .navbar-menu a[href="#/team"] .sm-panel-itemLabel,
        [data-active-path="/media"] .navbar-menu a[href="#/media"] .sm-panel-itemLabel,
        [data-active-path="/contatti"] .navbar-menu a[href="#/contatti"] .sm-panel-itemLabel {
          color: ${colors.primary};
        }
      `}</style>
    </div>
  )
}

export default Navbar

