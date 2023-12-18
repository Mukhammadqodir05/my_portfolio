import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogoAnimation from './Intro/intro.jsx'




ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/'  element={<LogoAnimation />}/>
      <Route path='/main'  element={<App />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)