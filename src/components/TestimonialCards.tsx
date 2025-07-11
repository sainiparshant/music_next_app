"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/cn";

const testimonials = [
  {
    quote: "This school transformed my passion into a skill. The instructors are incredibly patient and knowledgeable!",
    name: "Aarav Mehta",
    title: "Guitar Student"
  },
  {
    quote: "I joined as a beginner and now I can perform confidently on stage. The performance opportunities really helped!",
    name: "Saanvi Sharma",
    title: "Vocal Student"
  },
  {
    quote: "The online classes are so flexible and interactive. I never thought learning music from home could be this effective.",
    name: "Rohan Verma",
    title: "Piano Student"
  },
  {
    quote: "They don't just teach you how to play – they teach you how to think musically. Highly recommended for serious learners.",
    name: "Priya Kapoor",
    title: "Violin Student"
  },
  {
    quote: "I enrolled my 10-year-old daughter and she absolutely loves it. Her confidence has improved a lot.",
    name: "Meena Iyer",
    title: "Parent of Drum Student"
  },
  {
    quote: "Thanks to the school, I passed my Rockschool exam with distinction! Their exam prep was spot on.",
    name: "Kabir Sen",
    title: "Certified Student"
  },
  {
    quote: "Joining the community here has been one of the best parts – jamming, collaborating, and learning together is amazing!",
    name: "Tanya Arora",
    title: "Advanced Student & Performer"
  }
]


function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden ">
          <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
        <h2 className="text-4xl font-bold text-center mb-8 z-10">Hear Our Harmony : Voices of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
             />
        </div>
        </div>
    </div>
  )
}

export default TestimonialCards
