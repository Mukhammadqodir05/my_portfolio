import Nav_bar from "./components/Nav_bar";
import Home from "./components/Home";
import About from './components/About'
import Skills from'./components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from  './components/Footer'
import StarsCanvas from "./components/Stars";
import Services from "./components/services";
import { motion, useScroll } from "framer-motion"

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.main name='home' className=" home overflow-x-hidden"
      initial = {{opacity:0}}
      animate ={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration: 1}}
      >
          <motion.div className="fixed rounded-md mt-[70px] h-[5px] right-0 
                left-0 origin-[0%] bg-[#a601ff]"
                style={{ scaleX: scrollYProgress }}
          />
         
          <Nav_bar/>
          <Home/>
          <About/>
          <div className="relative z-0">
            <Skills/>
            <StarsCanvas />
          </div>
           <Services />
           <Projects/>
           <Contact />
           <Footer/> 
</motion.main>   
  )
};
export default App;




