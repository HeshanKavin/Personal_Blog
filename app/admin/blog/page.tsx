import DemoPage from '@/components/admin/blog-panel'
import React from 'react'
import { Button } from '@/components/ui/button'
import { PaginationDemo } from '@/components/Pagination'

const page = () => {
    return (
        <div>
            <div className='flex items-center'>
                <h1 className='lg:ml-32 sm:ml-12 text-4xl'>Blogs</h1>
                <div className='ml-auto justify-end'>
                    <Button type="submit">Create New Blog</Button>
                </div>
            </div>
            <DemoPage />
        </div>
    )
}

export default page 