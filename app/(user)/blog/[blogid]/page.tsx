import React from 'react';
import { getBlogById } from '@/data/blog'; // Ensure this API fetch function is implemented
import BlogDetails from '@/components/BlogDetails';
import BlogSection from '@/components/BlogSection';
import CategorySection from '@/components/CategorySection';

const BlogDetailsPage = async ({ params }: { params: { blogid: string } }) => {
    const { blogid } = params;
    const { blog, error } = await getBlogById(Number(blogid)); // Fetch blog details dynamically

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
};

export default BlogDetailsPage;
