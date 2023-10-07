import React from 'react';
import {Fade}  from 'react-reveal'

const Skills = () => {
    return (
       <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300 '>
           <div className="gap-12 py-20 max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        
            <Fade bottom>
             <div>
                  <p className='ml-[130px] mr-36  md:ml-[440px] text-4xl font-bold inline border-b-4 border-orange-500 '>Skills</p>
                   <p className='ml-[70px]  md:ml-[370px] py-4'>//Currently I am working with these technologies:</p>
               </div>
               </Fade>
                   
               <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center text-cyan-300'>
               <Fade bottom>
                    <div className='shadow-md shadow-[#69a5ee] '>
                     
                    <img className='w-20 mx-auto' src="src/assets/html.png" alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                </Fade>
            
                <Fade bottom>
                <div className='shadow-md shadow-[#69a5ee] '>
                     
                     <img className='w-20 mx-auto' src='src/assets/css.png' alt="HTML icon" />
                      <p className='my-4'>CSS</p>
                </div>  
                </Fade>

                <Fade bottom>
                <div
                   className='shadow-md shadow-[#69a5ee] '>
                    <img  className='w-20 mx-auto' src='src/assets/javascript.png'/>
                    <p className='my-4'>JavaScript</p>
                </div>
                </Fade>
                 
                <Fade bottom>
                 <div 
                  className='shadow-md shadow-[#69a5ee] '>
                  
                    <img className='w-20 mx-auto' src='src/assets/react.png'></img>
                    <p className='my-4 mx-auto'>React</p>
                 </div>
                 </Fade>

                 <Fade bottom>
                 <div
                  className='shadow-md shadow-sm:3px shadow-[#69a5ee] transform '>
                    <img className='w-20 mx-auto' src='src/assets/tailwind.png'></img>
                    <p className='my-4 mx-auto'>Tailwind Css</p>
                 </div>
                 </Fade>

                 <Fade bottom>
                 <div
                   className='transform  shadow-md  shadow-[#69a5ee]'>
                   <img className='w-20 mx-auto transform duration-300' src='src/assets/github.png'></img>
                   <p className='my-4 mx-auto'>GitHub</p>
                </div>
                </Fade>
              
              </div>
           </div>
       </div>
    );
};
export default Skills;



