import logo from '@/assets/logo/orizzontale.webp'
import colors from '@/config/colors'

function Home() {
  return (
    <div 
      className="w-full flex flex-col items-center gap-16 px-4 py-20 relative"
      style={{ backgroundColor: colors.dark, minHeight: '200vh' }}
    >
      <div className="text-center mt-20">
        <h1 className="font-bold" style={{ 
          fontFamily: 'StormGust, sans-serif', 
          fontSize: '6rem',
          lineHeight: '1.1',
          textShadow: '0 0 10px rgba(0,0,0,0.5)'
        }}>
          <span style={{ display: 'block', color: colors.white }}>work in</span>
          <span style={{ display: 'block', color: colors.yellow }}>progress</span>
        </h1>
      </div>
      <div className="w-full max-w-2xl lg:max-w-4xl">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-full h-auto"
          style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))' }}
        />
      </div>

      {/* Contenuto placeholder Lorem Ipsum */}
      <div className="w-full max-w-4xl mt-16 space-y-8 text-white">
        <section className="space-y-4">
          <h2 className="text-3xl font-bold" style={{ color: colors.yellow }}>Chi Siamo</h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="text-lg leading-relaxed">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold" style={{ color: colors.yellow }}>La Nostra Storia</h2>
          <p className="text-lg leading-relaxed">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
          <p className="text-lg leading-relaxed">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold" style={{ color: colors.yellow }}>I Nostri Obiettivi</h2>
          <p className="text-lg leading-relaxed">
            Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis 
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
          </p>
          <p className="text-lg leading-relaxed">
            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint 
            et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.
          </p>
        </section>

        <section className="space-y-4 pb-32">
          <h2 className="text-3xl font-bold" style={{ color: colors.yellow }}>Il Nostro Impegno</h2>
          <p className="text-lg leading-relaxed">
            Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis 
            unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
          </p>
          <p className="text-lg leading-relaxed">
            Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Home