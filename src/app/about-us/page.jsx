import Link from "next/link";
import React from "react";
const About = () => {
  return (
    <div className=" w-full p-20 bg-[#121212] text-gray-300 font-['neue_Montreal']  text-[4vw]  leading-[4.5vw] ">
      <div className="w-full h-[70vh]  rounded-3xl flex items-center justify-center gap-10">
        <div className="-mt-64 ml-20 py-20 px-10  rounded-3xl">
          <img
            src="/logo.svg"
            alt="about"
            className="w-full  h-auto rounded-2xl object-cover transition-transform invert duration-500 ease-in-out hover:scale-110 hover:-rotate-2 hover:shadow-2xl"
          />
        </div>

        <div className="text-[1.5vw] text-gray-300 ml-64 mr-10  leading-[2.5vw] font-['neue_Montreal']">
          I'm Manoj Tarad, a passionate Frontend Developer skilled in{" "}
          <span className="font-bold text-blue-400 bg-gradient-to-l from-[#3c3c07] to-[#aa6f09] rounded-md">React.js</span>,{" "}
          <span className="font-bold text-blue-400 bg-gradient-to-l from-[#3c3c07] to-[#aa6f09] rounded-md">Next.js</span>,{" "}
          <span className="font-bold text-blue-400 bg-gradient-to-l from-[#3c3c07] to-[#aa6f09] rounded-md">Tailwind CSS</span>, and{" "}
          <span className="font-bold text-blue-400 bg-gradient-to-l from-[#3c3c07] to-[#aa6f09] rounded-md">Framer Motion</span>. I love crafting
          clean, responsive, and animated user interfaces that bring ideas to
          life. I focus on writing efficient code, delivering pixel-perfect
          designs, and building smooth user experiences. I'm always exploring
          new tools and techniques to level up my frontend game — currently
          diving into <span className="font-bold text-blue-400 bg-gradient-to-l from-[#3c3c07] to-[#aa6f09] rounded-md">TypeScript</span> and advanced
          UI/UX principles. Let's build something awesome together!
        </div>
      </div>

      <div className="w-full overflow-hidden border-t-[1px]  flex gap-5  border-[#c2d28b] mt-20 p-10 ">
        <div className="w-1/2 ">
          <h1 className="text-7xl pb-5 text-[#00FFE0]"> Our Work : </h1>
          <button  className="py-6 px-10 bg-zinc-900 rounded-full text-white mt-5  text-sm flex gap-10 items-center ">
            {" "}
            
            <Link href="/our-work" className="cursor-pointer" >VIEW PROJECTS</Link>
            
            <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[#a2b463] rounded-3xl"></div>
      </div>
    </div>
  );
};

export default About;
