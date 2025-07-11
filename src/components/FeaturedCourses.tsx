"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from '../data/music_courses.json'
import Link from "next/link";


interface Course {
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
        image: string,
}



function FeaturedCourses() {

    const FeaturedCourses = courseData.courses.filter(course => course.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
        </div>
      </div>
      <div className="mt-10">
       <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            {FeaturedCourses.map((course : Course) => (
               <div key={course.id} className="flex text-center justify-center p-4">
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <img
                        src={course.image}
                        className="object-contain rounded-lg w-40 mx-auto"
                        />
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            {course.title}
                        </p>
                
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                            {course.description}
                        </p>
                        <Link href={`course/${course.slug}`}
                        className="px-2 py-2 rounded border border-neutral-600 text-neutral-700 bg-gray-200 hover:bg-gray-100 transition duration-200 text-sm font-semibold">
                            Learn More
                        </Link>
                    </BackgroundGradient>
               </div>
            ))}
       </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}
        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-gray-200 hover:bg-gray-100 transition duration-200">
            View all Courses
        </Link>
      </div>
        
    </div>
  )
}

export default FeaturedCourses
