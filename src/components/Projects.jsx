import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import mercedes from '/src/assets/projects/mercedes.png';
import weather from '/src/assets/projects/weather.png';
import Trendmedia from '/src/assets/projects/Trendmedia.png'
import { Fade } from "react-awesome-reveal";
import { Blurhash } from 'react-blurhash';

const Projects = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageLoaded2, setImageLoaded2] = useState(false);
  const [imageLoaded3, setImageLoaded3] = useState(false);

  return (
    <main name='projects' className='flex flex-col justify-center items-center first_color lg:h-screen h-full w-full p-3 text-center text-white'>
     <Fade cascade duration={70}>
        <div>
          <Fade cascade duration={70} className='text-4xl font-bold inline border-b-4 border-violet-500'>Projects</Fade>
          <p className='py-6'>These are some of my recent projects</p>
        </div>
      </Fade>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
       <Fade>
          <ProjectCard
            image={Trendmedia}
            imageLoaded={imageLoaded3}
            setImageLoaded={setImageLoaded3}
            title="Social Media Platform"
            liveLink="https://trendmedia.vercel.app/"
            githubLink="https://github.com/Mukhammadqodir05/React-Social-Media-App"
          />
        </Fade>
        <Fade>
          <ProjectCard
            image={mercedes}
            imageLoaded={imageLoaded}
            setImageLoaded={setImageLoaded}
            title="Mercedes-Benz Dashboard"
            liveLink="https://mercedesbenz.vercel.app/"
            githubLink="https://github.com/Muhammadqodir001/MercedesBenzApp"
          />
        </Fade>
        <Fade>
          <ProjectCard
            image={weather}
            imageLoaded={imageLoaded2}
            setImageLoaded={setImageLoaded2}
            title="Weather App"
            liveLink="https://worldwideweathermap.vercel.app/"
            githubLink="https://github.com/Muhammadqodir001/Weather-App"
          />
        </Fade>
      </div>
    </main>
  );
};

const ProjectCard = ({ image, imageLoaded, setImageLoaded, title, liveLink, githubLink }) => {
  return (
    <div className='p-5 gradient-border h-full w-full max-w-[400px] justify-center items-center my_image rounded-2xl'>
      {!imageLoaded && <Blurhash hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" width={350} height={200} />}
      <img
        className="w-full rounded-xl max-w-[450px]"
        src={image}
        onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? 'block' : 'none' }}
        alt={title}
      />
      <h1 className='font-serif  font-bold text-xl mt-3 text-[#f800ba]'>{title}</h1>
      <div className='flex justify-between mt-5'>
        <a href={liveLink} target="_blank" rel="noreferrer">
          See Live <FaExternalLinkAlt className='ml-2' />
        </a>
        <a href={githubLink} target="_blank" rel="noreferrer">
          Github Repo <FaGithub className='ml-2' />
        </a>
      </div>
    </div>
  );
};

export default Projects;


