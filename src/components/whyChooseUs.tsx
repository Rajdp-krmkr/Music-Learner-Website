"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: 'Comprehensive Music Theory',
    description: 'Learn the fundamentals of music theory, including scales, chords, and harmonic analysis, essential for any aspiring musician.'
    ,
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Comprehensive Music Theory
      </div>
    ),
  },
  {
    title: 'Jazz Improvisation',
    description: 'Develop your improvisational skills and understand the intricacies of jazz with courses focused on improvisation, jazz theory, and ensemble playing.'
    ,

    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--blue-500))] flex items-center justify-center text-white">
        Jazz Improvisation
      </div>
    ),
  },
  {
    title: 'Vocal Training and Technique',
    description: 'Enhance your vocal abilities with professional training in breathing techniques, vocal exercises, and performance practices across various genres.',
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Vocal Training and Technique
      </div>
    ),
  },
  {
    title: 'Music Production and Recording',
    description: 'Gain hands-on experience in music production and recording with state-of-the-art equipment and software in our recording studios.',
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--yellow-500))] flex items-center justify-center text-white">
        Music Production and Recording
      </div>
    ),
  },
  {
    title: 'Guitar Techniques and Styles',
    description: 'Explore different guitar techniques and styles, from classical and jazz to rock and blues, with our expert instructors.',
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--blue-500))] flex items-center justify-center text-white">
        Guitar Techniques and Styles
      </div>
    ),
  },
  {
    title: 'Songwriting and Composition',
    description: 'Learn the art of songwriting and composition, including lyric writing, melody creation, and arranging, to express your musical ideas.',
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] flex items-center justify-center text-white">
        Songwriting and Composition
      </div>
    ),
  },
  {
    title: 'Orchestral Conducting',
    description: 'Study the techniques of orchestral conducting, score reading, and rehearsal management to lead ensembles with confidence and precision.',
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--blue-500))] flex items-center justify-center text-white">
        Orchestral Conducting
      </div>
    ),
  },
  {
    title: '',
    description: '',
    content: (
      <></>
    ),
  },
];


export default function whyChooseUs() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
