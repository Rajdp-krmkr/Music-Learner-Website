import React from "react";
import { Meteors } from "./ui/meteors";

const MeteorsCard = () => {
    return (
        <div className="">
            <div className=" w-full relative max-w-xs">
                <div className="absolute inset-0 hover:scale-100  bg-gradient-to-r from-sky-800 to-blue-800 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-2 w-2 text-gray-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                            />
                        </svg>
                    </div>

                    <h1 className="font-bold text-xl text-white mb-4 relative z-10">
                        Meteors because they&apos;re cool
                    </h1>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-10">
                        I don&apos;t know what to write so I&apos;ll just paste something
                        cool here. One more sentence because lorem ipsum is just
                        unacceptable. Won&apos;t ChatGPT the shit out of this.
                    </p>

                    <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                        Explore
                    </button>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
        </div>
    );
}

export default function Events() {
    return (
        <div className="flex flex-col justify-center items-center my-20 gap-20">
            <div className='text-center'>
                <h1 className='lg:text-2xl text-xl font-bold text-violet-500 m-10'>Featured Webinars</h1>
                <p className='lg:text-5xl text-4xl lg:font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-800'>Enhance Your Musical Journey</p>
            </div>
            <div className="h-auto grid grid-cols-3 gap-10">
                <MeteorsCard />
                <MeteorsCard />
                <MeteorsCard />
                <MeteorsCard />
                <MeteorsCard />
                <MeteorsCard />
                <MeteorsCard />
                <MeteorsCard />
            </div>
        </div>
    );
}
