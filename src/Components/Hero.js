import React from "react";
import "./Hero.css";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className=" hero h-[704px] ">
      <Navbar />
      <div className=" flex h-full mt-32 px-16 ">
        <div className=" flex-1">
          <div>
            <p className=" text-[14px] text-[#9921eb] uppercase bg-white px-3 rounded-full inline-block ">
              #MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY
            </p>
            <h2 className=" text-white capitalize text-[32px] my-8 ">
              Unleash Your SCRUM Skills,Grab More Attention To Résumé
            </h2>
            <span className=" border-2 px-5 py-1 font-bold rounded-full text-white uppercase ">
              enroll now
            </span>
          </div>
          <div className=" mt-16 text-center ">
            <p className=" text-[12px] text-white  ">
              10% OFF on all courses* | Offer Valid For
            </p>
            <div className=" h-[1px] w-8 bg-white mx-auto mt-3 mb-4 "></div>
            <div className=" flex gap-8 justify-center ">
              <div className=" h-[88px] w-[88px] bg-white bg-opacity-10 rounded-lg text-white ">
                <h1 className=" text-[52px] font-bold ">02</h1>
                <span className=" text-[14px] block mt-[-15px] ">Hrs.</span>
              </div>
              <div className=" h-[88px] w-[88px] bg-white bg-opacity-10 rounded-lg text-white ">
                <h1 className=" text-[52px] font-bold ">58</h1>
                <span className=" text-[14px] block mt-[-15px] ">Mins.</span>
              </div>
              <div className=" h-[88px] w-[88px] bg-white bg-opacity-10 rounded-lg text-white ">
                <h1 className=" text-[52px] font-bold ">42</h1>
                <span className=" text-[14px] block mt-[-15px] ">Secs.</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-1">{/* image section */}</div>
      </div>
    </div>
  );
};

export default Hero;
