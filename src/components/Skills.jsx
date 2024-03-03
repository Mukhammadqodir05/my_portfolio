import React, { useState, useEffect } from 'react';
import SkillData from '../SkillDetails';
import { Fade } from "react-awesome-reveal";
import { Blurhash } from 'react-blurhash';

const Skills = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const images = SkillData.map(data => data.SkillImage);
    const imagePromises = images.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setImageLoaded(true);
    });
  }, []);

  return (
    <main name='skills' className='main bg-black bg-opacity-60 flex items-center pb-10 justify-center w-full h-full text-white p-3'>
      <div className="lg:max-w-[1400px] py-8 items-center text-center justify-center w-full h-full">
        <div className='py-10'>
          <Fade cascade duration={70} className='text-4xl font-bold inline border-b-4 border-violet-500'>💪🏻𝑺𝒌𝒊𝒍𝒍𝒔💪🏻</Fade>
        </div>

        <div className='w-full h-full justify-center items-center md:grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] flex flex-col gap-6 text-center text-cyan-300'>
          {SkillData.map((data) => (
            <Fade key={data.id} duration={1000} className='rounded-xl hover:scale-90 w-full flex flex-col justify-center items-center h-[200px] max-w-[400px] max-h-[400px] duration-500 shadow-md shadow-[#69a5ee]'>
              <div> 
                {imageLoaded ? (
                  <img className='max-w-[120px] rounded-xl' src={data.SkillImage} alt={data.SkillName} />
                ) : (
                  <Blurhash hash="e93n9tkCL#ayfPkCVYaekWfQL#aeo~f6pJaxu5fQVYkCQmkCuPkCQl" width={120} height={120} punch={1} />
                )}
                <p className='my-4'>{data.SkillName}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Skills;

