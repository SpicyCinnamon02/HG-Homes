import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './sections/Navbar.jsx'
import HomeHero from './pages/home/HomeHero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <HomeHero />
  </StrictMode>,
)
