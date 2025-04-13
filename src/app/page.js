"use client";
import React, { useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";

import Featured from "../components/Featured";
import Cards from "../components/Cards";
import Landing from "./home/page";
import LocomotiveScroll from "locomotive-scroll";
import About from "../app/about-us/page";
import Footer from "../components/Footer";
const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div
      
      className="   w-screen text-white  "
    >
      // <Landing/>
     
{/*     
    
      <About />
    
   
      <Featured />
      <Cards />
      <Footer /> */}
 
    </div>
  );
};

export default App;


