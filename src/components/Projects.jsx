import React from 'react';

import { Fade } from 'react-reveal';

import merc from '/src/assets/projects/merc.png'
import shop from '/src/assets/projects/shop.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full h-full md:h-[600px] bg-[#0a192f] py-20 text-gray-300 '>
      <div className=' p-4 flex flex-col md:mt-[-100px] md:items-center justify-center w-full h-full'>
       
    
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>
          projects
          </p>
          <p className='py-6'>//These are my recent projects</p>
        </div>
      


       <div className=" md:w-[900px] h-full grid sm:grid-cols-2 md:grid-cols-2 gap-4">   
            
            <Fade bottom>
         <div
           style={{ backgroundImage: `url(${merc})` }}
           className=" group container rounded-md 
                     flex justify-center text-center items-center mx-auto content-div ">
         
           <div className="opacity-0 group-hover:opacity-100 ">
             <span className="text-2xl font bold text-white  ">
               Mercedes-Benz Sale Website
             </span>
             <div className="pt-8 text-center ">
       
               <a href='https://github.com/MuhammadN1/Mercedes-Benz-Uz' target="_blank">
                 <button
                   className="text-center rounded-lg px-10 py-2 m-2
                              bg-white text-gray-700 font-bold text-lg">
                       Code
                </button>
              </a>
     
           <a href='https://mercedes-benzuz.pages.dev/' target="_blank">
            <button
              className="text-center rounded-lg px-10 py-2 m-2
                       bg-white text-gray-700 font-bold text-lg">
                Live
           </button>
          </a>
        </div>
       </div>
      </div>
      </Fade>
     

      <Fade bottom>
       <div
           style={{ backgroundImage: `url(${shop})` }}
           className=" group container rounded-md 
                     flex justify-center text-center items-center mx-auto content-div ">
         
           <div className="opacity-0 group-hover:opacity-100 ">
             <span className="text-2xl font bold text-white  ">
               E Commerce Website
             </span>
             <div className="pt-8 text-center ">
       
               <a href='https://github.com/MuhammadN1/Shop_uz' target="_blank">
                 <button
                   className="text-center rounded-lg px-10 py-2 m-2
                              bg-white text-gray-700 font-bold text-lg">
                       Code
                </button>
              </a>
             
           <a href=' https://shop-ck1ofiopl-muhammadn1s-projects.vercel.app/' target="_blank">
            <button
              className="text-center rounded-lg px-10 py-2 m-2
                       bg-white text-gray-700 font-bold text-lg">
                Live
          </button>
           </a>
         </div>
        </div>
       </div>
       </Fade>


      </div>
    </div>
  </div>
  );
};

export default Projects;
