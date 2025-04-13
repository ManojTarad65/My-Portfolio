// "use client";

// import React, { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import Home from "../app/home/page"; // adjust if needed

// const LandingWrapper = () => {
//   useEffect(() => {
//     const locomotiveScroll = new LocomotiveScroll();
//     return () => {
//       if (locomotiveScroll) locomotiveScroll.destroy();
//     };
//   }, []);

//   return (
//     <div className="w-screen text-white">
//       <Home />
//     </div>
//   );
// };

// export default LandingWrapper;

"use client";

import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Landing from "../app/home/page"; // adjust path if needed

const LandingWrapper = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => scroll.destroy();
  }, []);

  return (
    <div className="w-screen text-white">
      <Landing />
    </div>
  );
};

export default LandingWrapper;