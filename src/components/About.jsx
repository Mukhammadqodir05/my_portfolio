import React from 'react';
import me3 from '/src/assets/me3.jpg'

const About = () => {

  return (
    <div
      name='about'
      className="main second_color w-full mx-auto h-screen flex py-10 md:flex-row flex-col items-center  ">
      
    <div className=" flex-1 flex  justify-center  h-full">
        <div className=' h-full sm:w-10/12  md:w-80 w-11/12 max-w-sm'>
          <img className=" image py-10 w-[90%] image md:w-96 ml-6 " src={me3} />
        </div>
      </div>
      
    
      <div
       className='flex-1 md:mt-[-100px] md:h-[450px]'>
   
        <div className='py-10 text-center'>
          <h1 className='md:mt-[-20px] leading-10 md:text-5xl text-3xl  text-white font-bold'>
          <a className=" md:ml-[-300px] text-4xl inline border-b-4 border-orange-500 font-semibold">
          About <span className="text-cyan-600">Me</span>
        </a>
          </h1>
        </div>
    

        <div className='md:ml-[40px] text-justify md:text-base leading-7 mx-auto w-[300px] md:w-full md:px-0  grid sm:grid-cols-2 gap-5 '>
          <p className='text-slate-100'>
          Hi there, my name is Muhammadqodir. I'm a skilled software developer with a passion for creating innovative solutions that make a positive impact on people's lives. With learning all the software skills I have as a self-taught, I have developed a deep understanding of what it takes to deliver high - quality software that meets the unique needs of each project. Whether you're an individual or a large corporation, I am committed to providing you with the best possible service and support. From initial consultation to final delivery I will work closely with you to ensure that your software meets your exact specifications and exceeds your expectations. So why wait? Contact me today to discuss your software needs and discover how I can help you achieve your goals 🤝
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;