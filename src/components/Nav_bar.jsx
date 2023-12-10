import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes  } from 'react-icons/fa';


const Nav_bar = () => {

  const [nav, setNav] = useState(false);
  const hClick = () => setNav(!nav);

  return (
    <main name='top' className='navbar second_color relative text-white bg h-[70px] w-full z-10 flex justify-between items-center  py-2 '>
     
      <div className='z-10 p-3 text-xl '>
           <h1>Muhammadqodir</h1>
      </div>
    
       <ul className='hidden md:flex space-x-9 items-center text-xl  justify-center mr-[200px] '>

            <li className='  duration-300 hover:scale-110 cursor-pointer '>
                <Link  activeClass='active'  onClick={hClick} to='home' spy={true} smooth={true} offset={-250}  duration={400} >Home </Link>
            </li>
          
            <li className='   duration-300 hover:scale-110  cursor-pointer'>
                <Link activeClass='active'  onClick={hClick}  to='about' spy={true} smooth={true} offset={-50}  duration={400} > About </Link>
            </li>

            <li className=' duration-300 hover:scale-110 cursor-pointer'>
                <Link activeClass='active'  onClick={hClick}  to='skills' spy={true} smooth={true} offset={-50}  duration={400} >Services</Link>
            </li>

            <li className='  duration-300 hover:scale-110  cursor-pointer'>
                <Link activeClass='active'  onClick={hClick}  to='projects' spy={true} smooth={true} offset={-150}  duration={400} >Skills</Link>
            </li>
            
            <li className='duration-300 hover:scale-110  cursor-pointer'>
              <Link activeClass='active' onClick={hClick} to='contact' spy={true} smooth={true} offset={-100} duration={400}>Contact</Link>
            </li>

        </ul>

    <div className="md:hidden cursor-pointer z-10 px-4 text-4xl"  onClick={hClick} >
        {!nav ? <FaBars className='icon text-3xl ' /> :  <FaTimes className="  text-3xl " />}
    </div>

      
    {nav ? (
       <ul className="first_color md:hidden py-20 p-8 justify-start absolute space-y-5 top-0 w-[100%] h-screen flex-col flex duration-500 "> 
       
                <li className='cursor-pointer '>
                   <Link  activeClass='active'  onClick={hClick} to='home' spy={true} smooth={true} offset={-250}  duration={400} >Home</Link>
                </li>

                <li className='cursor-pointer'>
                    <Link activeClass='active'  onClick={hClick}  to='about' spy={true} smooth={true} offset={-50}  duration={400} >About</Link>
                </li>

                <li className='cursor-pointer'>
                    <Link activeClass='active'  onClick={hClick}  to='skills' spy={true} smooth={true} offset={-50}  duration={400} >Services</Link>
                </li>

                <li className='cursor-pointer'>
                    <Link activeClass='active'  onClick={hClick}  to='projects' spy={true} smooth={true} offset={-150}  duration={400} >Skills</Link>
                </li>

                <li className='cursor-pointer '>
                    <Link activeClass='active' onClick={hClick} to='contact' spy={true} smooth={true} offset={-100} duration={400}>Contact</Link>
                </li>

            </ul>): ""}

    </main>
  );
};

export default Nav_bar;



