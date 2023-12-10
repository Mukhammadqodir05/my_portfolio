import Nav_bar from "./components/Nav_bar";
import Home from "./components/Home";
import About from './components/About'
import Skills from'./components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from  './components/Footer'
import StarsCanvas from "./components/Stars";


function App() {
  return (
    <div name='home' className="home overflow-x-hidden "> 
        <Nav_bar/>
        <div className="relative z-0">
         <Home/>
         <StarsCanvas />
        </div>
        <div className="relative z-0">
        <About/>
        <StarsCanvas />
        </div>
        <div className="relative z-0">
        <Skills/>
        <StarsCanvas />
        </div>
        <div className="relative z-0">
        <Projects/>
        <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
  </div>  
  )
};

export default App;
