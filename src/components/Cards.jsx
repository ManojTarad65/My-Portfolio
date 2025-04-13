"use client";
import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-[#0F0F0F] flex  items-center px-32 gap-5">
      <div className="cardContainer h-[50vh] w-1/2 ">
        <div className="card relative w-full rounded-xl h-full bg-[#1A1A1A] hover:shadow-[0_0_15px_#00FFE0] shadow-xl flex items-center justify-center ">
          <img src="/logo.svg" alt="" className="w-60  invert rounded-full" />
          <button className="absolute bottom-10 left-10 px-4 py-1 border-2 rounded-3xl border-[#CDEA68] text-[#CDEA68]">
            &copy; 2025
          </button>
        </div>
      </div>
      <div className="cardContainer h-[50vh] flex gap-5 w-1/2 ">
        <div className="card relative w-full rounded-xl h-full bg-[#1A1A1A] hover:shadow-[0_0_15px_#00FFE0] shadow-xl flex items-center justify-center ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute bottom-10 left-10 px-4 py-1 border-2 rounded-3xl ">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative w-full rounded-xl h-full bg-[#1A1A1A] hover:shadow-[0_0_15px_#00FFE0] shadow-xl flex items-center justify-center ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute bottom-10 left-10 px-6 py-1 border-2 rounded-3xl ">
            BUSSINESS BOOTCAMP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;





