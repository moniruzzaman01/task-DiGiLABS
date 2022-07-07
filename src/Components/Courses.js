import React from "react";
import img from "../assets/Rectangle 5.png";
import right from "../assets/right-arrow.png";

const Courses = () => {
  return (
    <div className=" mt-[95px] px-16 mb-[100px]">
      <p className=" text-[18px] font-bold text-black mb-4 ">
        A broad range of courses
      </p>
      <p className="  text-[18px] text-black mb-16 ">
        Choose from 100+ online video courses with new additions published every
        month
      </p>
      <div className=" flex gap-8 items-center">
        {[1, 2, 3, 4].map((a) => (
          <div className=" h-[312px] w-[282px] rounded-lg shadow-xl ">
            <img src={img} alt="" />
            <div className=" px-5 ">
              <p className=" font-bold ">
                Learn SCRUM: The Complete Beginner Course
              </p>
              <span className=" text-[14px] my-4 ">Samay Jain, Ex-KPMG</span>
              <div className=" text-[14px] my-4 ">
                <span>4.5</span>
                <span></span>
              </div>
              <span className=" inline-block border-2 border-[#5f72be] px-5 py-1 font-bold rounded-full text-[#5f72be] uppercase cursor-pointer">
                enroll now
              </span>
            </div>
          </div>
        ))}
        <div className=" h-10 w-10 rounded-full flex items-center cursor-pointer">
          <img className=" ml-4" src={right} alt="" />
          {/* <p className="text-xl text-center leading-8 font-bold ">{">"}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Courses;
