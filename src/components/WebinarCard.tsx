import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const data = [
  {
    title: "Beginner Guitar",
    description: "Learn basic chords, strumming patterns, and songs to kickstart your guitar journey.",
    link: "/courses/beginner-guitar"
  },
  {
    title: "Piano Fundamentals",
    description: "Master the essentials of piano playing, from finger positioning to reading sheet music.",
    link: "/courses/piano-fundamentals"
  },
  {
    title: "Vocal Training",
    description: "Improve your pitch, tone, and breathing with professional vocal exercises and techniques.",
    link: "/courses/vocal-training"
  },
  {
    title: "Drum Basics",
    description: "Discover rhythm, timing, and coordination with our hands-on drum lessons for beginners.",
    link: "/courses/drum-basics"
  },
  {
    title: "Music Theory Essentials",
    description: "Understand the building blocks of music: scales, chords, harmony, and composition.",
    link: "/courses/music-theory"
  },
  {
    title: "Advanced Songwriting",
    description: "Learn how to craft lyrics, melodies, and chord progressions to write impactful original songs.",
    link: "/courses/advanced-songwriting"
  }
]


function WebinarCard() {
  return (
    <div className="mt-10">
      <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED webinar</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>
      <div className="mt-10">
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={data} />
        </div>
      </div>
      <div className="mt-5 text-center">
        <Link href={"/courses"}
        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-gray-200 hover:bg-gray-100 transition duration-200">
            View all Webinar
        </Link>
      </div>
    </div>
  )
}

export default WebinarCard
