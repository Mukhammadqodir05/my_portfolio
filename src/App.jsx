import Nav_bar from "./components/Nav_bar";
import Home from "./components/Home";
import About from './components/About'
import Skills from'./components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from  './components/Footer'



function App() {
  return (
       
      <div name='home' className="home">
       
       <Nav_bar/>
       <Home/>
       <About/>
       <Skills/>
       <Projects/>
       <Contact/>
       <Footer/>
      

      </div>
       
  )
};

export default App;
