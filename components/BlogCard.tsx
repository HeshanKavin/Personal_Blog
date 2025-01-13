import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from './ui/button';
import Link from 'next/link';

interface Blog {
    id: number;
    title: string;
    image: string;
    description: string;
    writer: string;
    date: string;
}

interface BlogCardProps {
    blogs: Blog[];
}

const BlogCard: React.FC<BlogCardProps> = ({ blogs }) => {
    return (
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-y-10 gap-x-10 justify-center items-stretch mx-10 my-5">
            {blogs.map(({ id, title, image, description, writer, date }) => (
                <Card key={id} className="flex flex-col w-[300px] rounded-xl shadow-md">
                    <CardHeader>
                        <Image
                            className="w-[300px] h-[150px] bg-cover bg-center object-cover p-0 rounded-t-xl"
                            src={image}
                            alt={title}
                            width={400}
                            height={100}
                        />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardContent>
                    <CardFooter className="text-sm flex justify-between items-center">
                        <div>
                            <p>{date}</p>
                            <p>By {writer}</p>
                        </div>
                        <Link href={`/blog/${id}`} className="hover:underline">
                            Read
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default BlogCard;
