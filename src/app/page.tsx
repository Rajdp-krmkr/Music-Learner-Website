import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/featuredCourses";
import WhyChooseUs from "@/components/whyChooseUs";
import FeedBack from "@/components/FeedBack";
import Events from "@/components/Events";
import Instructor from "@/components/Instructor";

export default function Home() {
  return (
  <main className="min-h-[90%] bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-x-hidden">
    <HeroSection />
    <FeaturedCourses />
    <WhyChooseUs />
    <FeedBack />
    <Events />
    <Instructor />
  </main>);
}
