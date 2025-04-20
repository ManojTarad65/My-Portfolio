// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import NavBar from "../components/NavBar";
// import CustomCursor from "../components/CustomCursor";
// import Marquee from "@/components/Marquee";



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "My Portfolio",
//   description: "Welcome to my portfolio website!",
//   keywords: ["portfolio", "frontend", "developer"],
//   icons: {
//     icon: "/favicon.ico", // 👈 This is what tells Next.js where to find it
//   },
// };


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       {/* <head>
//     <link rel="icon" href="/favicon.ico" type="image/x-icon" />
//   </head> */}
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <CustomCursor />
//           <NavBar />
         

//         {children}
//         <Marquee />
    
       
//       </body>
//     </html>
//   );
// }

import { Geist, Geist_Mono } from "next/font/google";
// import Head from "next/head"; // ✅ import Head from next/head
import "./globals.css";
import NavBar from "../components/NavBar";
import CustomCursor from "../components/CustomCursor";
import Marquee from "@/components/Marquee";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website!",
  keywords: ["portfolio", "frontend", "developer"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        <NavBar />
        {children}
        <Marquee />
      </body>
    </html>
  );
}

