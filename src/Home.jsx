import Silk from '@/components/Silk';
import logo from '@/assets/logo/orizzontale.webp';

function Home() {
  return (
    <div className="relative w-full h-full" style={{ backgroundColor: '#1c1f3b' }}>
      {/* Sfondo Silk */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <Silk
          speed={5}
          scale={1}
          color="#1c1f3b"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Contenuto sovrapposto */}
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-16 px-4" style={{ zIndex: 1 }}>
        <div className="text-center">
          <h1 className="font-bold" style={{ 
            fontFamily: 'StormGust, sans-serif', 
            fontSize: '6rem',
            lineHeight: '1.1',
            textShadow: '0 0 10px rgba(0,0,0,0.5)'
          }}>
            <span style={{ display: 'block', color: '#ffffff' }}>work in</span>
            <span style={{ display: 'block', color: '#f2da00' }}>progress</span>
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
      </div>
    </div>
  )
}

export default Home