import React, { useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

function LogoAnimation(props) {
  
  useEffect(() => {
    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      { opacity: 0, display: "none", duration: 1.5, delay: 3.5 }
    );
    gsap.fromTo(
      ".logo-name",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, delay: 1.5 }
    );
  }, []);

  return (
    <main className="flex  flex-col justify-center items-center text-center h-screen w-full overflow-hidden">
      <div className="container_color flex flex-col space-y-7 h-screen w-full justify-center items-center">
          <h1 className="text-2xl">𝚂𝚊𝚢 𝚑𝚎𝚕𝚕𝚘!</h1>
          <input className="border-b bg-transparent outline-none pl-10 pb-1"
              placeholder=" typing is optional!"/>
               
               <Link to='/main'>
                    <button className="button p-3 w-[100px] rounded-md hover:scale-90 duration-300">
                      click me
                    </button>
               </Link>
        
     </div>

      <div className="loading-page">
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M22.7 33.4c13.5-4.1 28.1 1.1 35.9 12.9L224 294.3 389.4 46.2c7.8-11.7 22.4-17 35.9-12.9S448 49.9 448 64V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V169.7L250.6 369.8c-5.9 8.9-15.9 14.2-26.6 14.2s-20.7-5.3-26.6-14.2L64 169.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 49.9 9.2 37.5 22.7 33.4z"/>
          </svg>

          <div class="name-container ">
             <div class="logo-name mt-8 uppercase font-bold text-white text-xl">&lt;𝐌&gt;𝑴𝒖𝒉𝒂𝒎𝒎𝒂𝒅𝒒𝒐𝒅𝒊𝒓&lt;/ 𝐌&gt;</div>
          </div>
        </div>
    </main>
  );
}

export default LogoAnimation;