import React from 'react';
import SkillData from '../SkillDetails';
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  return (
    <main name='skills' className='main flex items-center pb-10 justify-center w-full h-full text-white p-3'>
      <div className="lg:max-w-[1400px] py-8 items-center text-center justify-center w-full h-full">
        <div className='py-10'>
          <Fade cascade duration={70} className='text-4xl font-bold inline border-b-4 border-violet-500'>💪🏻𝑺𝒌𝒊𝒍𝒍𝒔💪🏻</Fade>
        </div>

        <div className='w-full h-full justify-center items-center md:grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] flex flex-col gap-6 text-center text-cyan-300'>
          {SkillData.map((data) => (
            <Fade key={data.id} duration={1000} className='rounded-xl hover:scale-90 w-full flex flex-col justify-center items-center h-[200px] max-w-[400px] max-h-[400px] duration-500 shadow-md shadow-[#69a5ee]'>
              <div> 
                <img className='max-w-[120px] rounded-xl' src={data.SkillImage} alt={data.SkillName} />
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
