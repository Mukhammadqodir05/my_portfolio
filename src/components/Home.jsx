import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Fade, Bounce } from 'react-reveal';

import me4 from '/src/assets/me4.jpg'

const Home = () => {
  const [nav, setNav] = useState(false);
  const hClick = () => setNav(!nav);

  return (

    <div
      name='home'
      className='bg-[#0a192f] min-h-screen flex py-36 md:flex-row flex-col items-center'
    >
      
      <Bounce left>
       <div className='shadow-md shadow-violet-400 flex-1 bg-gradient-to-tr from-violet-600 rounded-2xl pl-4 w-[90%] md:ml-40 '>
        <div className='text-center md:text-left'>
          <h1 className=' md:text-5xl text-2 md:leading-normal leading-10 text-white'>
            <span className=' text-teal-400 md:text-5xl'>
              <span className='text-violet-600 '>Hi There👋, It is me </span>
              <br />
            </span>
            <span>Muhammadqodir</span>
          </h1>
          <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-white'>
            Your
            <span className='text-yellow-500'> Front End Web Developer</span>
          </h4>

          <p className='text-white py-4 max-w-[700px]'>
            I'm a programmer who likes creating visually appealing and
            user-friendly websites.
          </p>
        </div>
        <div>
          <button
          
            className='hover:scale-110 duration-500 shadow-md shadow-teal-300  rounded-md  text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-amber-500  hover:border-amber-500'
          >
            <Link
              onClick={hClick}
              to='about'
              smooth={true}
              duration={400}
            >
              
              About Me
            </Link>

            <div className='group-hover:rotate-90 duration-300'>
            <Link
              onClick={hClick}
              to='about'
              smooth={true}
              duration={400}>
              <HiArrowNarrowRight className='ml-3' />
             </Link>
            </div>
          </button>
        </div>
      </div>
      </Bounce>
   
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className='hover:scale-110 duration-500 py-10 rounded-full flex-1 flex items-center justify-center  h-full'
      >
       <motion.img
      whileHover={{ rotate: -180 }}
      className='shadow-md shadow-[#bfe676] justify-center text-white border-2 hover:bg-pink-600 hov rounded-full md:w-7/12 h-full object-cover w-[70%] '
     src={me4}
     alt='Profile'/>
      </motion.div>


    </div>
  );
};

export default Home;

