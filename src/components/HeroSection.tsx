import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'




function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
 
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className='p-4 relative z-10 w-full text-center'>
        <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master The Art Of Music</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-md mx-auto'>Divine into comprehensiv music course and transform your musical journey today. Whether you are a beginner or looking to refine your skills, join us to unlock your true potential.</p>
       <div className='mt-4'>
      <Link
      href="/courses"
      className="
        inline-block
        px-6 py-3
        rounded-xl
        bg-white dark:bg-slate-900
        text-black dark:text-white
        border border-neutral-200 dark:border-slate-800
        font-semibold
        hover:bg-gray-100 dark:hover:bg-slate-800
        transition
        duration-200
        text-center
      "
    >
      Explore Courses
    </Link>

    </div>
      </div>
      
    </div>
  )
}

export default HeroSection
