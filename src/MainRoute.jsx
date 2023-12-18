import React,{useState} from 'react'
import App from './App.jsx'
import LogoAnimation from './Intro/intro.jsx'

const MainRoute = () => {
  const[activePage, setactivePage] = useState('LogoAnimation')

  const change_page = (page_change) => {
    setactivePage(page_change)
}

  return (
    <div>
       {activePage === 'LogoAnimation'? < LogoAnimation onSwitch={change_page}/> : <App />}
    </div>
  )
}

export default MainRoute