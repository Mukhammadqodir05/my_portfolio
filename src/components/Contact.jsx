import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const formRef = useRef();

  const showSuccessMessage = () => {
    Swal.fire(
      'Great job!',
      'Your message has been sent successfully!',
      'success'
    );
  }

  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    message: ''
  });

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
        console.log(result.text);
        showSuccessMessage();
      }, (error) => {
        console.log(error.text);
      });
  
    setFormData({
      senderName: '',
      senderEmail: '',
      message: ''
    });
  };

  return (
    <main name='contact' className='first_color space-y-7 main w-full h-screen flex justify-center flex-col items-center p-3'>
      <Fade cascade duration={70} className='text-4xl font-bold inline border-b-4 border-b-violet-600 text-white'>
        𝑮𝒆𝒕 𝒊𝒏 𝒕𝒐𝒖𝒄𝒉
      </Fade>
      <div className='border space-y-5 border-cyan-500 rounded-md flex flex-shrink-0 flex-col justify-center md:max-w-[600px] md:w-[600px] h-[500px] max-w-[600px] w-full md:p-12 p-2 '>
        <div className='flex flex-col'>
          <h1 className='font-bold ml-2'>My Email Address:</h1>
          <span className='text-sm ml-4 break-words'>mummah571@gmail.com</span>
          <span className='text-sm ml-4 break-words'>mummatov73@gmail.com</span>
        </div>
        <form className='flex flex-col max-w-[500px] space-y-6 w-full p-2' ref={formRef} onSubmit={sendEmail}>
          <div className='flex justify-center space-y-1 space-x-[-20px]'>
            <input className='border rounded-md bg-transparent border-cyan-600 pl-6 w-[100%] p-[7px]' required onChange={handleInputChange} placeholder='Your name' type="text" name="senderName" value={senderName} />
          </div>
          <div className='flex justify-center space-y-[-2px] space-x-[-20px]'>
            <input className='outline-none border rounded-md bg-transparent border-cyan-600 pl-7 w-[100%] p-[8px]' required onChange={handleInputChange} placeholder='Your email' type="email" name="senderEmail" value={senderEmail} />
          </div>
          <textarea className='outline-none rounded-md border-cyan-600 border h-[150px] bg-transparent p-2' required onChange={handleInputChange} placeholder='Type your message here ...' name="message" value={message} />
          <div className='flex overflow-hidden justify-center'>
            <button  className='flex flex-shrink-0 justify-center outline-none border border-t-gray-100 shadow-2xl shadow-black hover:scale-110 duration-300 border-cyan-600 w-[100px] max-w-[100px] py-3 my-2 rounded-md' type="submit" value="Send">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;

