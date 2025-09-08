import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { products } from '../data/products'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const desktopInputRef = useRef(null)
  const mobileInputRef = useRef(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const sections = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Applications', path: '/applications' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Clients', path: '/clients' },
    { name: 'About', path: '/about' }
  ]

  useEffect(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) {
      setSuggestions([])
      return
    }
    const filtered = products
      .filter((p) => !p.isMainProduct)
      .filter((p) =>
        p.name.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.parentProduct && p.parentProduct.toLowerCase().includes(q))
      )
      .slice(0, 8)
      .map((p) => ({ id: p.id, name: p.name }))
    setSuggestions(filtered)
  }, [searchQuery])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const handleSearch = (e) => {
    e.preventDefault()
    setShowDropdown(false)
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`)
    } else {
      navigate('/products')
    }
  }

  const handleSelectSuggestion = (name) => {
    setSearchQuery(name)
    setShowDropdown(false)
    navigate(`/products?search=${encodeURIComponent(name)}`)
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity duration-200">
              <img 
                src={logo} 
                alt="Nobel Engineering Logo" 
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <Link
                key={section.name}
                to={section.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === section.path
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                {section.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex max-w-md relative">
            <form onSubmit={handleSearch} className="w-full" autoComplete="off">
              <div className="relative">
                <input
                  ref={desktopInputRef}
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setShowDropdown(true); }}
                  onFocus={() => suggestions.length && setShowDropdown(true)}
                  onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                  className="w-full pl-10 pr-20 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="absolute inset-y-0 right-0 pr-2 flex items-center gap-2">
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => { setSearchQuery(''); setShowDropdown(false); desktopInputRef.current?.focus(); }}
                      className="px-1 text-gray-400 hover:text-gray-600"
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  )}
                  <button
                    type="submit"
                    className="flex items-center"
                    aria-label="Submit search"
                  >
                    <svg className="h-5 w-5 text-gray-400 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            {showDropdown && suggestions.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
                <ul className="max-h-72 overflow-auto">
                  {suggestions.map((s) => (
                    <li key={s.id}>
                      <button
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => handleSelectSuggestion(s.name)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
                      >
                        {s.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Search and Menu */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Search Button */}
            <button
              onClick={() => { setIsSearchVisible(!isSearchVisible); setIsMobileMenuOpen(false); }}
              className="p-2 text-gray-500 hover:text-gray-700"
              aria-label="Toggle search"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="p-2"
              onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setIsSearchVisible(false); }}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchVisible && (
          <div className="md:hidden pb-4 relative">
            <form onSubmit={handleSearch} autoComplete="off">
              <div className="relative">
                <input
                  ref={mobileInputRef}
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setShowDropdown(true); }}
                  onFocus={() => suggestions.length && setShowDropdown(true)}
                  onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                  className="w-full pl-10 pr-20 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="absolute inset-y-0 right-0 pr-2 flex items-center gap-2">
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => { setSearchQuery(''); setShowDropdown(false); mobileInputRef.current?.focus(); }}
                      className="px-1 text-gray-400 hover:text-gray-600"
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  )}
                  <button
                    type="submit"
                    className="flex items-center"
                    aria-label="Submit search"
                  >
                    <svg className="h-5 w-5 text-gray-400 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            {showDropdown && suggestions.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
                <ul className="max-h-72 overflow-auto">
                  {suggestions.map((s) => (
                    <li key={s.id}>
                      <button
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => handleSelectSuggestion(s.name)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
                      >
                        {s.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav id="mobile-nav" className="md:hidden pb-4">
            <ul className="space-y-1">
              {sections.map((section) => (
                <li key={section.name}>
                  <Link
                    to={section.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === section.path
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar 