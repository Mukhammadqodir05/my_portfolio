import React from 'react';

import css from '/src/assets/css.png'
import github from '/src/assets/github.png'
import html from '/src/assets/html.png'
import javascript from '/src/assets/javascript.png'
import react from '/src/assets/react.png'
import tailwind from '/src/assets/tailwind.png'

const Skills = () => {
    return (
       <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300 '>
           <div className="gap-12 py-20 max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        
             <div>
                  <p className='ml-[130px] mr-36  md:ml-[440px] text-4xl font-bold inline border-b-4 border-orange-500 '>Skills</p>
                   <p className='ml-[70px]  md:ml-[370px] py-4'>//Currently I am working with these technologies:</p>
               </div>
             
                   
               <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center text-cyan-300'>
           
                    <div className='hover:scale-110 duration-500 shadow-md shadow-[#69a5ee] '>
                     
                    <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
            
                <div className='shadow-md hover:scale-110 duration-500 shadow-[#69a5ee] '>
                     
                     <img className='w-20 mx-auto' src={css} alt="HTML icon" />
                      <p className='my-4'>CSS</p>
                </div>  
              
                <div
                   className='shadow-md hover:scale-110 duration-500 shadow-[#69a5ee] '>
                    <img  className='w-20 mx-auto' src={javascript}/>
                    <p className='my-4'>JavaScript</p>
                </div>
              
                 <div 
                  className='hover:scale-110 duration-500 shadow-md shadow-[#69a5ee] '>
                  
                    <img className='w-20 mx-auto' src={react}></img>
                    <p className='my-4 mx-auto'>React</p>
                 </div>
              
                 <div
                  className='hover:scale-110 duration-500 shadow-md shadow-sm:3px shadow-[#69a5ee] transform '>
                    <img className='w-20 mx-auto' src={tailwind}></img>
                    <p className='my-4 mx-auto'>Tailwind Css</p>
                 </div>
             
                 <div
                   className='transform  hover:scale-110 duration-500 shadow-md  shadow-[#69a5ee]'>
                   <img className='w-20 mx-auto transform duration-300' src={github}></img>
                   <p className='my-4 mx-auto'>GitHub</p>
                </div>
              
           
              
              </div>
           </div>
       </div>
    );
};
export default Skills;



