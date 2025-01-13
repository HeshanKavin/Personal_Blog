import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface Category {
    title: string;
    imageUrl: string;
}

const categories: Category[] = [
    {
        title: "Stories",
        imageUrl: "/Stories.jpg",
    },
    {
        title: "Growth",
        imageUrl: "/Growth.jpg",
    },
    {
        title: "Quotes",
        imageUrl: "Quotes.jpg",
    },
    {
        title: "Lessons",
        imageUrl: "Lessons.jpg",
    },
    {
        title: "Goals",
        imageUrl: "Goals.jpg",
    },
];

export function CategoryCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
        >
            <CarouselContent>
                {categories.map((category, index) => (
                    <CarouselItem key={index} className="w-[200px] md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="w-full h-[100px]"> {/* Set fixed height */}
                                <CardContent
                                    className="flex h-full items-center justify-center p-0 text-white text-center"
                                    style={{
                                        backgroundImage: `url(${category.imageUrl})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "100%", // Ensure the image covers the full height
                                        width: "100%",
                                        borderRadius: "12px", // Optional: rounded corners
                                    }}
                                >
                                    <span className="text-2xl font-semibold bg-black bg-opacity-50 p-2 rounded">
                                        {category.title}
                                    </span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
