import './assets/main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router'

import { Positions } from './components/positions/positions'
import App from './App'
import { Front } from './components/positions/front'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="positions" element={<Positions />}>
          <Route path="front" element={<Front />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
)
