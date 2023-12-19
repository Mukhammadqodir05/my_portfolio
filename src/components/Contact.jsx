import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {FaPerson} from 'react-icons/fa6'
import {HiOutlineMail} from'react-icons/hi'
import Swal from 'sweetalert2';
import { Fade } from "react-awesome-reveal";


  const Contact = () => {
      const form = useRef();

      const handleClick = () => {
        Swal.fire(
          'Great job!',
          'Your message will reach the destination!',
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
    <main name='contact' className='first_color space-y-7 main w-full h-screen flex justify-center flex-col items-center p-3'>
   
    
        <Fade cascade duration={80} className='text-4xl font-bold inline border-b-4 border-b-violet-600 text-white'>
             𝑮𝒆𝒕 𝒊𝒏 𝒕𝒐𝒖𝒄𝒉
        </Fade>

        <div className='border space-y-5  border-cyan-500 rounded-md flex flex-shrink-0 flex-col justify-center md:max-w-[600px] md:w-[600px] h-[500px] max-w-[600px] w-full md:p-12 p-2 '>
            <div className='flex flex-col'>
                <h1 className='font-bold ml-2'>My Email Address:</h1>
                <span className='text-sm ml-4  break-words'>mummah571@gmail.com</span>
                <span className='text-sm ml-4  break-words'>mummatov73@gmail.com</span>
              
              </div>
      

        <Fade duration={2000}>
          <form className='flex flex-col max-w-[500px] space-y-6 w-full p-2' ref={form} onSubmit={sendEmail}>
                <div className='flex justify-center space-y-1 space-x-[-20px]'>
                    <FaPerson className=" text-2xl text-white" />
                    <input className='outline-none border-b bg-transparent border-cyan-600 pl-6 w-[100%]' required onChange={handleChange} placeholder='Your name' type="text"  name="from_name" value={from_name} />
                </div>

                <div className='flex justify-center space-y-[-2px] space-x-[-20px]'>
                    <HiOutlineMail  className='text-xl text-white '/>
                    <input className='outline-none border-b bg-transparent border-cyan-600 pl-7 w-[100%]' required onChange={handleChange} placeholder='Your email' type="email" name="from_email" value={from_email} />
                </div>

                <textarea className='outline-none rounded-md border-cyan-600 border h-[150px] bg-transparent p-2' required onChange={handleChange} placeholder='Type your message here ...' name="message" value={message} />
                
                <div className='flex overflow-hidden justify-center'>
                        <button onClick={handleClick} className='flex flex-shrink-0 justify-center outline-none border border-t-gray-100 shadow-2xl shadow-black hover:scale-110 duration-300 border-cyan-600 w-[100px] max-w-[100px] py-3 my-2 rounded-md' type="submit" value="Send">
                              Submit
                        </button>
                </div>
            </form>
           </Fade>
        </div>
    </main>
  );
};
export default Contact;