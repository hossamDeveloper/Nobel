import { StrictMode  }  from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import logo from './assets/Nobel image.jpg'

// Set favicon to company logo
const link = document.querySelector("link[rel='icon']") || document.createElement('link')
link.setAttribute('rel', 'icon')
link.setAttribute('type', 'image/png')
link.setAttribute('href', logo)
document.head.appendChild(link)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
