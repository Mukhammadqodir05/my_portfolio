import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import  space  from '/src/assets/space.jpg';

const Intro = () => {
         const [message, setMessage] = useState('');
         const [name, setName] = useState('');
         const [option, setOption] = useState('');
         const [options, setOptions] = useState('');
         const [email, setEmail] = useState('');
       
         useEffect(() => {

           typeWriter("Hi there 👋", setMessage),
          
           setTimeout(() => { typeWriter("I'm Muhammad ", setName); }, 700),
           
           setTimeout(() => { typeWriter("Pick one of the following options 👇", setOption) }, 1500)
           
           setTimeout(() => {typeWriter(" Go To Home", setOptions)}, 3300 )
          
           setTimeout(() => {typeWriter(" Email Me ✉️", setEmail)},  4000 )
         }, []);
       

         const typeWriter = (text, setText) => {
               let i = 0;
               const speed = 40;
               const type = () => {
                  if (i < text.length){
                           setText(`<span style="background-color: hsla(290, 36%, 34%, 0.8)   ;
                                    border-radius: 50px;
                                    padding: 17px;
                                     "> 
                                    ${text.substring(0, i+1)} </span>`);
                      i++;
                      setTimeout(type, speed);
                  };
              
               };
            type();   
         }
       

    return (
         <div className=' w-full h-screen absolute'>
           
         <div className='absolute w-full h-[100%]'>
          <img className='w-full h-[100%]' src={space} />
         </div>

         <div className='ml-[25px] text-white md:mt-[70px] md:ml-[70px] mt-12 text-xl md:text-5xl '> 
              <h1 className='absolute' dangerouslySetInnerHTML={{ __html: message }}></h1>
         </div>
         
         <div className='ml-[25px] text-white text-xl md:text-5xl mt-[-10px] md:ml-[70px] md:mt-[120px] '>
              <h2 className='absolute mt-[100px]' dangerouslySetInnerHTML={{ __html: name }}></h2>
         </div>
         
         <div className='absolute ml-[25px] mt-[190px] text-white text-xl md:text-5xl md:mt-[250px] md:ml-[70px]'>
              <h3 dangerouslySetInnerHTML={{ __html: option }}></h3>
         </div>
       
            <div className=' absolute text-white md:text-2xl md:ml-[150px] ml-[50px] mt-[300px] md:mt-[400px]  hover:scale-110 duration-500 shadow-slate-600'>
              <Link to='/home' className=' hover:shadow-md shadow-slate-600' > 
                  <span   dangerouslySetInnerHTML={{__html: options}}></span> 
               </Link> 
            </div>

             <div className='absolute text-white mt-[300px] md:mt-[400px] ml-[200px] md:text-2xl md:ml-[350px] hover:scale-110 duration-500'>
                 <a href='mailto:muhammadqodirummatov571@gmail.com'>
                     <span className='' dangerouslySetInnerHTML={{__html: email}}></span>
                  </a>
             </div>
    </div>
  )};
export default Intro;