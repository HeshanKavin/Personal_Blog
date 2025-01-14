import React from 'react';
import Image from 'next/image';

interface BlogProps {
    blog: {
        title: string;
        image: string;
        description: string;
        writer: string;
        date: string;
        blog_body: string;
    };
}

const BlogDetails: React.FC<BlogProps> = ({ blog }) => {
    return (
        <div className="max-w-4xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                {blog.title}
            </h1>

            {/* Image */}
            <Image
                src={blog.image}
                width={400}
                height={100}
                alt={blog.title}
                className="w-full h-auto rounded-lg mb-4" />

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl mb-4">{blog.description}</p>

            {/* Writer and Date */}
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4">
                By {blog.writer} on {blog.date}
            </p>

            {/* Blog Body */}
            <div className="blog-body text-base sm:text-base lg:text-lg">
                <p>{blog.blog_body}</p>
            </div>
        </div>
    );
};

export default BlogDetails;
