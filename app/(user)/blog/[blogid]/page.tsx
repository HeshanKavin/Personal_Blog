import React from 'react';
import { getBlogById } from '@/data/blog'; // Your existing data fetching function
import BlogDetails from '@/components/BlogDetails';
import BlogSection from '@/components/BlogSection';
import CategorySection from '@/components/CategorySection';

export default async function Page({
    params,
}: {
    params: Promise<{ blogid: string }>;
}) {
    const { blogid } = await params; // Await the params promise
    const { blog, error } = await getBlogById(Number(blogid)); // Fetch blog by ID

    if (error) {
        return <div className="text-center text-red-500">Error: {error}</div>;
    }

    if (!blog) {
        return <div className="text-center text-red-500">Blog not found</div>;
    }

    return (
        <div>
            <div className="max-w-3xl mx-auto my-10">
                <BlogDetails blog={blog} />
            </div>
            <CategorySection />
            <BlogSection />
        </div>
    );
}
