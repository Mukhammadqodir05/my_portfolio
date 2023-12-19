import React from 'react';
import { Fade } from "react-awesome-reveal";
import css from '/src/assets/css.png'
import github from '/src/assets/github.png'
import html from '/src/assets/html.png'
import javascript from '/src/assets/javascript.png'
import react from '/src/assets/react.png'
import tailwind from '/src/assets/tailwind.png'
import typescript from '/src/assets/typescript.png'
import nextjs from '/src/assets/nextjs.png'
import firebase from '/src/assets/firebase.png'


const Skills = () => {
    return (
      <main
      name='skills' className='main flex items-center pb-10 justify-center w-full h-full text-white  p-3'>
      
          <div className=" lg:max-w-[1200px] py-8 items-center text-center justify-center w-full h-full">
             <div className='py-10'>
                  <Fade cascade duration={70} className='text-4xl font-bold inline border-b-4 border-violet-500'>💪🏻𝑺𝒌𝒊𝒍𝒍𝒔💪🏻</Fade>
               </div>
                 
               <div className='w-full h-full justify-center items-center lg:grid lg:grid-cols-4 flex flex-col gap-6 text-center text-cyan-300'>
                    <Fade duration={1000}  className='hover:scale-90 w-full flex flex-col justify-center items-center h-[200px] max-w-[400px] max-h-[400px] duration-500 shadow-md shadow-[#69a5ee]'>
                      <div> 
                         <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                         <p className='my-4'>HTML</p>
                      </div>
                  </Fade>
                  
                  <Fade  duration={1500} n className='hover:scale-90 w-full flex flex-col justify-center items-center h-[200px] max-w-[400px] max-h-[400px] duration-500 shadow-md shadow-[#69a5ee]'>
                     <div> 
                        <img className='w-20 mx-auto' src={css} alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                  </div>  
                  </Fade>

                  <Fade  duration={2000} n className='hover:scale-90 w-full flex flex-col justify-center items-center h-[200px] max-w-[400px] max-h-[400px] duration-500 shadow-md shadow-[#69a5ee]'>
                     <div>
                        <img className='w-20 mx-auto' src={typescript} alt="HTML icon" />
                        <p className='my-4'>TypeScript</p>
                     </div>  
                  </Fade>

                  <Fade  duration={2500} n className='hover:scale-90 w-full flex flex-col justify-center items-center h-[200px] max-w-[400px] max-h-[400px] duration-500 shadow-md shadow-[#69a5ee]'>
                     <div>
                        <img  className='w-20 mx-auto' src={javascript}/>
                        <p className='my-4'>JavaScript</p>
                     </div>
                  </Fade>
                  
                  <Fade  duration={2700} n className='hover:scale-90 w-full flex flex-col justify-center items-center h-[200px] max-w-[400px] max-h-[400px] duration-500 shadow-md shadow-[#69a5ee]'>
                     <div>
                        <img  className='w-[85px] h-[76px] mx-auto' src={nextjs}/>
                        <p className='my-4'>Next JS</p>
                     </div>
                    </Fade>

                      
                    <Fade  duration={3000} n className='hover:scale-90 w-full flex flex-col justify-center items-center h-[200px] max-w-[400px] max-h-[400px] duration-500 shadow-md shadow-[#69a5ee]'>
                        <div>
                           <img  className='w-20 rounded-full mx-auto' src={firebase}/>
                           <p className='my-4'>Firebase</p>
                        </div>
                    </Fade>

                    <Fade  duration={3200} n className='hover:scale-90 w-full flex flex-col justify-center items-center h-[200px] max-w-[400px] max-h-[400px] duration-500 shadow-md shadow-[#69a5ee]'>
                        <div>
                           <img className='w-20 mx-auto' src={react}></img>
                           <p className='my-4 mx-auto'>React</p>
                        </div>
                   </Fade>
               
                   <Fade  duration={3500} n className='hover:scale-90 w-full flex flex-col justify-center items-center h-[200px] max-w-[400px] max-h-[400px] duration-500 shadow-md shadow-[#69a5ee]'>
                        <div>
                           <img className='w-20 mx-auto' src={tailwind}></img>
                           <p className='my-4 mx-auto'>Tailwind Css</p>
                        </div>
                     </Fade>
              </div>
           </div>
       </main>
    );
};
export default Skills;



