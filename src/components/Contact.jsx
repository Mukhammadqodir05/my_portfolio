import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Fade } from 'react-reveal';
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
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
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
    <div name='contact' className='w-full min-h-full h-screen bg-gray-200 flex justify-center items-center p-4 '>
   
     <form className='flex flex-col md:w-[600px]  w-full' ref={form} onSubmit={sendEmail}>
    
     <Fade bottom>
       <div>
            <p className='ml-[80px] md:ml-[200px] text-4xl font-bold inline border-b-4 border-orange-500 text-black'>
              Contact Me
            </p>
            <p className='ml-[50px] md:ml-[160px] text-black py-4'>
              //Fill out the form below to get in touch
            </p>
          </div>
            </Fade>
           
            <Fade bottom>
            <label>Name</label>
            <input className='rounded-sm border border-cyan-600 bg-[#ccd6f6] p-2 w-[100%]' required onChange={handleChange} placeholder='Enter your name here' type="text"  name="from_name" value={from_name} />
            </Fade>
            
            <Fade bottom>
            <label>Email</label>
            <input className='rounded-sm border-cyan-600 border bg-[#ccd6f6] p-2 w-[100%]' required onChange={handleChange} Placeholder='Enter your email address' type="email" name="from_email" value={from_email} />
            </Fade>

            <Fade bottom>
            <label>Message</label>
            <textarea className='border-cyan-600 border rounded-sm bg-[#ccd6f6]  h-[200px]' required onChange={handleChange} placeholder='Type your message here ...' name="message" value={message} />
            </Fade>

            <motion.div     
                initial={{opacity: 0, scale: 0, x: -500 }}
                whileHover={{rotate: 360}}
                whileInView = {{opacity: 1, scale: 1, x: 0}}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}>
                <input  onClick={handleClick}  className='hover:scale-110 duration-500 bg-slate-400 w-[25%] shadow-md shadow-[#69a5ee] justify-center text-black border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md' type="submit" value="Send" />
            </motion.div>
           
          
        </form>
    </div>
  );
};
export default Contact;