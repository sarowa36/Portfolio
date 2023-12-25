import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-5xl sm:text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl">
        <div className="text-gray-300 text-center">
        I cannot share my finished projects because I have a confidentiality agreement. I can share only my reference projects. You can find code of these project on my github.
        </div>
        <div className="flex flex-wrap mt-7">
          <a
            href="https://ecommerce.sarowa36.com.tr"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex flex-col md:flex-row mb-5">
              <img
                src="/ecommerce.png"
                className="h-[250px] grow-0 shrink-0 basis-[300px] duration-[3s] object-none object-top hover:object-bottom hover_scroller"
                alt="WebHR Project"
              />
              <div className="p-3 w-fit">
                <p className="text-white font-semibold text-xl">Ecommerce</p>
                <p className="text-gray-400 text-[16px]">
                Ecommerce website with Asp.net Core and Vue. A great example of innovative design and clean code. <br /> Im already working on.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://videosite.sarowa36.com.tr"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex flex-col md:flex-row mb-5">
              <img
                src="/videosite.png"
                className="h-[250px] grow-0 shrink-0 basis-[300px] duration-[3s] object-none object-top hover:object-bottom hover_scroller"
                alt="WebHR Project"
              />
              <div className="p-3 w-fit">
                <p className="text-white font-semibold text-xl">Videosite</p>
                <p className="text-gray-400 text-[16px]">
                 It's a site for sharing movies. I made this site for fun, nothing serious. No longer support and development.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
