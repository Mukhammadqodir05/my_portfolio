import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import mercedes from '/src/assets/projects/mercedes.png';
import weather from '/src/assets/projects/weather.png';
import { Fade } from "react-awesome-reveal";

const Projects = () => {

  return (
    <main name='projects' 
       className='flex flex-col justify-center items-center second_color lg:h-screen h-full w-full p-3 text-center text-white'>
        <Fade>
          <div>
            <h1 className='text-4xl font-bold inline border-b-4 border-violet-500'>𝑷𝒓𝒐𝒋𝒆𝒄𝒕𝒔</h1>
            <p className='py-6'>These are some of my recent projects</p>
          </div>
        </Fade>
        
        <div className="grid  md:grid-cols-2 gap-10"> 
        <Fade>
         <div className='p-5 border h-full border-gray-500 rounded-xl w-full max-w-[400px] justify-center items-center my_image'>
          <img className="rounded-xl w-full max-w-[400px]" src={weather} alt="" />
          <h1 className='font-serif font-bold text-xl mt-3 text-[#f800ba]'>Weather App</h1>
          <div className='flex text-left'>
            <span>A weather app built using React that allows users to search for current weather conditions in any city around the world. This project helped me improve my skills in React and API integration.</span>
          </div>
          <h1 className='font-serif font-bold text-xl mt-5 text-[#f800ba]'>Technologies Used</h1>
          <ul className='grid grid-cols-2 text-left list-disc ml-16'>
           <li>React JS</li>
           <li>API Integration</li>
           <li>Tailwind CSS</li>
           <li>HTML</li>
           <li>CSS</li>
           <li>JavaScript</li>
          </ul>
          <div className='flex justify-between mt-5'>
            <a href="https://worldwideweathermap.vercel.app/" target="_blank" rel="noreferrer">
              See Live <FaExternalLinkAlt className='ml-2' />
            </a>
            <a href="https://github.com/Muhammadqodir001/Weather-App" target="_blank" rel="noreferrer">
              Github Repo <FaGithub className='ml-2' />
            </a>
          </div>
        </div>
        </Fade>

        <Fade>
          <div className='p-5 border border-gray-500 rounded-xl w-full h-full max-w-[400px] justify-center items-center my_image'>
            <img className="w-full rounded-xl" src={mercedes} alt="" />
              <h1 className='font-serif font-bold text-xl mt-3 text-[#f800ba]'>Mercedes-Benz Dashboard</h1>
              <div className='flex text-left'>
                <span>A custom dashboard designed and developed for Mercedes-Benz's new line of vehicles. This project helped me improve my skills in UI/UX design and front-end development.</span>
              </div>
              <h1 className='font-serif font-bold text-xl mt-5 text-[#f800ba]'>Technologies Used</h1>
              <ul className='grid grid-cols-2 text-left list-disc ml-16 '>
               <li>React JS</li>
               <li>Tailwind CSS</li>
               <li>HTML</li>
               <li>CSS</li>
               <li>JavaScript</li>
              </ul>
              <div className='flex justify-between mt-5'>
                <a href="https://mercedesbenz.vercel.app/" target="_blank" rel="noreferrer">
                  See Live <FaExternalLinkAlt className='ml-2' />
                </a>
                <a href="https://github.com/Muhammadqodir001/MercedesBenzApp" target="_blank" rel="noreferrer">
                  Github Repo <FaGithub className='ml-2' />
                </a>
              </div>
          </div>
          </Fade>

       </div>
    </main>
  );
};

export default Projects;

