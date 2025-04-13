"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {

  return (


//background 
    <div
    data-scroll
    data-scroll-speed="-.3"
    className="relative w-full h-screen text-[#E5E5E5] pt-1  "
  >
    <video
      autoPlay
      muted
      loop
      playsInline
      poster="/footer-background.jpg"
      className="absolute top-0 left-0 w-full h-full object-cover z-[-1]  blur-[4px] "
    >
      <source src="/background-pic3.mp4" type="video/mp4" />
    </video>
    <section
      id="contact-us"
      className="   py-16 px-6 md:px-24"
    >
      <div className="max-w-5xl mx-auto text-center mt-64">
        <div className='font-["Neue_Montreal"]'>
      
          <footer className=" text-[#D1D5DB] py-10 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-xl font-bold">Manoj Tarad</h2>
                <p className="text-sm text-[#9CA3AF] mt-8 font-semibold">
                  Building with passion, one line of code at a time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2  ">Quick Links</h3>
                <ul className="space-y-1 flex justify-center items-center flex-row gap-10 mt-8">
                  <li>
                    <a
                      href="/about-us"
                      className=" font-semibold px-3 py-2 rounded-xl shadow-md hover:shadow-[#e4e8f1] hover:scale-105 transition duration-300"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/our-work"
                      className=" font-semibold px-3 py-2 rounded-xl shadow-md hover:shadow-[#e4e8f1] hover:scale-105 transition duration-300"
                    >
                      Our Work
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex gap-5 items-center flex-col text-md font-bold ">
                Let's Connect
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
               
              {/* connect -> linkedin , github , email */}

                  <div className="flex space-x-4 mt-3">
                  <a
                    href="mailto:manojtarad65@gmail.com"
                    className="  font-semibold px-3 py-2 rounded-xl shadow-md hover:shadow-[#e4e8f1] hover:scale-105 transition duration-300"
                  >
                    <MdOutlineMailOutline /> 
                  </a>

                    <a
                      href="https://www.linkedin.com/in/manoj-tarad-0b779625a"
                      className="font-semibold px-3 py-2 rounded-xl shadow-md hover:shadow-[#e4e8f1] hover:scale-105 transition duration-300"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://github.com/manojtarad65"
                      className=" font-semibold px-3 py-2 rounded-xl shadow-md hover:shadow-[#e4e8f1] hover:scale-105 transition duration-300"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-[#374151] pt-4 text-center text-sm text-[#9CA3AF]">
              © 2025 Manoj Tarad. All rights reserved.
            </div>
          </footer>
          </div>
      </div>
      
    </section>
    </div>
  );
};

export default Footer;

















// <div className="h-64 w-[60px] flex justify-center items-center m-6 ">
//                   <div className="border border-zinc-600 rounded p-2 font-[Neue_Montreal] ">
//                     <form className="flex flex-col justify-center items-center ">
//                       <div className="flex justify-center items-center">
//                         <label htmlFor="Name">Name : </label>
//                         <input
//                           type="text"
//                           name="Name"
//                           id="Name"
//                           value={name}
//                           className="px-4 py-1 bg-[#0B1D26] rounded border-2 m-2"
//                           onChange={(e) => setName(e.target.value)}
//                         />
//                       </div>
//                       <div className="flex justify-center items-center">
//                         <label htmlFor="email">Email :</label>
//                         <input
//                           type="email"
//                           name="email"
//                           id="email"
//                           className="px-4 py-1 bg-[#0B1D26] rounded border-2 m-2"
//                           onChange={(e) => setEmail(e.target.value)}
//                         />
//                       </div>

//                       <div className="flex justify-center items-center">
//                         <label htmlFor="message">Message :</label>

//                         <input
//                           type="text-area"
//                           name="message"
//                           id="message"
//                           value={message}
//                           className="px-4 py-8 bg-[#0B1D26] rounded border-2 m-2"
//                           onChange={(e) => setMessage(e.target.value)}
//                         />
//                       </div>

//                       <button
//                         type="submit"
//                         onClick={HandleClick}
//                         className="w-1/2 px-4 py-1 bg-[#2b3a42]  rounded border-3 m-2 cursor-pointer shadow-md hover:shadow-[#aecd71] hover:scale-105 transition duration-300"
//                       >
//                         Submit
//                       </button>
//                     </form>
//                   </div>
//                 </div>