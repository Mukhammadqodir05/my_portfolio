import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const Intro = () => {
         const [message, setMessage] = useState('');
         const [name, setName] = useState('');
         const [option, setOption] = useState('');
         const [options, setOptions] = useState('');
         const [email, setEmail] = useState('');
       
         useEffect(() => {

           typeWriter("Assalomu Alaykum 👋", setMessage),
          
           setTimeout(() => { typeWriter("I'm Muhammadqodir ", setName); }, 1200),
           
           setTimeout(() => { typeWriter("Pick one of the following options 👇", setOption) }, 2300)
           
           setTimeout(() => {typeWriter(" Go To Home", setOptions)},4300 )
          
           setTimeout(() => {typeWriter(" Email Me ✉️", setEmail)},5200 )
         }, []);
       

         const typeWriter = (text, setText) => {
               let i = 0;
               const speed = 40;
               const type = () => {
                  if (i < text.length){
                           setText(`<span style="background-color: rgb(79, 74, 74);
                                    border-radius: 50px;
                                    padding: 17px; "> 
                                   ${text.substring(0, i+1)}</span>`);
                      i++;
                      setTimeout(type, speed);
                  };
              
               };
            type();   
         }
       
    return (
         <div className=' w-full h-screen absolute bg-[#dedbdb]'>

         <div className='ml-[25px] text-white space-y-10 md:mt-[70px] md:ml-[70px] mt-10 text-xl md:text-5xl md:space-y-16'> 
         
              <h1  dangerouslySetInnerHTML={{ __html: message }}></h1>
              <h2 dangerouslySetInnerHTML={{ __html: name }}></h2>
              <h3 dangerouslySetInnerHTML={{ __html: option }}></h3>
       
         </div>
            
            <div className=' absolute text-white md:text-2xl md:ml-[150px] ml-[50px] mt-[100px]  hover:scale-110 duration-500 shadow-slate-600'>
              <Link to='/home' className=' hover:shadow-md shadow-slate-600' > 
                  <span   dangerouslySetInnerHTML={{__html: options}}></span> 
               </Link> 
            </div>

             <div className='absolute text-white mt-[100px] ml-[200px] md:text-2xl md:ml-[350px] hover:scale-110 duration-500'>
                 <a href='mailto:muhammadqodirummatov571@gmail.com'>
                     <span className='' dangerouslySetInnerHTML={{__html: email}}></span>
                  </a>
             </div>
        
    </div>
  )};
export default Intro;