import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from './components/About'
import Skills from'./components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from  './components/Footer'
import StarsCanvas from "./components/Stars";
import Services from "./components/services";

const App = () => {

  return (
    <main name='home' className="home overflow-x-hidden">
      <NavBar />
      <Home />
      <About />
      <div className="relative z-0">
        <Skills />
        <StarsCanvas />
      </div>
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;




