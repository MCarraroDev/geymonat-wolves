import { Link } from 'react-router-dom'
import logo from '@/assets/logo/lupo.webp'
import colors from '@/config/colors'

function Footer() {
  const quickLinks = [
    { label: 'Calendario Partite', path: '/calendario' },
    { label: 'Il Nostro Team', path: '/team' },
    { label: 'Media', path: '/media' },
    { label: 'Contatti', path: '/contatti' },
  ]

  const contacts = [
    { label: 'Email', value: 'VAIS02600N@istruzione.it', type: 'email' },
    { label: 'Telefono', value: '0331842371', type: 'tel' },
    { label: 'Indirizzo', value: 'Via A. Gramsci,1 - 21049 Tradate (VA)', type: 'address' },
  ]

  return (
    <footer 
      className="w-full py-8 px-4 md:px-6"
      style={{ backgroundColor: colors.yellow }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Column */}
          <div className="flex items-center justify-center w-full h-full">
            <img 
              src={logo} 
              alt="Geymonat Wolves Logo" 
              className="max-h-32 md:max-h-40 min-h-[200px] w-auto object-contain"
            />
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-center">
            <h3 className="text-black font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-center">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-black/80 hover:text-black transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti Column */}
          <div className="flex flex-col items-center">
            <h3 className="text-black font-bold text-lg mb-4">Contatti</h3>
            <ul className="space-y-2 text-center">
              {contacts.map((contact, index) => (
                <li key={index} className="text-black/80 text-sm">
                  <span className="font-semibold">{contact.label}:</span>{' '}
                  {contact.type === 'email' ? (
                    <a 
                      href={`mailto:${contact.value}`}
                      className="hover:text-black transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : contact.type === 'tel' ? (
                    <a 
                      href={`tel:${contact.value}`}
                      className="hover:text-black transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span>{contact.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-black/20 text-center">
          <p className="text-black/60 text-sm">
            © {new Date().getFullYear()} Marco Carraro. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

