import React from "react";
import call from "../assets/call.png";
import message from "../assets/message.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import browser from "../assets/browser.png";
import figma from "../assets/figma.png";
import whatsApp from "../assets/whats-app.png";

const Footer = () => {
  return (
    <div className=" bg-[#27282b] pt-12 pb-10 mt-[150px] ">
      <div className=" flex px-[150px] gap-[100px] mb-20 ">
        <div className=" flex-1">
          <h1 className=" text-[24px] font-bold text-white  ">Logo</h1>
          <p className=" text-[14px] text-[#8c8c8c] mt-3 mb-6 ">
            We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididun.
          </p>
          <div className=" flex gap-20">
            <div className=" flex gap-5">
              <img src={call} alt="" />
              <div>
                <p className=" text-[12px] text-[#8c8c8c] ">Have a question?</p>
                <h2 className=" text-white font-bold ">310-437-2766</h2>
              </div>
            </div>
            <div className=" flex gap-5">
              <img src={message} alt="" />
              <div>
                <p className=" text-[12px] text-[#8c8c8c] ">Contact us at</p>
                <h2 className=" text-white font-bold ">unreal@outlook.com</h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-1">
          <h1 className=" text-[24px] font-bold text-white  ">Newsletter</h1>
          <p className=" text-[14px] text-[#8c8c8c] mt-3 mb-6 ">
            Be the first one to know about discounts, offers and events weekly
            in your mailbox. Unsubscribe whenever you like with one click.
          </p>
          <div className=" relative">
            <div className=" flex items-center">
              <input
                className=" px-12 py-4 h-12 rounded-full w-full bg-[#343538] "
                type="email"
                placeholder="Enter your email"
              />
              <button className=" absolute right-2 py-1 px-5 rounded-full bg-[#537ce6] text-white font-bold ">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-[#8c8c8c] text-[14px] flex justify-between  px-[150px]">
        <span className=" cursor-pointer">About us</span>
        <span className=" cursor-pointer">Jobs</span>
        <span className=" cursor-pointer">Blog</span>
        <span className=" cursor-pointer">Press</span>
        <span className=" cursor-pointer">FAQ</span>
        <span className=" cursor-pointer">Careers</span>
        <span className=" cursor-pointer">Contact</span>
        <span className=" cursor-pointer">Privacy policy</span>
        <span className=" cursor-pointer">Sitemap</span>
        <span className=" cursor-pointer">Terms of Use</span>
      </div>
      <div className=" flex justify-between items-center px-[150px] mt-12 ">
        <div className=" flex gap-3">
          <img className=" cursor-pointer" src={facebook} alt="" />
          <img className=" cursor-pointer" src={youtube} alt="" />
          <img className=" cursor-pointer" src={browser} alt="" />
          <img className=" cursor-pointer" src={figma} alt="" />
          <img className=" cursor-pointer" src={whatsApp} alt="" />
        </div>
        <p className=" text-[14px] text-[#8c8c8c] ">
          © 2000-2021, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
