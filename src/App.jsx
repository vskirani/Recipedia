import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import DetailResep from './pages/DetailResep'
import Footer from './components/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-orange-50/50 via-white to-orange-50/30">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resep/:id" element={<DetailResep />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App