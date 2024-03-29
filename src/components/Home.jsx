import React from 'react';
import Snap from '/src/assets/Snap.png';
import { Link } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';
import { JackInTheBox } from 'react-awesome-reveal';
import { Blurhash } from 'react-blurhash';
import UseImageLoader from './useImageLoader';

const Home = () => {
  const imageLoaded = UseImageLoader(Snap);

  return (
    <main className='first_color flex justify-center items-center h-screen w-full pt-36 lg:pt-10 p-3'>
      <div className='flex md:px-2 lg:px-4 space-y-10 flex-col items-center text-center justify-center lg:grid lg:grid-cols-2 w-full'>
      <Fade cascade>
        <ul className='flex flex-col justify-center items-center'>
          <Fade cascade duration={70} className='hi flex font-extrabold md:text-7xl lg:text-7xl text-[#fff] pr-2 md:pl-[65px]'>𝑯𝒊 𝒕𝒉𝒆𝒓𝒆👋🏻</Fade>
          <div className='flex justify-center items-center flex-col mt-2 md:pr-4'>
            <span className='span text-2xl md:text-3xl text-start md:pr-5 pr-2 font-extrabold'>𝐈'𝐦 𝐌𝐮𝐤𝐡𝐚𝐦𝐦𝐚𝐝𝐪𝐨𝐝𝐢𝐫</span>
          </div>
            <div className='mt-2'>
              <span className='span md:text-2xl text-start font-bold text-violet-500'>𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 Based In Uzbekistan</span>
            </div>
          <div className='flex space-x-16 mt-14 md:mr-10'>
            <Link to='about' spy={true} smooth={true} duration={400}>
              <button className='h1 text-white rounded-md border p-2 w-[120px]'>𝑨𝒃𝒐𝒖𝒕 𝒎𝒆✔️</button>
            </Link>
            <Link to='projects' spy={true} smooth={true} offset={-30} duration={400}>
              <button className='h1 text-white rounded-md border p-2 w-[120px]'>𝑷𝒓𝒐𝒋𝒆𝒄𝒕𝒔 ✔️</button>
            </Link>
          </div>
        </ul>
      </Fade>

        <JackInTheBox duration={1200}>
         <div className='flex justify-center'>
           <div style={{ display: imageLoaded ? 'none': 'inline'}}>
              <Blurhash hash="egC5D{JA=kNd-GsroLj?o1ay$;a#WSoMR~s=jtf6j[j@$pWWWTa}WT" width={400} height={400}  punch={1}/>
            </div>
              <img
                className='img rounded-md border-gray-300 lg:max-w-[510px] md:max-w-[500px]'
                src={Snap}
                style={{ display: !imageLoaded ? 'none': 'inline'}}
                alt=''
              />
          </div>
        </JackInTheBox>
      </div>
    </main>
  );
};

export default Home;


