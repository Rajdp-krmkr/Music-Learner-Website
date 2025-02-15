import React from "react";
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "@/components/ui/moving-border";

const HeroSection = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="h-auto md:h-[40rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <div className="p-4 relative z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text">
            Master The Art Of Music
          </h1>
          <p className="max-w-lg mx-auto mt-4 font-normal text-base md:texlg text-neutral-400">
            Welcome to our Music Academy, where you can learn and master the art
            of music. Our experienced instructors will guide you through various
            courses and help you develop your skills in playing instruments,
            singing, music theory, and more. Whether you&apos;re a beginner or an
            advanced musician, we have the right courses for you.
          </p>
          <div className="mt-4">
            <Link href={"/courses"}>
              <button className="boton-elegante">Explore Courses</button>

            </Link>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default HeroSection;
