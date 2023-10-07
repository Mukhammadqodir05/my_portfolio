import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-center text-white">
      <div className="flex flex-col max-w-[1400px] mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">Muhammadqodir.2023, LLC. All rights reserved.</p>
        <div className="flex justify-between sm:w-[300px] md:px-0 px-10 py-4 md:mt-0 mt-[-22px] text-3xl">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 duration-300 hover:text-white"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 duration-300 hover:text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 duration-300 hover:text-white"
          >
            <FaTelegram size={30} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 duration-300 hover:text-white"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;