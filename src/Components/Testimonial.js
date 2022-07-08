import React from "react";
import person from "../assets/person.jpg";
import right from "../assets/right-arrow.png";
import left from "../assets/left-arrow.png";
import { useState } from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  const [slide, setSlide] = useState(1);
  const testimonial = [
    {
      id: 1,
      img: person,
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
      name: "Md. Danish Ansari ",
      position: "Learner, Govt. Employee @UPPCL",
    },
    {
      id: 2,
      img: person,
      desc: "“lit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
      name: "Md. ABC",
      position: "Employee, Govt. Employee @UPPCL",
    },
    {
      id: 3,
      img: person,
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam”",
      name: "Md. Danish Ansari 2",
      position: "Learner, Govt. Employee @UPPCL",
    },
  ];
  return (
    <div className=" px-16 mt-40">
      <div className=" flex items-center">
        <h2 className=" mr-16 text-[#5F72BE] uppercase font-bold ">
          OUR TESTIMONIALS
        </h2>
        <div className=" h-[1px] w-[435px] bg-[#5F72BE] "></div>
      </div>
      <div className=" relative">
        <div className=" relative flex w-[700px] mx-auto overflow-hidden">
          {/* slide 1 */}
          {testimonial.map(
            (t, index) =>
              t.id === slide && (
                <motion.div
                  key={index}
                  className=" min-w-[700px] mx-auto text-center bg-slate-50 pb-5 mt-5 rounded-lg "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    className=" rounded-full mx-auto mt-20"
                    src={t.img}
                    alt=""
                  />
                  <h3 className=" text-[18px] mb-8 mt-16 ">{t.desc}</h3>
                  <h3 className=" text-[#9921e8] font-bold ">{t.name}</h3>
                  <p className=" text-[#9921e8]">{t.position}</p>
                </motion.div>
              )
          )}
        </div>
        <div
          onClick={() => {
            if (slide < testimonial.length) {
              setSlide(slide + 1);
            } else {
              setSlide(1);
            }
          }}
          className=" h-full w-8 flex items-center cursor-pointer absolute right-5 top-[0%]"
        >
          <img className=" ml-3 " src={right} alt="" />
        </div>
        <div
          onClick={() => {
            if (slide > 1) {
              setSlide(slide - 1);
            } else {
              setSlide(testimonial.length);
            }
          }}
          className=" h-full w-8 flex items-center cursor-pointer absolute left-5 top-[0%]"
        >
          <img className=" ml-4 " src={left} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
