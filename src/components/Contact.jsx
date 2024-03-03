import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ senderName: '', senderEmail: '', message: '' });

  const showSuccessMessage = () => {
    Swal.fire(
      'Great job!',
      'Your message has been sent successfully!',
      'success'
    );
  }
  
  const { senderName, senderEmail, message } = formData;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_91rk5o9', 'template_bqck3jj', formRef.current, 'y39rgdxN9zq_rfi5a')
      .then((result) => {
        showSuccessMessage();
        console.log(result.text);
        setFormData({
          senderName: '',
          senderEmail: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <main name='contact' className=' space-y-7 main w-full h-screen flex justify-center flex-col items-center p-3'>
      <Fade cascade duration={70} className='text-4xl font-bold inline border-b-4 border-b-violet-600 text-white'>
        𝑮𝒆𝒕 𝒊𝒏 𝒕𝒐𝒖𝒄𝒉
      </Fade>
      <div className='gradient-border second_color space-y-5 rounded-md flex flex-shrink-0 flex-col justify-center items-center md:max-w-[600px] h-[500px] max-w-[600px] w-full md:p-12 p-2 '>
        <div className='flex flex-col'>
          <h1 className='font-bold ml-2'>My Email Addresses:</h1>
          <span className='text-sm ml-4 break-words'>mummah571@gmail.com</span>
          <span className='text-sm ml-4 break-words'>mummatov73@gmail.com</span>
        </div>
        <form className='flex flex-col max-w-[500px] space-y-6 w-full p-2 z-10 relative' ref={formRef} onSubmit={sendEmail}>
          <div className='flex rounded-full gradient-border second_color justify-center space-y-1 space-x-[-20px]'>
            <input autoComplete='off' className='outline-none bg-transparent pl-6 w-[100%] p-[7px]' required onChange={handleInputChange} placeholder='Your name' type="text" name="senderName" value={senderName} />
          </div>
          <div className='flex rounded-full gradient-border second_color justify-center space-y-1 space-x-[-20px]'>
            <input autoComplete='off' className='outline-none bg-transparent pl-6 w-[100%] p-[7px]' required onChange={handleInputChange} placeholder='Your email' type="email" name="senderEmail" value={senderEmail} />
          </div>
          <div className='flex rounded-md gradient-border second_color w-full '>
              <textarea className='gradient-border w-full outline-none h-[150px] bg-transparent p-2' required onChange={handleInputChange} placeholder='Type your message here ...' name="message" value={message} />
          </div>
          <div className='flex overflow-hidden justify-center'>
            <button className='flex font-bold font-serif gradient-border bg-black flex-shrink-0 justify-center hadow-2xl shadow-black hover:scale-110 duration-300 w-full max-w-[100px] py-3 my-2 rounded-md' type="submit" value="Send">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;

