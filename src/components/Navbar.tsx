"use client";

import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-[100%] w-auto flex flex-row items-center p-3"
        >
          <img
            src="/Logo.svg"
            alt="logo"
            className="cursor-pointer hover:animate-slowspin h-[100%]"
          />
        </a>

        <div className="flex flex-row gap-5">
          <div
            onClick={() => window.open("mailto:cemal3635@gmail.com")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
