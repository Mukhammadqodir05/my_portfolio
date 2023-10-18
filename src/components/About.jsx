import React, { useState, useEffect } from 'react';
import me3 from '/src/assets/me3.jpg'


const About = () => {

    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [message, setMessage] = useState('');

     useEffect(() => {
      if (isButtonClicked) {
        typeWriter(" Hi there, my name is Muhammadqodir. I'm a skilled software developer with a passion for creating innovative solutions that make a positive impact on people's lives. With learning all the software skills I have as a self-taught, I have developed a deep understanding of what it takes to deliver high - quality software that meets the unique needs of each project. Whether you're an individual or a large corporation, I am committed to providing you with the best possible service and support. From initial consultation to final delivery I will work closely with you to ensure that your software meets your exact specifications and exceeds your expectations. So why wait? Contact me today to discuss your software needs and discover how I can help you achieve your goals 🤝 ");
      }
    }, [isButtonClicked]);

    const typeWriter = (text) => {
      let i = 0;
      const speed = 40;
      const type = () => {
        if (i < text.length) {
          setMessage((prevMessage) => prevMessage + text.charAt(i));
          i++;
          setTimeout(type, speed);
        }
      };
      type();
    };

  return (
    <div
      name='about'
      className="w-full mx-auto min-h-screen flex py-10 md:flex-row flex-col items-center bg-[#7b617e]">
         
       
      <div
         
      className=" flex-1 flex items-center justify-center object-cover h-full">
        <div className=' h-full sm:w-10/12  md:w-72 w-11/12 max-w-sm'>
          <img className=" image py-10 w-[90%] image md:w-96 ml-6 " src={me3} />
        </div>
      </div>
      
       
      <div>
        <button
          className='hover:scale-110 duration-500 md:mt-[500px] md:ml-[-413px] px-8 py-3  shadow-violet-400 flex items-center rounded-md shadow-md justify-center text-white border-2 hover:bg-violet-600 hover:border-blue-600'
          onClick={() => setIsButtonClicked(true)}>
            Read
        </button>
     </div>

     
      <div
       className='flex-1 md:h-[450px]'>
   
        <div className='py-10 text-center'>
          <h1 className='md:mt-[-20px] leading-10 md:text-5xl text-3xl  text-white font-bold'>
          <a className=" md:ml-[-300px] text-4xl inline border-b-4 border-orange-500 font-semibold">
          About <span className="text-cyan-600">Me</span>
        </a>
          </h1>
        </div>
    

        <div className='md:ml-[40px] text-justify md:text-base leading-7 mx-auto w-[300px] md:w-full md:px-0  grid sm:grid-cols-2 gap-5 '>
          <p className='text-slate-100'>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default About;