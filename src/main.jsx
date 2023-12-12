import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './myblog/blog.jsx'
import LogoAnimation from './Intro/intro.jsx'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LogoAnimation />} />
      <Route path='/blog'  element={<Blog />}/>
      <Route path='/home'  element={<App />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)