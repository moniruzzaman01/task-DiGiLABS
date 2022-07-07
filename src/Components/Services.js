import React from "react";
import img1 from "../assets/Vector.png";
import img2 from "../assets/Vector (1).png";
import img3 from "../assets/Group.png";
import img4 from "../assets/fa-solid_chalkboard-teacher.png";
import img5 from "../assets/carbon_view-filled.png";

const Services = () => {
  return (
    <div className=" flex justify-between items-center px-16 ">
      <div className=" flex-1">
        <h2 className=" text-[#9921eb] text-[32px] font-bold ">
          Start learning with us right now!
        </h2>
        <p className=" text-[18px] mt-4 mb-8 ">
          Choose from 100+ online video courses with new updates.
        </p>
        <span className=" border-2 border-[#5F72BE] px-5 py-1 font-bold rounded-full text-[#5F72BE] uppercase cursor-pointer ">
          enroll now
        </span>
      </div>
      <div className=" flex-1 grid grid-cols-2 gap-16">
        {/* service 1 */}
        <div className=" flex items-center gap-8 w-[285px] ">
          <span className=" text-[#ffad3b] ">Live Exams</span>
          <div className=" h-[200px] min-w-[200px] bg-[#ffad3b] bg-opacity-10 rounded-full flex justify-center items-center ">
            <img src={img1} alt="" />
          </div>
        </div>
        {/* service 2 */}
        <div className=" flex items-center gap-8 w-[285px] translate-y-[50%] ">
          <span className=" text-[#EB5757] ">1000+ Lessons</span>
          <div className=" h-[200px] min-w-[200px] bg-[#EB5757] bg-opacity-10 rounded-full flex justify-center items-center ">
            <img src={img2} alt="" />
          </div>
        </div>
        {/* service 3 */}
        <div className=" flex items-center gap-8 w-[285px] ">
          <span className=" text-[#2D81F7] ">Live Classes</span>
          <div className=" h-[200px] min-w-[200px] bg-[#2D81F7] bg-opacity-10 rounded-full flex justify-center items-center ">
            <img src={img3} alt="" />
          </div>
        </div>
        {/* service 4 */}
        <div className=" flex items-center gap-8 w-[285px] translate-y-[50%] ">
          <span className=" text-[#08BD80] ">1000+ Lessons</span>
          <div className=" h-[200px] min-w-[200px] bg-[#08BD80] bg-opacity-10 rounded-full flex justify-center items-center ">
            <img src={img4} alt="" />
          </div>
        </div>
        {/* service 5 */}
        <div className=" flex items-center gap-8 w-[285px] ">
          <span className=" text-[#FE5702] ">100 K+ Views</span>
          <div className=" h-[200px] min-w-[200px] bg-[#FE5702] bg-opacity-10 rounded-full flex justify-center items-center ">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
