"use client"; // ✅ This is a client component

import React, { useEffect } from "react";
import Home from "./home/page";

const HomeWrapper = () => {
  useEffect(() => {
    import("locomotive-scroll").then((LocomotiveScroll) => {
      const scroll = new LocomotiveScroll.default();
      return () => {
        scroll && scroll.destroy();
      };
    });
  }, []);

  return <Home />;
};

export default HomeWrapper;
