import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-5xl sm:text-6xl pt-[35px]">
        EXPERIENCE
      </h1>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">Pozitifweb /</span> Fullstack Web
            Developer
          </p>
          <p className="text-gray-300">
            JUN 2022 - APR 2023, On-Site <br />
            OCT 2021 - JUN 2022, On-Site Internship{" "}
          </p>
        </div>
        <p className="text-gray-300 pt-5">
          Pozitifweb is a company that provides corporate website (with content
          management and e-commerce panel), seo, graphic design, social media
          management and corporate consultancy services to its customers.
          <br />
          <br />
          My role at Pozitifweb was to create a website in line with the
          clients' requests. in total, I was responsible for publishing more
          than 20 sites (including Seo, Backend and Frontend work).
        </p>
        <div className="flex-row flex flex-wrap ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Asp.Net Core
          </div>
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Vue
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            MSSQL
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Css
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
