import React from "react";
import Fade from "react-reveal/Fade";
import cv from "../assets/cv.pdf";

import "./skills.css";

const Skills = () => {
  return (
    <>
      <div className="flex flex-col h-screen md:justify-start 2xl:justify-center">
        <div className="flex w-fit px-4 mt-3 md:px-12 md:py-6">
          <h1 className="about_typewriter w-fit xl:text-2xl text-lg self-start ">
            About me.
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:py-5 md:px-5">
          <div className="flex flex-col self-start w-full md:px-6 px-4">
            <Fade bottom>
              <span className="text-orange-500 text-lg self-start">
                &#60;resume&#62;
              </span>
            </Fade>
            <Fade bottom delay={200}>
              <p className="self-start md:text-xl md:py-1 text-justify">
                {" "}
                Graduated in industrial engineering and after 4 years of career
                working mostly in the areas of finance and commercial I found my
                passion for software development.
              </p>
            </Fade>
            <Fade bottom delay={400}>
              <p className="self-start md:text-xl md:py-1 text-justify">
                Now I'm in this software world for more than a year and a half,
                currently developing web applications, and eager to continue
                building my path within this industry.
              </p>
            </Fade>
            <Fade bottom delay={600}>
              <p className="self-start md:text-xl md:py-1 text-justify">
                I’m looking to collaborate on challenging projects that push me
                to enhance my development.
              </p>
            </Fade>
            <Fade bottom delay={800}>
              <a
                href={cv}
                download="Garzon,Geronimo-CV.pdf"
                type="submit"
                className="bg_animate w-fit mt-1 md:mt-6 self-start inline-flex justify-end rounded-md bg-violet-700 py-2 px-4 text-sm text-white"
              >
                Curriculum
              </a>
              <p className="mt-2 text-sm text-gray-500 self-start">
                Click to download pdf
              </p>
            </Fade>
            <Fade bottom delay={1000}>
              <span className="text-orange-500 text-lg self-start">
                &#60;/resume&#62;
              </span>
            </Fade>
          </div>
          <div className="flex flex-col w-full">
            <div className="md:w-52 flex flex-col md:self-center px-5">
              <Fade bottom>
                <span className="text-orange-500 text-lg self-start">
                  &#60;skills&#62;
                </span>
              </Fade>
              <div className="flex md:flex-col">
                <div className="flex flex-col animate_3d">
                  <Fade bottom delay={200}>
                    <span className="text-2xl md:self-end p-2 md:pt-3 md:px-5">HTML5</span>
                  </Fade>
                  <Fade bottom delay={400}>
                    <span className="text-3xl md:self-center p-2 md:py-1 md:px-3 ">
                      CSS3
                    </span>
                  </Fade>
                  <Fade bottom delay={600}>
                    <span className="text-xl md:self-end p-2 md:py-1 md:px-2 ">
                      JAVASCRIPT
                    </span>
                  </Fade>
                </div>
                <div className="flex flex-col animate_3d">
                  <Fade bottom delay={800}>
                    <span className="text-4xl md:self-center font-semibold p-2 md:py-2 tracking-wider ">
                      REACT
                    </span>
                  </Fade>
                  <Fade bottom delay={1000}>
                    <span className="text-2xl md:self-end p-2 md:py-2">NODE.JS</span>
                  </Fade>
                  <Fade bottom delay={1200}>
                    <span className="text-lg md:self-start p-2 md:pb-3 md:pt-1 md:pl-5 ">
                      MONGO DB
                    </span>
                  </Fade>
                </div>
              </div>
              <Fade bottom delay={1400}>
                <span className="text-orange-500 text-lg self-start">
                  &#60;/skills&#62;
                </span>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
