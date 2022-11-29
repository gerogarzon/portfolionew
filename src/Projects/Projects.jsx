// import libraries
import React from "react";
import Fade from "react-reveal/Fade";

// import assets
import emenu from "../assets/emenu.mp4";
import scandiweb from "../assets/scandiweb.mp4";
import movielist from "../assets/movielist.mp4";
import fruitsoftware from "../assets/fruitsoftware.mp4";
import astral from "../assets/astral.mp4";
import blackjack from "../assets/blackjack.mp4";

import "./projects.css";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col md:justify-start 2xl:justify-center">
        <div className="flex md:w-fit px-12 my-24 pb-24 pt-4 md:my-0 md:px-12 md:pb-6">
          <h1 className="typewriter w-fit xl:text-2xl text-base self-start md:my-3 2xl:my-12">
            Here are some of my projects.
          </h1>
        </div>
        <div className="slide" data-anchor="slide1">
          <Fade right>
            <div className="flex flex-col">
              <div className="flex justify-center p-2">
                <div className="flex flex-col self-center">
                  <span className="text-orange-500 text-lg self-start pb-3 ">
                    &#60;projects&#62;
                  </span>
                  <div className="grid grid-cols-1 md:gap-1">
                    <div className="cards ">
                      <video
                        className="projects_videos"
                        controls
                        autoPlay
                        muted
                      >
                        <source src={emenu} type="video/mp4" />
                      </video>
                    </div>
                    <h1 className="text-center">
                      This is a e-commerce page with admin dashboard.
                    </h1>
                    <a
                      href="https://e-menu-rc.netlify.app/"
                      className="flex flex-col md:pt-2"
                    >
                      <svg
                        className="link_logo self-center"
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="select"
                        width="1.5em"
                        height="1.5em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32zM653.3 599.4l52.2-52.2a8.01 8.01 0 00-4.7-13.6l-179.4-21c-5.1-.6-9.5 3.7-8.9 8.9l21 179.4c.8 6.6 8.9 9.4 13.6 4.7l52.4-52.4 256.2 256.2c3.1 3.1 8.2 3.1 11.3 0l42.4-42.4c3.1-3.1 3.1-8.2 0-11.3L653.3 599.4z"></path>
                      </svg>
                    </a>
                  </div>
                  <span className="text-orange-500 text-lg self-start ">
                    &#60;/projects&#62;
                  </span>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="slide" data-anchor="slide2">
          <div className="flex flex-col">
            <div className="flex justify-center p-2">
              <div className="flex flex-col self-center">
                <span className="text-orange-500 text-lg self-start pb-3 ">
                  &#60;projects&#62;
                </span>
                <div className="grid grid-cols-1 md:gap-1">
                  <div className="cards ">
                    <video className="projects_videos" controls autoPlay muted>
                      <source src={scandiweb} type="video/mp4" />
                    </video>
                  </div>
                  <h1 className="text-center">This is a e-commerce page.</h1>
                  <a
                    href="https://github.com/gerogarzon/scandiweb-challenge-Geronimo_Garzon"
                    className="flex flex-col md:pt-2"
                  >
                    <svg
                      className="link_logo self-center"
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="select"
                      width="1.5em"
                      height="1.5em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32zM653.3 599.4l52.2-52.2a8.01 8.01 0 00-4.7-13.6l-179.4-21c-5.1-.6-9.5 3.7-8.9 8.9l21 179.4c.8 6.6 8.9 9.4 13.6 4.7l52.4-52.4 256.2 256.2c3.1 3.1 8.2 3.1 11.3 0l42.4-42.4c3.1-3.1 3.1-8.2 0-11.3L653.3 599.4z"></path>
                    </svg>
                  </a>
                </div>
                <span className="text-orange-500 text-lg self-start ">
                  &#60;/projects&#62;
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="slide" data-anchor="slide3">
          <div className="flex flex-col">
            <div className="flex justify-center p-2">
              <div className="flex flex-col self-center">
                <span className="text-orange-500 text-lg self-start pb-3 ">
                  &#60;projects&#62;
                </span>
                <div className="grid grid-cols-1 md:gap-1">
                  <div className="cards ">
                    <video className="projects_videos" controls autoPlay muted>
                      <source src={movielist} type="video/mp4" />
                    </video>
                  </div>
                  <h1 className="text-center">Movies engine searcher.</h1>
                  <a
                    href="https://discover-movies-tmbd.netlify.app/"
                    className="flex flex-col md:pt-2"
                  >
                    <svg
                      className="link_logo self-center"
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="select"
                      width="1.5em"
                      height="1.5em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32zM653.3 599.4l52.2-52.2a8.01 8.01 0 00-4.7-13.6l-179.4-21c-5.1-.6-9.5 3.7-8.9 8.9l21 179.4c.8 6.6 8.9 9.4 13.6 4.7l52.4-52.4 256.2 256.2c3.1 3.1 8.2 3.1 11.3 0l42.4-42.4c3.1-3.1 3.1-8.2 0-11.3L653.3 599.4z"></path>
                    </svg>
                  </a>
                </div>
                <span className="text-orange-500 text-lg self-start ">
                  &#60;/projects&#62;
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="slide" data-anchor="slide4">
          <div className="flex flex-col">
            <div className="flex justify-center p-2">
              <div className="flex flex-col self-center">
                <span className="text-orange-500 text-lg self-start pb-3 ">
                  &#60;projects&#62;
                </span>
                <div className="grid grid-cols-1 md:gap-1">
                  <div className="cards ">
                    <video className="projects_videos" controls autoPlay muted>
                      <source src={fruitsoftware} type="video/mp4" />
                    </video>
                  </div>
                  <h1 className="text-center">
                    Landing page for a software company.
                  </h1>
                  <a
                    href="https://fruitsoftware.netlify.app/"
                    className="flex flex-col md:pt-2"
                  >
                    <svg
                      className="link_logo self-center"
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="select"
                      width="1.5em"
                      height="1.5em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32zM653.3 599.4l52.2-52.2a8.01 8.01 0 00-4.7-13.6l-179.4-21c-5.1-.6-9.5 3.7-8.9 8.9l21 179.4c.8 6.6 8.9 9.4 13.6 4.7l52.4-52.4 256.2 256.2c3.1 3.1 8.2 3.1 11.3 0l42.4-42.4c3.1-3.1 3.1-8.2 0-11.3L653.3 599.4z"></path>
                    </svg>
                  </a>
                </div>
                <span className="text-orange-500 text-lg self-start ">
                  &#60;/projects&#62;
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="slide" data-anchor="slide5">
          <div className="flex flex-col">
            <div className="flex justify-center p-2">
              <div className="flex flex-col self-center">
                <span className="text-orange-500 text-lg self-start pb-3 ">
                  &#60;projects&#62;
                </span>
                <div className="grid grid-cols-1 md:gap-1">
                  <div className="cards ">
                    <video className="projects_videos" controls autoPlay muted>
                      <source src={blackjack} type="video/mp4" />
                    </video>
                  </div>
                  <h1 className="text-center">
                    Play blackjack against the computer.
                  </h1>
                  <a
                    href="https://github.com/gerogarzon/blackjack"
                    className="flex flex-col md:pt-2"
                  >
                    <svg
                      className="link_logo self-center"
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="select"
                      width="1.5em"
                      height="1.5em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32zM653.3 599.4l52.2-52.2a8.01 8.01 0 00-4.7-13.6l-179.4-21c-5.1-.6-9.5 3.7-8.9 8.9l21 179.4c.8 6.6 8.9 9.4 13.6 4.7l52.4-52.4 256.2 256.2c3.1 3.1 8.2 3.1 11.3 0l42.4-42.4c3.1-3.1 3.1-8.2 0-11.3L653.3 599.4z"></path>
                    </svg>
                  </a>
                </div>
                <span className="text-orange-500 text-lg self-start ">
                  &#60;/projects&#62;
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="slide" data-anchor="slide6">
          <div className="flex flex-col">
            <div className="flex justify-center p-2">
              <div className="flex flex-col self-center">
                <span className="text-orange-500 text-lg self-start pb-3 ">
                  &#60;projects&#62;
                </span>
                <div className="grid grid-cols-1 md:gap-1">
                  <div className="cards ">
                    <video className="projects_videos" controls autoPlay muted>
                      <source src={astral} type="video/mp4" />
                    </video>
                  </div>
                  <h1 className="text-center">
                    This is a blog about astrology.
                  </h1>
                  <a
                    href="https://astral-blog2.netlify.app/"
                    className="flex flex-col md:pt-2"
                  >
                    <svg
                      className="link_logo self-center"
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="select"
                      width="1.5em"
                      height="1.5em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32zM653.3 599.4l52.2-52.2a8.01 8.01 0 00-4.7-13.6l-179.4-21c-5.1-.6-9.5 3.7-8.9 8.9l21 179.4c.8 6.6 8.9 9.4 13.6 4.7l52.4-52.4 256.2 256.2c3.1 3.1 8.2 3.1 11.3 0l42.4-42.4c3.1-3.1 3.1-8.2 0-11.3L653.3 599.4z"></path>
                    </svg>
                  </a>
                </div>
                <span className="text-orange-500 text-lg self-start ">
                  &#60;/projects&#62;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
