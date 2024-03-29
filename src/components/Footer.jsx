import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { Link } from "react-scroll";
import { FcHome } from 'react-icons/fc';
import { Fade, JackInTheBox } from "react-awesome-reveal";

const Footer = () => {
  return (
    <main className="first_color flex flex-col md:flex-row justify-center items-center h-[180px] md:h-[100px] text-center overflow-hidden text-white p-3">
      <JackInTheBox duration={2000}>
        <div className="md:hidden text-5xl cursor-pointer">
          <Link to='home' spy={true} smooth={true} duration={400}>
            <FcHome />
          </Link>
        </div>
      </JackInTheBox>
      <div className="footer-container mb-5 md:mb-0 w-full flex flex-col justify-center md:px-5">
        <Fade>
          <div className="text-lg">
            <h1 className="py-4">©️ 2024 Mukhammadqodir. All rights reserved.</h1>
          </div>
        </Fade>
        <Fade>
          <div className="flex justify-center space-x-8 text-3xl">
            <a href="https://github.com/Mukhammadqodir05" target="_blank" rel="noopener noreferrer" className="md:hover:scale-110 duration-300">
              <FaGithub />
            </a>
            <a href="https://t.me/Mukhammadqodir" target="_blank" rel="noopener noreferrer"  className="md:hover:scale-110 duration-300">
              <FaTelegram />
            </a>
            <a href="https://www.linkedin.com/in/mukhammadqodir/" target="_blank" rel="noopener noreferrer" className="md:hover:scale-110 duration-300">
              <FaLinkedin />
            </a>
          </div>
        </Fade>
      </div>
      <JackInTheBox duration={2000}>
        <div className="hidden md:flex text-5xl cursor-pointer duration-300 hover:scale-110 p-5">
          <Link to='home' spy={true} smooth={true} duration={400}>
            <FcHome />
          </Link>
        </div>
      </JackInTheBox>
    </main>
  );
};

export default Footer;

