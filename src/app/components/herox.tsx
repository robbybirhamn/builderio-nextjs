
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Herox() {
    return (
    <>
      <div className="hero">
        <img src="./images/line.svg" alt="Decorative line" className="absolute inset-0 w-full -z-10" />
        <section className="hero_container section" data-color="#231f20">
          <div className="hero-content-wrapper">
            <img src="./images/hangry-logo.png" alt="Hangry Logo" className="w-[536px]" />
  
            <div className="flex relative space-x-6 w-[600px] justify-between">
              <img src="./images/Asset-27.png" alt="Icon" className=" w-[72px] h-[72px]" />
              <img src="./images/red-arrow.png" alt="Red Arrow" className="animate__animated animate__zoomIn w-[72px]" />
            </div>
  
            <div className="animate__animated animate__zoomIn flex justify-center items-center flex-col">
              <img src="./images/editorchoice.svg" alt="Editor's Choice" className="w-[198px] -mt-[85px] mb-[22px]" />
  
              <h1 className="text-[3.6em] font-boldish text-center leading-[112%] w-[820px]">
                An ordering app to empower restaurants
              </h1>
              <h3 className="text-[1.4em] font-boldish tracking-[2px]">Designed by a restauranteur</h3>
              <div className="font-hangrytypewriter text-center">
                ✔ Cancel 3rd Party Fees <br />
                ✔ Automated Marketing <br />
                ✔ Direct-to-Customer <br />
              </div>
              <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="btn mt-[48px]">
                Start today - It's Free!
              </a>
            </div>
  
            <img src="./images/Hangry-Peace-sign.png" alt="Peace Sign" className="animate__animated animate__zoomIn w-[160px] absolute -left-[56px] top-[400px]" />
            <img src="./images/Asset-25.png" alt="Decoration" className="animate__animated animate__zoomIn w-[198px] absolute -right-[56px] top-[400px]" />
          </div>
        </section>
      </div></>
    );
  }
  