import React from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className=" flex justify-between px-16 h-20 items-center text-white text-[14px] font-bold uppercase ">
      <motion.img
        className="h-2/3"
        src={logo}
        alt=""
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      />
      <div className=" flex gap-5">
        <span>Home</span>
        <span>About</span>
        <span>couses</span>
        <span>blogs</span>
      </div>
      <motion.div
        className=" flex gap-5 items-center"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span>login</span>
        <span className=" border-2 px-4 rounded-full ">Sign up</span>
      </motion.div>
    </div>
  );
};

export default Navbar;
