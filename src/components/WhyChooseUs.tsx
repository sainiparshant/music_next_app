"use client";
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musiccContent = [
  {
    title: "Learn from Professional Musicians",
    description:
       "Our instructors are experienced performers and certified music educators dedicated to helping you grow musically. They bring real-world experience and deep theoretical knowledge to every lesson, ensuring you receive top-quality training.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
       <img 
       src="https://plus.unsplash.com/premium_photo-1682377780180-75c829427d85?q=80&w=1069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
       width={300}
       height={300}
       className="h-full w-full object-cover"
        alt="linear board demo"
       />
      </div>
    ),
  },
  {
    title: "Courses for All Skill Levels",
    description:
      "Whether you're a complete beginner or a seasoned musician, we offer structured courses tailored to every level. From foundational basics to advanced techniques, our curriculum is designed to support your growth at every stage.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1696522732406-065ef560da8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Flexible Learning Options",
    description:
      "Learn at your own pace with online classes, or join our in-person programs for hands-on experience. Our flexible schedules and hybrid learning environment make it easier to fit music into your busy life.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img 
       src="https://plus.unsplash.com/premium_photo-1683134294531-3e6f87b55204?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
       width={300}
       height={300}
       className="h-full w-full object-cover"
        alt="linear board demo"
       />
      </div>
    ),
  },
  {
    title: "Performance Opportunities: Showcase your talent in recitals",
    description:
      "Showcase your talent in recitals, competitions, and live events organized throughout the year. These platforms build your confidence and stage presence while giving you real-world experience in performing.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img 
        src="https://plus.unsplash.com/premium_photo-1682745684956-1ad3f4242c87?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        width={300}
       height={300}
       className="h-full w-full object-cover"
        alt="linear board demo"
        />
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll   content={musiccContent}/>
    </div>
  )
}

export default WhyChooseUs
