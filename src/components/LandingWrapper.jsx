"use client";

import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Home from "../app/home/page"; // adjust if needed

const LandingWrapper = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className="w-screen text-white">
      <Home />
    </div>
  );
};

export default LandingWrapper;