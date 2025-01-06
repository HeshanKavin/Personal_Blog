import { DataTableDemo } from '@/components/admin/blog-panel'
import React from 'react'
import { Button } from '@/components/ui/button'
import AddBlogForm from '@/components/admin/add-blog'

const page = () => {
    return (
        <div className=' text-center'>
            Welcome Blog page
            <div>
                <Button type="submit">Signup</Button>
            </div>
            <DataTableDemo />
        </div>
    )
}

export default page 