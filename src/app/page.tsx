import HeroSection from '@/components/HeroSection';
import FeaturedCourses from '@/components/FeaturedCourses'
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialCards from '@/components/TestimonialCards';
import BenefitCard from '@/components/WebinarCard';
import Footer from '@/components/Footer';

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <BenefitCard/>
      <Footer/>
   </main>
  );
}
