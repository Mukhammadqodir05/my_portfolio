import ReactDOM from 'react-dom'
import './index.css'
import MainRoute from './MainRoute.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Resources from './Resources/resources.jsx'



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/'  element={<MainRoute />}/>
      <Route path='/resources'  element={<Resources />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)