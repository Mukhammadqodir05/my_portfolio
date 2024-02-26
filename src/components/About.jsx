import React from 'react';
import myImage from '/src/assets/myImage.jpg'
import {Link} from 'react-scroll'
import { FaGithub, FaLinkedin, FaTelegram} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { Bounce } from 'react-awesome-reveal';

const About = () => { 

  return (
    <main name='about' className="second_color h-full md:h-[900px] md:pb-20 md:pt-[200px] pb-10 lg:h-screen flex w-full justify-center items-center p-3 lg:pt-40 pt-28">   
      <div className='lg:max-w-[1100px] w-full flex md:px-5 md:gap-10 lg:space-x-[-30px] lg:px-4 space-y-10 flex-col items-center text-center justify-center md:grid md:grid-cols-2'>
       <Fade duration={2000}>
         <div className='flex border-cyan-500 flex-col pb-10 my_image w-full max-w-[400px] md:max-w-[350px] lg:max-w-[400px] h-full max-h-[600px] border rounded-md p-4'>
          <Bounce>
            <img className="w-full md:max-w-[350px] lg:ml-2 flex items-center justify-center text-center max-h-[350px] p-4 rounded-tl-[8%] rounded-br-[8%] mt-[-10px]" src={myImage}/>
            </Bounce>
             <div className='flex text-white flex-col flex-shrink-0 text-center justify-center px-2 '>
               <Fade cascade  duration={70} className='text-2xl'>𝑴𝒖𝒉𝒂𝒎𝒎𝒂𝒅𝒒𝒐𝒅𝒊𝒓</Fade> 
                <div className="flex w-full justify-center mt-16 space-x-10 text-5xl">
                  <a href="https://github.com/Mukhammadqodir05" target="_blank" rel="noopener noreferrer" className="md:hover:scale-110 duration-300">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/mukhammadqodir" 
                    target="_blank" rel="noopener noreferrer" className="md:hover:scale-110 duration-300">
                    <FaLinkedin />
                  </a>
                 </div>
                 <Link className='mt-[15px] md:mt-[35px] lg:mt-[10px] py-3' to='contact' spy={true} smooth={true}  duration={400}>
                     <button className='h1 rounded-xl py-3 px-10'>Contact me</button>
                </Link>
               </div>
             </div>
            </Fade>
            <Fade duration={2000}>
             <div className='lg:max-w-[450px] w-full max-w-[400px] justify-center text-left space-y-3 items-center flex flex-col border-cyan-500 '>
                <Fade cascade duration={70} className='inline border-b-4 border-b-violet-600  font-extrabold text-center text-2xl'>☪️ 𝑺𝒆𝒍𝒇-𝑺𝒖𝒎𝒎𝒂𝒓𝒚 ☪️</Fade>
                <span className='font-bold'>𝐇𝐞𝐥𝐥𝐨! 𝐈'𝐦 𝐌𝐮𝐡𝐚𝐦𝐦𝐚𝐝𝐪𝐨𝐝𝐢𝐫, 𝐚 𝐩𝐚𝐬𝐬𝐢𝐨𝐧𝐚𝐭𝐞 𝐟𝐫𝐨𝐧𝐭-𝐞𝐧𝐝 𝐰𝐞𝐛 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫.</span>
                 <span>
                  I embarked on my journey into web development as an independent developer with no prior programming knowledge. After finding traditional learning methods too slow, I chose the self-learning path, enabling me to continuously adapt and learn new technologies as they emerge. My goal as a passionate web developer is to create visually captivating and highly functional user experiences across all devices, emphasizing design and a commitment to excellence for every project.
                 </span>
                 <span>
                  My dedication to innovation and creativity motivates me to explore new technologies and stay ahead of web development trends. Leveraging my expertise, I aim to craft intuitive and seamless user experiences that leave a lasting impression. Whether it's designing a website or developing complex web applications, I am committed to delivering exceptional results that surpass expectations.
               </span>
             </div>
           </Fade>
         </div>
    </main>
  );
};

export default About;