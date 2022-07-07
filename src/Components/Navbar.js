import React from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className=" flex justify-between px-16 h-20 items-center text-white text-[14px] font-bold uppercase  ">
      <motion.img
        className="h-2/3 cursor-pointer"
        src={logo}
        alt=""
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      />
      <div className=" flex gap-5">
        <span className=" cursor-pointer">Home</span>
        <span className=" cursor-pointer">About</span>
        <span className=" cursor-pointer">couses</span>
        <span className=" cursor-pointer">blogs</span>
      </div>
      <motion.div
        className=" flex gap-5 items-center"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className=" cursor-pointer">login</span>
        <span className=" border-2 px-4 rounded-full cursor-pointer ">
          Sign up
        </span>
      </motion.div>
    </div>
  );
};

export default Navbar;
