"use client";
import { motion, useAnimation } from "framer-motion";
import { Power4 } from "gsap/all";
import React, { useState } from "react";
import Link from "next/link";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0%" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20 bg-[#161B22] text-[#E5E5E5]">
      <div className="w-full px-20 border-b-[1px] pb-20 border-[#3282B8] ">
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20 ">
        <div className="cards w-full flex gap-10 mt-10 ">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[70vh]"
          >
            <div className="card  absolute z-[9] text-8xl left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter uppercase  "></div>

            <h1 className="absolute flex overflow-hidden z-[9] text-8xl right-0 text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter uppercase  ">
              {"GLOW-GUIDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl ">
              <Link href="https://manojtarad65.github.io/my-website/index.html" target="_blank">
                <img
                  className="w-full h-full bg-cover rounded-xl"
                  src="/project.png"
                  alt=""
                />
              </Link>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[70vh] "
          >
            <h1 className="absolute flex overflow-hidden z-[9] text-8xl right-full text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter uppercase  ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl ">
              <img
                className="w-full h-full bg-cover rounded-xl"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
