import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';


import Swal from 'sweetalert2';

  const Contact = () => {
  const form = useRef();

  const handleClick = () => {
    Swal.fire(
      'Great job!',
      'Your message will reach the destination if you inputed it!',
      'success'
    )
  }


  const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
      });

   const { from_name, from_email, message } = formData;

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
      };
 
      const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm('service_91rk5o9', 'template_bqck3jj', form.current, 'y39rgdxN9zq_rfi5a')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
      
        setFormData({
          from_name: '',
          from_email: '',
          message: ''
        });
      };

  return (
    <div name='contact' className='first_color main w-full min-h-full h-screen  flex justify-center items-center p-4  '>
   
     <form className='flex flex-col md:w-[600px] w-full' ref={form} onSubmit={sendEmail}>
  
       <div>
            <p className='ml-[80px] md:ml-[200px] text-4xl font-bold inline border-b-4 border-orange-500 text-white'>
              Contact Me
            </p>
            <p className='ml-[50px] md:ml-[160px] text-white py-4'>
              //Fill out the form below to get in touch
            </p>
          </div>

            <label  className='text-white'>Name</label>
            <input className='rounded-sm border border-cyan-600 bg-[#ccd6f6] p-2 w-[100%]' required onChange={handleChange} placeholder='Enter your name here' type="text"  name="from_name" value={from_name} />
      
            <label className='text-white'>Email</label>
            <input className='rounded-sm border-cyan-600 border bg-[#ccd6f6] p-2 w-[100%]' required onChange={handleChange} placeholder='Enter your email address' type="email" name="from_email" value={from_email} />
         
            <label className='text-white'>Message</label>
            <textarea className='border-cyan-600 border rounded-sm bg-[#ccd6f6]  h-[120px]' required onChange={handleChange} placeholder='Type your message here ...' name="message" value={message} />
          
        

            <div>
                <input  onClick={handleClick}  className=' md:hover:scale-110 duration-500 bg-slate-400 w-[25%] shadow-md shadow-[#69a5ee] justify-center text-black border-2 md:hover:bg-pink-600 md:hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md' type="submit" value="Send" />
            </div>
           
          
        </form>
    </div>
  );
};
export default Contact;