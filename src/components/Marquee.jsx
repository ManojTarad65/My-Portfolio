"use client";
import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-20  bg-[#1B262C] text-[#D1D5DB]   "
    >
      <div className="Text border-t-2 border-b-2 border-zinc-300 flex  whitespace-nowrap overflow-hidden ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text-[17vw] leading-none font-["founders_Grotesk_X-Condensed"]  -mb-[3.8vw] pt-10 pr-10 font-semibold '
        >
          Let's build something that actually matters.{" "}
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text-[17vw] leading-none font-["founders_Grotesk_X-Condensed"]  -mb-[3.8vw] pt-10 pr-10 font-semibold'
        >
          Let's build something that actually matters.{" "}
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
