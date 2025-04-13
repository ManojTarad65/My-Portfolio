"use client";
import React, { useEffect } from "react";



import Landing from "./home/page";
import LocomotiveScroll from "locomotive-scroll";

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
       <Landing/>
     

 
    </div>
  );
};

export default App;


