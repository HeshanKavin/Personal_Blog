import React from "react";
import Image from "next/image";
import homeImage from "@/public/9.jpg" // Correct path for the public directory

const AboutPage: React.FC = () => {
    return (
        <div className="relative w-full h-screen"> {/* Set full screen height */}
            {/* Image */}
            <Image
                src={homeImage}
                alt="DreamForge Image"
                className="rounded-lg shadow-lg object-cover w-full h-full"
            />

            {/* Header Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 text-center text-white ">
                <h1 className="text-xs sm:text-3xl lg:text-5xl font-heading mb-4">
                    About DreamForge
                </h1>
                <p className="text-xs sm:text-lg lg:text-xl ">At DreamForge, we ignite the spark within you to turn dreams into reality. Through inspiring stories, motivational insights, and practical tips, we empower you to conquer challenges and pursue greatness. Join us on this journey of transformation—because your dreams are worth forging.</p>
            </div>
        </div>
    );
};

export default AboutPage;
