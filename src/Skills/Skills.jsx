import React from 'react'

import "./skills.css";

const Skills = () => {
  return (
    <div className="h-screen">
            <div className="h-100 w-100">
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 192.2666666666667,199.2 384.5333333333334,148.4 539,159 C 693.4666666666666,169.6 810.1333333333332,241.60000000000002 954,267 C 1097.8666666666668,292.4 1268.9333333333334,271.2 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#6d28d9" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path></svg>
            </div>
            <div className="flex justify-center pb-5 px-5">
                <div className="skills flex flex-col self-center">
                    <span className="text-orange-500 self-start ">&#60;skills&#62;</span>
                    <span className="text-2xl self-end pt-3 px-5">HTML5</span>
                    <span className="text-3xl self-center py-1 px-3">CSS3</span>
                    <span className="text-xl self-end py-1 px-2">JAVASCRIPT</span>
                    <span className="text-4xl self-center font-semibold py-2">REACT</span>
                    <span className="text-2xl self-end py-2">NODE.JS</span>
                    <span className="text-lg self-start pb-3 pt-1 pl-5">MONGO DB</span>
                    <span className="text-orange-500 self-end">&#60;/skills&#62;</span>
                </div>
            </div>
    </div>
  )
}

export default Skills