import React from 'react';

import me4 from '/src/assets/me4.jpg'


const Home = () => {

  return (
    <main name='home'className=' first_color  h-screen flex justify-center items-center bg-gray-200'>
     
         <div className='absolute md:mt-[100px] md:ml-[500px]'>
            <img className='my_image h-[500px]  w-[400px] object-cover rounded-tl-2xl rounded-br-2xl' src={me4} alt="Professional-looking image" />
        </div>

   

    </main>
  );
};

export default Home;

