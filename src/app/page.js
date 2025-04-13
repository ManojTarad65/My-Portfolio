// "use client";
// import React, { useEffect } from "react";


// import Home from "./home/page";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

// const App = () => {
//   useEffect(() => {
//     const locomotiveScroll = new LocomotiveScroll();
//     return () => {
//       if (locomotiveScroll) locomotiveScroll.destroy();
//     };
//   }, []);

//   return (
//     <div
      
//       className="   w-screen text-white  "
//     >
//        <Home/>
     

 
//     </div>
//   );
// };

// export default App;

import React from "react";
import LandingWrapper from "../components/LandingWrapper"; // adjust if needed

const HomePage = () => {
  return <LandingWrapper />;
};

export default HomePage;

