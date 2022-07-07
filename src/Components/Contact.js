import React from "react";

const Contact = () => {
  return (
    <div className=" h-[120px] mx-16 rounded-2xl p-8 flex justify-between items-center bg-[#5F72BE] text-white mt-[150px] ">
      <div>
        <p className=" text-[18px] font-bold mb-3 ">Email Us</p>
        <span>
          Connect with us in case of any queries, complaints or feedbacks...
        </span>
      </div>
      <button className=" bg-[#2D81F7] px-10 py-2 rounded-lg uppercase font-bold ">
        Contact us
      </button>
    </div>
  );
};

export default Contact;
