import React from "react";
import { FaGithub, FaTwitter, FaYoutube, FaLinkedin} from "react-icons/fa";
import { Link } from "react-scroll";
import {FcHome} from 'react-icons/fc'

const Footer = () => {
  return (
    <main className="first_color flex flex-col md:flex-row justify-center items-center h-[180px] md:h-[100px] text-center overflow-hidden text-white">
        <div className="md:hidden text-5xl cursor-pointer">
           <Link to='home' spy={true} smooth={true} duration={400} >
               <FcHome />
           </Link>
        </div>

      <div className="footer-container mb-5 md:mb-0 w-full flex flex-col justify-center md:px-5 ">
        <div className="text-lg">
         <h1 className="py-4">©️ 2023 Muhammadqodir. All rights reserved.</h1>
          </div>
            <div className="flex justify-center  space-x-8 text-3xl">
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
      </div>
      <div className="hidden md:flex text-5xl cursor-pointer duration-300 hover:scale-110 p-5">
           <Link to='home' spy={true} smooth={true} duration={400} >
               <FcHome />
           </Link>
        </div>

    </main>
  );
};

export default Footer;
