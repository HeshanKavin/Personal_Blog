import Image from "next/image";
import homeImage1 from "../public/lion.jpg";
import homeImage2 from "../public/7.jpg"; // Correct path for the public directory
import CategorySection from "@/components/CategorySection";
import BlogSection from '@/components/BlogSection'
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="relative w-full h-screen"> {/* Set full screen height */}
        {/* Image */}
        <Image
          src={homeImage1}
          alt="DreamForge Image"
          className="rounded-lg shadow-lg object-cover w-full h-full"
        />

        {/* Header Text */}
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-xs sm:text-3xl lg:text-5xl font-heading">
            <p>Hi,</p>
            <p>This is <span className="font-bold">DreamForge</span></p>
            <p>Welcome </p>
            <p>To</p>
            <p>My <span className="font-bold">Motivational Blog</span></p>
          </h1>
        </div>
      </div>

      <div className="relative w-full h-[400px]">
        {/* Image */}
        <Image
          src={homeImage2}// Correct path for the public directory
          alt="DreamForge Image"
          className="absolute inset-0  w-full h-full object-cover rounded-lg shadow-lg"
        />
        <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
          <h2 className="text-xl lg:text-3xl sm:text-2xl font-bold font-heading">DreamForge</h2>
          <p className="mt-4 text-xs lg:text-xl sm:text-sm max-w-xl mx-auto ">
            DreamForge is where ambition meets action. We craft inspiring stories, powerful insights, and actionable motivation to help you shape your dreams into reality. Fuel your journey, ignite your passion, and forge your legacy with DreamForge.
          </p>
        </div>
      </div>
      <CategorySection />
      <BlogSection />
      <Footer />
    </div>
  );
}
