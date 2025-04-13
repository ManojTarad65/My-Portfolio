"use client";
import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <div className='fixed z-[999] w-full px-20 py-5 bg-[#1A1A1A]  text-white shadow-md  font-[" Neue Montreal "] flex justify-between items-center'>
      <div className="logo">
        <img src="/logo.svg" alt="" className="w-60  invert rounded-full" />
      </div>
      <section className="  text-white  smooth-scroll">
        <div className="links flex gap-10 text-white  ">
          <Link
            href="/home"
            className="text-lg font-light capitalize cursor-pointer  px-3 py-1 rounded-xl shadow-md hover:shadow-[#e4e8f1] hover:scale-105 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/services"
            
            className="text-lg font-light capitalize cursor-pointer px-3 py-1 rounded-xl shadow-md hover:shadow-[#e4e8f1] hover:scale-105 transition duration-300"
          >
            Services
          </Link>
          <Link
            href="/our-work"
            className="text-lg font-light capitalize cursor-pointer px-3 py-1 rounded-xl shadow-md hover:shadow-[#e4e8f1] hover:scale-105 transition duration-300"
          >
            Our Work
          </Link>
          <Link
            href="/about-us"
            className="text-lg font-light capitalize cursor-pointer px-3 py-1 rounded-xl shadow-md hover:shadow-[#e4e8f1] hover:scale-105 transition duration-300"
          >
            About 
          </Link>
          <Link
            href="/contact-us"
            className="text-lg font-light capitalize cursor-pointer  px-3 py-1 rounded-xl shadow-md hover:shadow-[#e4e8f1] hover:scale-105 transition duration-300 ml-32"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
