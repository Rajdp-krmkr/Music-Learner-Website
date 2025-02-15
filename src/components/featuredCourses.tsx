import React from 'react';
import courseData from '@/data/music__courses.json';

const FeaturedCourses = () => {
    interface Courses {
        id: Number,
        title: String,
        slug: String,
        description: String,
        price: Number,
        instructor: String,
        isFeatured: Boolean
        // image: "/courses/guitar.jpg" 
    }

    const featuredCourses = courseData.courses.filter((courses: Courses) => courses.isFeatured === true)
    return (

        <>
            {/*  h-auto md:h-[40rem] */}
            <div className='min-h-[136vh] h-auto rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
                <div className='text-center'>
                    <h1 className='lg:text-2xl text-xl font-bold text-violet-500 m-10'>Featured Courses</h1>
                    <p className='lg:text-5xl text-4xl lg:font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-800'>Learn With The Best</p>
                </div>
                <div className="cards my-10 p-10 lg:grid lg:grid-cols-3 gap-7 flex flex-col">
                    {featuredCourses.map((courses: Courses, index) => (
                        <div key={index} className="card min-w-[350px]">
                            <div className="card2 p-5 flex flex-col items-center justify-around text-center gap-3 ">
                                <div className='flex items-center justify-center '><h1 className='text-3xl lg:text-2xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-red-400 to-blue-400'>{courses.title}</h1></div>
                                <div className='flex items-center justify-center '><p className='text-gray-300'>{courses.description}</p></div>
                                <div className='flex items-center justify-center '><p></p></div>
                                <div className='flex items-center justify-center border-1 bg-gray-300 bg-gradient-to-br text-black font-semibold text-xl rounded-lg p-2'><button>Learn More</button></div>
                            </div>
                        </div>
                    )
                    )}
                </div>
                <div><button className='boton-elegante'>Explore All Courses</button></div>
            </div>
        </>
    )
}

export default FeaturedCourses
