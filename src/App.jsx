import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1c1f3b' }}>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
