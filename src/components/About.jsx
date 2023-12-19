import React from 'react';
import myImage from '/src/assets/myImage.jpg'
import {Link} from 'react-scroll'
import { FaGithub, FaTwitter, FaYoutube, FaLinkedin} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { Bounce } from 'react-awesome-reveal';
import { Flip } from 'react-awesome-reveal';
import { Reveal } from 'react-awesome-reveal';
import { JackInTheBox } from 'react-awesome-reveal';

const About = () => { 

  return (
    <main name='about' className="second_color h-full md:h-[900px] md:pb-20 md:pt-[200px] pb-10 lg:h-screen flex w-full justify-center items-center p-3 lg:pt-40 pt-28 ">   
      <div className='lg:max-w-[1100px] w-full flex md:px-5 md:gap-10 lg:space-x-[-30px] lg:px-4 space-y-10 flex-col items-center text-center justify-center md:grid md:grid-cols-2  '>
        
       <Fade duration={2000}>
         <div className='flex border-cyan-500 flex-col pb-10 my_image w-full max-w-[400px] md:max-w-[350px] lg:max-w-[400px] h-full max-h-[600px] border rounded-md p-4'>
          <Bounce>
            <img className="md:max-w-[350px] lg:ml-2 flex items-center justify-center text-center max-h-[350px] p-4 rounded-tl-[8%] rounded-br-[8%] mt-[-10px]" src={myImage}/>
          </Bounce>

            <div className='flex text-white flex-col flex-shrink-0 text-center justify-center px-2 '>
               <Fade cascade  duration={80} className='text-2xl'>𝑴𝒖𝒉𝒂𝒎𝒎𝒂𝒅𝒒𝒐𝒅𝒊𝒓</Fade> 
            
              <div className="flex text-4xl justify-center mt-16 space-x-7 lg:space-x-9 md:text-5xl">
                  <a href="https://github.com/Muhammadqodir001" target="_blank" rel="noopener noreferrer" className="md:hover:scale-110 duration-300">
                    <FaGithub />
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
                 <Link className='mt-[35px] md:mt-[50px] lg:mt-[20px] py-3' to='contact' spy={true} smooth={true}  duration={400}>
                     <button className='h1 rounded-xl py-3 px-10'>Contact me</button>
                </Link>
           </div>
          </div>
        </Fade>
          
        <Fade duration={2000}>
            <div className='lg:max-w-[450px] max-w-[400px] text-left space-y-3 items-center flex flex-col border-cyan-500 '>
                <Fade cascade duration={70} className='inline border-b-4 border-b-violet-600 md:mt-[-50px] font-extrabold text-center text-2xl'>☪️ 𝑺𝒆𝒍𝒇-𝑺𝒖𝒎𝒎𝒂𝒓𝒚 ☪️</Fade>
                <span className='font-bold'>𝐇𝐞𝐥𝐥𝐨! 𝐈'𝐦 𝐌𝐮𝐡𝐚𝐦𝐦𝐚𝐝𝐪𝐨𝐝𝐢𝐫, 𝐚 𝐩𝐚𝐬𝐬𝐢𝐨𝐧𝐚𝐭𝐞 𝐟𝐫𝐨𝐧𝐭-𝐞𝐧𝐝 𝐰𝐞𝐛 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫.</span>
                 
               <span>My journey into the world of web development began in 2023 
                     as an independent developer with no prior knowledge of 
                     programming. I initially enrolled in a bootcamp, but soon 
                     realized that the slow pace of learning was not for me. 
                     Instead, I decided to take the self-learning route, which 
                     has allowed me to constantly adapt and learn new technologies day-to-day
                     as they emerge.
               </span>
               <span>As an enthusiastic web developer, my ultimate goal is to create 
                     stunning user experiences that are both visually captivating and 
                     highly functional across all devices. With a strong focus on design 
                     and a commitment to excellence, I am dedicated to delivering the best
                     possible results for every project.
               </span>
               <span>My passion for innovation and 
                     creativity drives me to constantly explore new technologies and stay 
                     at the forefront of web development trends. By leveraging my skills 
                     and expertise, I strive to create intuitive and seamless user 
                     experiences that leave a lasting impression on every visitor. 
                     Whether it's designing a website or developing a complex web 
                     application, I am committed to delivering exceptional results that 
                     exceed expectations.
               </span>
          </div>
          </Fade>
      </div>
    </main>
  );
};

export default About;