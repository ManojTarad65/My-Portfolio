// components/LandingClient.jsx
"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Home from "../app/home/page"; // move your landing UI here

const LandingClient = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => scroll.destroy();
  }, []);

  return (
    <div className="w-screen text-white">
      <Home/>
    </div>
  );
};

export default LandingClient;
