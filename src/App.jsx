import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Certifications from './pages/Certifications'
import Clients from './pages/Clients'
import About from './pages/About'
import Applications from './pages/Applications'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
