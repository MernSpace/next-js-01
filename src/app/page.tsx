import HeroSection from "@/app/component/HeroSection";
import FeaturedCourses from "@/app/component/FeaturedCourses";
import {StickyContent} from "@/app/component/StickyContent";
import {MovingCards} from "@/app/component/Moving-Card";
import {CardHoverEffectDemo} from "@/app/component/CardHoverEffect";
import Instructor from "@/app/component/Instructor";
import Footer from "@/app/component/footer";

export default function Home() {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] '>
      <h1 className='text-2xl text-center'>Home page</h1>
      <HeroSection/>
        <FeaturedCourses/>
        <StickyContent/>
        <MovingCards/>
        <CardHoverEffectDemo/>
        <Instructor/>
        <Footer/>
    </main>
  );
}
