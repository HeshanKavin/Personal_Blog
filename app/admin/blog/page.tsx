"use client"
import DemoPage from '@/components/admin/blog-panel';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();

    const handleCreateBlog = () => {
        router.push('/admin/blog/create'); // Update this path based on your routes
    };

    return (
        <div>
            <div className='flex items-center'>
                <h1 className='lg:ml-32 sm:ml-12 text-4xl'>Blogs</h1>
                <div className='ml-auto justify-end'>
                    <Button type="button" onClick={handleCreateBlog}>
                        Create New Blog
                    </Button>
                </div>
            </div>
            <DemoPage />
        </div>
    );
};

export default Page;
