import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogoAnimation from './Intro/intro.jsx'

const root = document.getElementById('root')
const rootElement = createRoot(root)

rootElement.render(
  <BrowserRouter>
    <Routes>
      <Route path='/'  element={<LogoAnimation />}/>
      <Route path='/main'  element={<App />}/>
    </Routes>
  </BrowserRouter>
)
