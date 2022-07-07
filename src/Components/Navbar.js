import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className=" flex justify-between px-16 h-20 items-center text-white uppercase ">
      <img className="h-2/3" src={logo} alt="" />
      <div className=" flex gap-5">
        <span>Home</span>
        <span>About</span>
        <span>couses</span>
        <span>blogs</span>
      </div>
      <div className=" flex gap-5">
        <span>login</span>
        <span className=" border-2 px-3 rounded-full ">Sign up</span>
      </div>
    </div>
  );
};

export default Navbar;
