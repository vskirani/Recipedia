import { useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'

// AOS - Animate On Scroll
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false, // animasi hanya jalan sekali
    })
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
    
  )
}

export default App
