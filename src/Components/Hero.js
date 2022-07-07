import React from "react";
import "./Hero.css";
import Navbar from "./Navbar";
import img1 from "../assets/Ellipse 1.png";
import img2 from "../assets/Ellipse 2.png";
import img3 from "../assets/Ellipse 3.png";
import img4 from "../assets/Ellipse 4.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" hero h-[704px] ">
      <Navbar />
      <div className=" flex h-full pl-16 ">
        <div className=" flex-1 mt-32">
          <div>
            <motion.p
              className=" text-[14px] text-[#9921eb] uppercase bg-white px-3 rounded-full inline-block "
              initial={{ y: 60 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              #MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY
            </motion.p>
            <h2 className=" text-white capitalize text-[32px] my-8 ">
              Unleash Your SCRUM Skills,Grab More Attention To Résumé
            </h2>
            <motion.span
              className=" border-2 px-5 py-1 font-bold rounded-full text-white uppercase cursor-pointer inline-block "
              initial={{ y: -60 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              enroll now
            </motion.span>
          </div>
          <div className=" mt-16 text-center ">
            <p className=" text-[12px] text-white  ">
              10% OFF on all courses* | Offer Valid For
            </p>
            <div className=" h-[1px] w-8 bg-white mx-auto mt-3 mb-4 "></div>
            <div className=" flex gap-8 justify-center ">
              <motion.div
                className=" h-[88px] w-[88px] bg-white bg-opacity-10 rounded-lg text-white "
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className=" text-[52px] font-bold ">02</h1>
                <span className=" text-[14px] block mt-[-15px] ">Hrs.</span>
              </motion.div>
              <div className=" h-[88px] w-[88px] bg-white bg-opacity-10 rounded-lg text-white ">
                <h1 className=" text-[52px] font-bold ">58</h1>
                <span className=" text-[14px] block mt-[-15px] ">Mins.</span>
              </div>
              <motion.div
                className=" h-[88px] w-[88px] bg-white bg-opacity-10 rounded-lg text-white "
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className=" text-[52px] font-bold ">42</h1>
                <span className=" text-[14px] block mt-[-15px] ">Secs.</span>
              </motion.div>
            </div>
          </div>
        </div>
        <div className=" flex flex-1 relative">
          <div className=" absolute bottom-28">
            <motion.img
              className=" h-[88px] ml-56"
              src={img4}
              alt=""
              initial={{ x: -120, y: 150 }}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <img className=" h-[128px] my-10 ml-20" src={img3} alt="" />
            <motion.img
              className=" h-[228px] ml-[-45px]"
              src={img2}
              alt=""
              initial={{ x: 70, y: -200 }}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <img
              className=" h-[586px] absolute bottom-0 right-0"
              src={img1}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
