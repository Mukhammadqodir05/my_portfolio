import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Fade } from "react-awesome-reveal";

import webdev from '/src/assets/webdev.jpg'
import webDesign from '/src/assets/webDesign.jpg'
import mobile from '/src/assets/mobile.png'
import freelance from '/src/assets/freelance.jpg'

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
  
const Services = () => {

  return (
    <main name='services' className='flex flex-col overflow-hidden  items-center justify-center w-full h-screen space-y-[-50px] pb-14 pt-10 first_color p-3'>
       <Fade duration={2000}>
       
        <div className='flex flex-col space-y-1'>
            <h1 className='text-4xl absloute font-bold inline border-b-4 border-b-violet-600 text-white'>
                  𝑴𝒚 𝑺𝒆𝒓𝒗𝒊𝒄𝒆𝒔
            </h1>
            <p>// 𝐈 𝐜𝐚𝐧 𝐩𝐫𝐨𝐯𝐢𝐝𝐞 𝐭𝐡𝐞𝐬𝐞 𝐬𝐞𝐫𝐯𝐢𝐜𝐞𝐬</p>
        </div>
  
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          loop:true
        }}
        pagination={{
          type: 'fraction',
        }}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper">

   
       <div className='flex  pt-40 w-full flex-col lg:grid lg:grid-cols-4 lg:space-x-10 lg:w-full space-y-7 md:space-y-0 p-40 '>
         
          <SwiperSlide>
            <div className='flex border-cyan-500 flex-col items-center space-y-5 h-[420px] w-full border p-8 rounded-md max-w-[400px]'>
              <img className='rounded-md shadow-xl shadow-[#000000] h-[80px] w-[100px]' src={webdev} />
               <div className='flex flex-col space-y-5'>
                   <h1 className='  text-center font-extrabold text-2xl text-shadow'>𝑾𝒆𝒃 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒎𝒆𝒏𝒕</h1>
                    <span className='pl-2'>I specialize in creating stunning and functional websites that
                        are tailored to meet your unique needs. I work closely with you to understand your requirements 
                        and deliver a website that exceeds your expectations. 
                        Contact us today to learn more about our web development services!
                    </span>
               </div>
           </div>
          </SwiperSlide> 
            
          <SwiperSlide>
           <div className='flex border-cyan-500 flex-col items-center h-[420px] space-y-5 max-w-[400px] w-full border p-8 rounded-md  '>
              <img className='rounded-md shadow-xl shadow-[#000000] w-full h-[80px] max-w-[100px]' src={webDesign} />
               <div className='flex flex-col space-y-5'>
                   <h1 className=' text-center font-extrabold text-3xl text-shadow'>𝑾𝒆𝒃 𝑫𝒆𝒔𝒊𝒈𝒏</h1>
                   <span className='pl-2'> In the web design service, I'm dedicated to bringing your
                           dream design to life, whether it's starting from scratch or 
                           redesigning your existing site. My collaborative approach ensures
                           that the end result exceeds your expectations. 
                    </span>
               </div>
           </div>
          </SwiperSlide>
          
          <SwiperSlide>
           <div className='flex flex-col border-cyan-500 items-center h-[420px] space-y-5 max-w-[400px] w-full border p-8 rounded-md  '>
              <img className='rounded-md w-full shadow-xl shadow-[#000000] text-white max-w-[100px]' src={mobile} />
               <div className='flex flex-col space-y-5'>
                   <h1 className=' text-center font-extrabold text-3xl text-shadow'>𝑴𝒐𝒃𝒊𝒍𝒆 𝑫𝒆𝒔𝒊𝒈𝒏</h1>
                   <span className='pl-2'>Need a mobile design service that takes your website
                          or app to the next level? Look no further! I'm here to help you achieve your ideal designs.
                          I'll create a custom design that reflects your brand and engages your audience. So why wait? 
                          Let me bring your mobile design vision to life today!
                    </span>
               </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
           <div className='flex border-cyan-500 flex-col items-center space-y-5 h-[420px] w-full border p-8 rounded-md max-w-[400px]'>
              <img className='rounded-md w-full shadow-xl shadow-[#000000] max-h-[80px] max-w-[100px]' src={freelance} />
               <div className='flex flex-col space-y-5'>
                   <h1 className=' text-center font-extrabold text-3xl text-shadow'>𝑭𝒓𝒆𝒆𝒍𝒂𝒏𝒄𝒊𝒏𝒈</h1>
                   <span className='pl-2'>I am excited to offer my freelancing services to new clients on a daily basis!
                       I have recently created accounts on Upwork and Fiverr to explore the world
                        of freelancing and bring my expertise to clients across the globe. 
                       Let's work together and create something amazing!
                    </span>
               </div>
           </div>
          </SwiperSlide>
            </div>
      </Swiper>
       </Fade>                                                 
    </main>
  )
}
export default Services 