import React from "react";
import { CodeBlock, shadesOfPurple } from "react-code-blocks";
import Zoom from "react-reveal/Zoom";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import gero from "../assets/gero3.png";

import "./home.css";

const Home = () => {
  const code = `    <html>
        <head>
            <title>PORTFOLIO</title>
        </head>
        <body>
            <developer>
              GERONIMO GARZON
            </developer>
            <about_me>
                INDUSTRIAL ENGINEER
                                & 
                FULLSTACK DEVELOPER
            </about_me>
        </body>
    </html>`;

  return (
    <div className="flex flex-col md:justify-start 2xl:justify-center ">
        
        <div className="flex flex-col h-full md:flex-row pt-0 md:pt-16">
          <div className="flex flex-col ">
            <div className="flex flex-col md:pl-14 w-fit self-center md:self-start">
            <Slide left>
              <span className="text-orange-500 text-lg self-start">
                &#60;welcome&#62;
              </span>
              </Slide>       
              <span className="typewriter xl:text-3xl text-lg self-start">
                This is my portfolio website.
              </span>
              <Slide left>
              <span className=" text-orange-500 text-lg self-start">
                &#60;/welcome&#62;
              </span>
              </Slide>
            </div>
            <Zoom delay={400}>
            <img className="avatar self-center md:self-start" data-src={gero} alt="avatar" />
            </Zoom>
          </div>
          <div className="flex flex-col w-full h-auto self-start md:px-12 md:pl-0 md:pr-24 ">
            <Fade top delay={600}>
            <div className="codigo">
              <CodeBlock
                text={code}
                language={"jsx"}
                showLineNumbers={"showLineNumbers"}
                theme={shadesOfPurple}
                wrapLines={true}
                wrapLongLines={true}
                highlight="6,7,8,9,10,11,12,13"
              />
            </div>
            </Fade>
          </div>
        </div>
   
      </div>
  );
};

export default Home;
