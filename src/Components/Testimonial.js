import React from "react";
import person from "../assets/person.jpg";
import right from "../assets/right-arrow.png";
import left from "../assets/left-arrow.png";

const Testimonial = () => {
  return (
    <div className=" px-16 mt-40">
      <div className=" flex items-center">
        <h2 className=" mr-16 text-[#5F72BE] uppercase font-bold ">
          OUR TESTIMONIALS
        </h2>
        <div className=" h-[1px] w-[435px] bg-[#5F72BE] "></div>
      </div>
      <div className=" relative">
        <div className=" w-[700px] mx-auto text-center ">
          <img className=" rounded-full mx-auto mt-20" src={person} alt="" />
          <h3 className=" text-[18px] mb-8 mt-16 ">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.”
          </h3>
          <h3 className=" text-[#9921e8] font-bold ">Md. Danish Ansari</h3>
          <p className=" text-[#9921e8]">Learner, Govt. Employee @UPPCL</p>
        </div>

        <div className=" h-10 w-10 rounded-full flex items-center cursor-pointer absolute right-5 top-[50%]">
          <img className=" ml-4 " src={right} alt="" />
        </div>
        <div className=" h-10 w-10 rounded-full flex items-center cursor-pointer absolute left-5 top-[50%]">
          <img className=" ml-4 " src={left} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
