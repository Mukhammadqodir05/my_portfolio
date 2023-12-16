import React from 'react';


import merc from '/src/assets/projects/merc.png'
import shop from '/src/assets/projects/shop.png'

const Projects = () => {
  return (
    <div name='projects' className='second_color md:h-screen main text-center w-full  flex flex-col items-center justify-center h-full text-gray-300 '>
    
        <div className=''>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>
          projects
          </p>
          <p className='py-6'>//These are my recent projects</p>
        </div>
      


       <div className=" md:w-[500px]  justify-between md:h-[300px] flex-col h-[500px] grid md:grid-cols-2 gap-4">   
            
         <div
           style={{ backgroundImage: `url(${merc})` }}
           className="rounded-md w-[300px]">
      </div>
    
       <div
           style={{ backgroundImage: `url(${shop})` }}
           className="rounded-md w-[300px]">
       </div>
    </div>
  </div>
  );
};

export default Projects;
