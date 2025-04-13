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

// import React from "react";
// import LandingWrapper from "@/components/LandingWrapper"; 

// const HomePage = () => {
//   return <LandingWrapper />;
// };

// export default HomePage;





// ✅ Fix: Only import LocomotiveScroll inside useEffect to prevent SSR usage
import React from "react";
import HomeWrapper from "./home-wrapper";

const Page = () => {
  return (
    <div className="w-screen text-white">
      <HomeWrapper />
    </div>
  );
};

export default Page;