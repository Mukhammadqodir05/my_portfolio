import React from 'react';
import merc from '/src/assets/projects/merc.png'
import shop from '/src/assets/projects/shop.png'

const Projects = () => {

  return (
    <main name='projects' 
      className='second_color flex md:h-screen h-full w-full p-3 py-10 text-white'>
       <div className='flex flex-col w-full h-full items-center justify-center text-center'>
          <div className=''>
            <h1 className='text-4xl font-bold inline border-b-4 border-violet-500'>𝑷𝒓𝒐𝒋𝒆𝒄𝒕𝒔</h1>
            <p className='py-6'> //𝐓𝐡𝐞𝐬𝐞 𝐚𝐫𝐞 𝐦𝐲 𝐫𝐞𝐜𝐞𝐧𝐭 𝐩𝐫𝐨𝐣𝐞𝐜𝐭𝐬</p>
          </div>
        
        <div className=" md:w-[500px] md:space-x-20  justify-between md:h-[300px] flex-col h-[500px] grid md:grid-cols-2 gap-4">   
              
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
  </main>
  );
};

export default Projects;
