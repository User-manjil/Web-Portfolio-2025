import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './reusable/Navbar.jsx'
import Footer from './reusable/Footer'
import { BrowserRouter, Routes } from 'react-router-dom'
// import ToTop from './reusable/ToTop'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
    {/* <ToTop/> */}
    <App />
    <Footer/>
    
    </BrowserRouter>
    
    
  </StrictMode>,
)
