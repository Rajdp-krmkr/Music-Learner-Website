import React from 'react';
import courseData from '@/data/music__courses.json';

const FeaturedCourses = () => {
    return (
        <>
            <div className='h-auto md:h-[40rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
                <div className='text-center'>
                    <h1 className='text-2xl font-bold text-violet-500 m-10'>Featured Courses</h1>
                    <p className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-slate-800'>Learn With The Best</p>
                </div>
                <div className="cards my-10 p-10">
                    <div className="card">
                        <div className="card2 p-4">
                            <h2>Hello</h2>
                            <p>hi</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedCourses
