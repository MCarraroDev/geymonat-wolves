import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Calendario from './pages/Calendario'
import Team from './pages/Team'
import PlayerProfile from './pages/PlayerProfile'
import Media from './pages/Media'
import ArticleDetail from './pages/ArticleDetail'
import OpenDay from './pages/OpenDay'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1c1f3b' }}>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:slug" element={<PlayerProfile />} />
            <Route path="/media" element={<Media />} />
            <Route path="/media/:slug" element={<ArticleDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
