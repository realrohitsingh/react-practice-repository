import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Jspider from './App.jsx'
import Footer from './Footer'
import './index.css'
import Navbar from './Navbar'

console.log(React);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Jspider />
    <Navbar />
    <Footer />
  </StrictMode>,
)
