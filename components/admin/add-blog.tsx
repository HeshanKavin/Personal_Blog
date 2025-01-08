import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Tiptap from '@/components/admin/text-editor';

const AddBlog = () => {
    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-2xl font-bold mb-6">Create New Blog</h1>
            <form className="space-y-4">
                {/* Title Input */}
                <div className="form-group">
                    <Label htmlFor="title" className="block mb-1 font-medium text-gray-700">
                        Title
                    </Label>
                    <Input
                        id="title"
                        type="text"
                        placeholder="Enter blog title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                {/* Image Input */}
                <div className="form-group">
                    <Label htmlFor="image" className="block mb-1 font-medium text-gray-700">
                        Image URL
                    </Label>
                    <Input
                        id="image"
                        type="url"
                        placeholder="Enter image URL"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                {/* Blog Body */}
                {/* <div className="form-group">
                    <Label htmlFor="body" className="block mb-1 font-medium text-gray-700">
                        Blog Body
                    </Label>
                    <Textarea
                        id="body"
                        placeholder="Write your blog content here"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                        rows={6}
                    />
                </div> */}

                {/* Toggle Group */}
                <div className="form-group">
                    <Label className="block mb-1 font-medium text-gray-700">Blog Body</Label>
                    <Tiptap />
                </div>

                {/* Submit Button */}
                <div className="form-group">
                    <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Add Blog
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;
