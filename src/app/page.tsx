import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import FeaturedCourses from "@/components/featuredCourses";

export default function Home() {
  return (<main className="min-h-[90%] bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    
      <HeroSection/>
      <FeaturedCourses/>
  </main>);
}
