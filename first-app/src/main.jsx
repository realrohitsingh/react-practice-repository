import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Jspider from './App.jsx'
import './index.css'

console.log(React);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Jspider />
  </StrictMode>,
)
