import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Common from './Component/Common.jsx'
import {BrowserRouter} from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Common>
      <App />
    </Common>
    
    </BrowserRouter>
  </StrictMode>
)
