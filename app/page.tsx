import Image from "next/image";
import homeImage from "../public/lion.jpg"; // Correct path for the public directory
import CategorySection from "@/components/CategorySection";
import BlogSection from "@/components/BlogSection";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="relative w-full h-screen"> {/* Set full screen height */}
        {/* Image */}
        <Image
          src={homeImage}
          alt="DreamForge Image"
          className="rounded-lg shadow-lg"
        />

        {/* Header Text */}
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-5xl font-heading">
            Hi,<br /> This is DreamForge <br />Welcome <br />To <br />My Motivational Blog
          </h1>
        </div>
      </div>

      <div className="relative w-full h-[400px]">
        {/* Image */}
        <Image
          src="/1.jpg" // Correct path for the public directory
          alt="DreamForge Image"
          layout="fill" // This makes the image cover the container
          objectFit="cover" // Ensures the image covers the area without stretching
          className="rounded-lg shadow-lg"

        />
        <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
          <h2 className="text-3xl font-heading">Motivational Blog</h2>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            Welcome to the Motivational Blog. Here you will find the latest
            motivational content to help you stay focused and inspired. We
            believe that motivation is the key to success and we are here to
            help you achieve your goals.
          </p>
        </div>
      </div>
      <CategorySection />
      <BlogSection />
      <Footer />
    </div>
  );
}
