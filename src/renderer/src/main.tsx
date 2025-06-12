import './assets/main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router'

import App from './App'

import { Positions } from './components/positions/positions'
import { Front } from './components/positions/front'
import { Back } from './components/positions/back'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="positions" element={<Positions />}>
          <Route path="front" element={<Front />} />
          <Route path="back" element={<Back />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
)
