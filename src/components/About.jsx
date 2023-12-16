import React from 'react';
import myImage from '/src/assets/myImage.jpg'
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin} from "react-icons/fa";

const About = () => { 

  return (
    <main name='about' className="second_color flex h-screen w-full justify-center items-center md:pt-20 ">
     
      <div className='flex md:px-5 md:gap-20 lg:space-x-[10px] lg:px-4 space-y-10 flex-col items-center text-center justify-center md:grid md:grid-cols-2 px-5 '>
         <div className='flex border-cyan-500 flex-col pb-10 my_image w-full max-w-[400px] md:max-w-[350px] lg:max-w-[400px] h-full max-h-[560px] border rounded-md p-4'>
          <img className="md:max-w-[350px] max-h-[350px] p-6 rounded-tl-[8%] rounded-br-[8%] mt-[-18px]" src={myImage}/>
           <div className='flex text-white flex-col flex-shrink-0 text-center justify-center px-2 '>
                <h1 className='text-2xl'>𝑴𝒖𝒉𝒂𝒎𝒎𝒂𝒅𝒒𝒐𝒅𝒊𝒓</h1>

              <div className="flex justify-center mt-10 space-x-9 text-5xl">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="md:hover:scale-110 duration-300">
                    <FaFacebook />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="md:hover:scale-110 duration-300">
                    <FaTwitter />
                  </a>
                  <a href="https://www.youtube.com/@MasterProgrammingLanguages
                    " target="_blank" rel="noopener noreferrer" className="md:hover:scale-110 duration-300">
                    <FaYoutube />
                  </a>
                  <a href="https://www.linkedin.com/in/muhammadqodir-developer/" 
                    target="_blank" rel="noopener noreferrer" className="md:hover:scale-110 duration-300">
                    <FaLinkedin />
                  </a>
              </div>
                 <button className='h1 mt-[25px] py-3 rounded-xl '>Contact me</button>
           </div>
        </div>
          
            <div className='flex flex-col border-cyan-500 p-4'>
                <h1 className=' md:mt-[-300px]'>About Me</h1>
          </div>
          
      </div>
    </main>
  );
};

export default About;