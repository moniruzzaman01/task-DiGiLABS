import React from "react";
import img from "../assets/Rectangle 5.png";
import right from "../assets/right-arrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
      <div className=" relative ">
        <div className=" flex gap-8 items-center overflow-x-hidden h-[350px] mr-16">
          {[1, 2, 3, 4].map((a, index) => (
            <div
              key={index}
              className=" h-[312px] min-w-[282px] rounded-lg shadow-xl "
            >
              <img src={img} alt="" />
              <div className=" px-5 ">
                <p className=" font-bold ">
                  Learn SCRUM: The Complete Beginner Course
                </p>
                <span className=" text-[14px] my-4 ">Samay Jain, Ex-KPMG</span>
                <div className=" text-[14px] my-4 ">
                  <span className=" mr-2">5</span>
                  <span className=" text-[#5f72be]">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                </div>
                <span className=" inline-block border-2 border-[#5f72be] px-5 py-1 font-bold rounded-full text-[#5f72be] uppercase cursor-pointer">
                  enroll now
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className=" h-10 w-10 rounded-full flex items-center cursor-pointer absolute right-5 top-[50%]">
          <img className=" ml-4 " src={right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Courses;
