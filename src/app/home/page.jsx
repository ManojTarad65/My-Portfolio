"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
const Landing = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="relative w-full h-screen text-[#E5E5E5] pt-1 overflow-hidden"
    >
    
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/background.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/background.mp4" type="video/mp4" />
       
      </video>
     


      <div className="TextStructure mt-52 ">
        {["Welcome TO", "My Portfolio", ""].map((item, index) => {
          return (
            <div className="Masker" key={index}>
              <div className="w-fit flex">
                
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
                    
                    className="w-[9vw] h-[5.8vw]  ml-20 -mr-[4vw] mt-[0.2vw] rounded-md relative -top-[0.9vw] "
                    >
                      <img src="/logo5.png" className="w-full h-full rounded-2xl" alt="" />
                    </motion.div>
                )}
                <h1
                  className="flex items-center uppercase text-[9vw] leading-[7.5vw] font-bold 
                             px-20 font-['founders_Grotesk_X-Condensed']"
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}

        <div className="border-t-[1px] border-zinc-800 w-screen mt-[5.5rem] flex justify-between items-center py-5 px-20">
          {[
            "Designs That Speak Volumes",
            "NowHere — A Showcase of Innovation",
          ].map((item, index) => (
            <p
              key={index}
              className="text-md font-light -tracking-tight leading-none px-20"
            >
              {item}
            </p>
          ))}
          <Link href="/contact-us">
          <div className="Start flex items-center gap-5 cursor-pointer ">
         
            <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full hover:bg-zinc-700">
              Work Together !
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-400 hover:bg-zinc-700">
              <span className="rotate-[45deg]">
                <FaArrowUp />
              </span>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
