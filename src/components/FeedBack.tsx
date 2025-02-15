"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";


const testimonials = [
  {
    quote:
      "The Beginner Piano Lessons were amazing! I went from knowing nothing about the piano to playing my first song in just a few weeks. The instructors are incredibly patient and knowledgeable.",
    name: "Emily Johnson",
    title: "Beginner Piano Lessons",
  },
  {
    quote:
      "The Vocal Training for Beginners course helped me find my voice and gain confidence in my singing. I can't recommend this course enough for anyone looking to improve their vocal skills.",
    name: "Michael Brown",
    title: "Vocal Training for Beginners",
  },
  {
    quote:
      "I loved the Guitar Basics course! The lessons were well-structured, and the instructor made learning fun and engaging. I can now play several songs and am excited to continue my guitar journey.",
    name: "Sarah Davis",
    title: "Guitar Basics",
  },
  {
    quote:
      "The Digital Music Production course opened up a whole new world for me. I learned how to create and produce my own music using professional software. This course is a must for any aspiring music producer.",
    name: "James Wilson",
    title: "Digital Music Production",
  },
  {
    quote:
      "As a beginner, the Introduction to Music Theory course was perfect for me. It gave me a solid foundation and understanding of music that has been invaluable in my musical journey.",
    name: "Jessica Martinez",
    title: "Introduction to Music Theory",
  },
];


export default function BackgroundBoxesDemo() {
  return (
    <div className="h-auto mt-[13rem] mb-[8rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}


      <p className='lg:text-5xl text-4xl lg:font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-800'>Hear our Harmony: Voice of Success</p>

      <div className="h-auto my-[5rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      </div>
  );
}
