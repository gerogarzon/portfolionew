import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

import "./App.css";

function App() {
  return (
      
      
    <div className="App">
      <Navbar/>
      <ReactFullpage  
        //fullpage options
        navigation
        anchors={["firstPage", "secondPage", "thirdPage", "fourthPage"]}
        navigationTooltips={['&#60; home &#62;', '&#60; skills &#62;','&#60; projects &#62;','&#60; contact &#62;']}
        slidesNavigation={false} 
        slidesNavPosition={'bottom'}
        scrollingSpeed={700} 
        scrollHorizontally= {true}
        easing={"easeInOutCubic"}
        parallax={true}
        lazyLoading={true} 
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div id="section1" className="section">
                <Home/>
              </div>
              <div id="section2" className="section">
                <Skills/>
              </div>
              <div id="section3" className="section">         
                <Projects/>  
              </div>
              <div id="section4" className="section">
                <Contact/>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
        />
    </div>
  );
}

export default App;
