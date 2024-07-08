import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import NavbarDemo from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MusicLearner",
  description: "Selling best online music courses",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          <NavbarDemo /></div>
        {children}
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
// import "./globals.css";
// import React from "react";
// import NavbarDemo from "@/components/Navbar";





