// BlogSection.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { getAllBlogs } from '@/data/blog'
import BlogCard from './BlogCard';
import { PaginationDemo } from './Pagination';

interface Blog {
    id: number;
    title: string;
    image: string;
    description: string;
    writer: string;
    date: string;
}

const BlogSection = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage] = useState(4); // Number of blogs to display per page

    useEffect(() => {
        const fetchBlogs = async () => {
            const { blog, error } = await getAllBlogs();
            if (error) {
                setError(error);
            } else if (blog) {
                setBlogs(blog);
            }
        };

        fetchBlogs();
    }, []);

    // Pagination logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    if (error) {
        return <p className="text-center text-red-500">Error: {error}</p>;
    }

    return (
        <div className="px-4 sm:px-8 lg:px-16">
            <h1 className="text-center font-bold text-3xl sm:text-4xl lg:text-5xl m-5">Blogs</h1>
            <div className='flex flex-wrap justify-center gap-6 pb-5'>
                <BlogCard blogs={currentBlogs} />
                <PaginationDemo currentPage={currentPage} totalBlogs={blogs.length} paginate={paginate} />
            </div>
        </div>
    );
};

export default BlogSection;
