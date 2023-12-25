import { Social_Icons } from "../constant/index.tsx";
import React from "react";

const Footer = () => {
  return (
    <div className=" container mx-auto 2xl pt-[50px] pb-8 ">
      <div className="pb-10 justify-center flex ">
        {Social_Icons.map((social) => {
          return (
            <a
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              key={social.alt}
              className="z-[1]"
            >
              <img
                src={social.image}
                height="30"
                width="30"
                className="mx-5"
                alt={social.alt}
              />
            </a>
          );
        })}
      </div>
      <p className="text-gray-300 text-center text-sm">
        This site based from <a className="hover:text-gray-500" href="https://github.com/ibrahimmemonn/Developer-Portfolio" target="_blank" rel="nofollow">github.com/ibrahimmemonn/Developer-Portfolio</a>
      </p>
    </div>
  );
};

export default Footer;
