import React from 'react'
import gero from "../assets/gero.png";

import "./home.css";

const Home = () => {
  return (
    <div className="h-screen">
        <div className="home_container py-2 md:py-5">
            <div className="flex flex-col justify-evenly items-center h-100 md:flex-row md:justify-evenly md:items-end p-3">
                <div className="flex flex-col self-start md:self-end">
                    <span className="text-orange-500 self-start">&#60;developer&#62;</span>
                    <span className="md:text-4xl text-lg self-center">GERONIMO</span>
                    <span className="md:text-4xl text-lg self-start">GARZON</span>
                    <span className=" text-orange-500 self-end">&#60;/developer&#62;</span>
                </div>
                <div className="flex flex-col self-center">
                    <img src={gero} alt="cv-photo" className=""></img>
                </div>
                <div className="flex flex-col self-end pt-5 mt-5 md:pt-0 md:mt-0">
                    <span className="text-orange-500 self-end">&#60;about_me&#62;</span>
                    <span className="md:text-3xl text-lg self-start">INDUSTRIAL ENGINEER</span>
                    <span className="md:text-3xl text-lg self-center">&</span>
                    <span className="md:text-3xl text-lg self-start">FULLSTACK DEVELOPER</span>
                    <span className="text-orange-500 self-start">&#60;/about_me&#62;</span>
                </div>
            </div>
            <div className="wave">

                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6d28d9" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,149.3C384,160,480,160,576,138.7C672,117,768,75,864,58.7C960,43,1056,53,1152,69.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}

                {/* <svg id="wave" style={{transform:"rotate(0deg)", transition:"0.3s"}} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(109, 40, 217, 1)" offset="0%"></stop><stop stop-color="rgba(249, 115, 22, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,245L80,204.2C160,163,320,82,480,89.8C640,98,800,196,960,228.7C1120,261,1280,229,1440,220.5C1600,212,1760,229,1920,269.5C2080,310,2240,376,2400,375.7C2560,376,2720,310,2880,236.8C3040,163,3200,82,3360,114.3C3520,147,3680,294,3840,326.7C4000,359,4160,278,4320,253.2C4480,229,4640,261,4800,236.8C4960,212,5120,131,5280,138.8C5440,147,5600,245,5760,253.2C5920,261,6080,180,6240,179.7C6400,180,6560,261,6720,261.3C6880,261,7040,180,7200,130.7C7360,82,7520,65,7680,73.5C7840,82,8000,114,8160,106.2C8320,98,8480,49,8640,49C8800,49,8960,98,9120,98C9280,98,9440,49,9600,65.3C9760,82,9920,163,10080,228.7C10240,294,10400,343,10560,334.8C10720,327,10880,261,11040,261.3C11200,261,11360,327,11440,359.3L11520,392L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"></path></svg> */}
                {/* <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" className="path-0">
                    <path d="M 0,500 C 0,500 0,250 0,250 C 166.93333333333334,255.2 333.8666666666667,260.4 484,240 C 634.1333333333333,219.6 767.4666666666667,173.60000000000002 924,171 C 1080.5333333333333,168.39999999999998 1260.2666666666667,209.2 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#6d28d9" fill-opacity="1" className="path-0"></path>
                </svg> */}
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" className="path-0"><path d="M 0,500 C 0,500 0,250 0,250 C 182,270.5333333333333 364,291.06666666666666 512,278 C 660,264.93333333333334 774,218.26666666666665 923,208 C 1072,197.73333333333335 1256,223.86666666666667 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#6d28d9" fill-opacity="1" className="path-0"></path></svg>
            </div>
        </div>
    </div>
  )
}

export default Home