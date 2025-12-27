
import './index.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">
      <Navbar />
      <HomePage />
    </div>
    
  )
}

export default App
