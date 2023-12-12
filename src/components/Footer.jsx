import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <main className="first_color flex flex-col md:flex-row justify-center items-center h-[180px] md:h-[100px] text-center overflow-hidden text-white">
      <div className="footer-container w-full flex flex-col justify-center md:px-20 ">
        <div className="text-lg">
         <h1 className="py-4">©️ 2023 Muhammadqodir. All rights reserved.</h1>
          </div>
            <div className="flex justify-center  space-x-5 text-2xl">
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
      </div>
    </main>
  );
};

export default Footer;
