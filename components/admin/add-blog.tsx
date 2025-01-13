"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { addBlog } from "@/data/blog"; // Use server-side function
import { useRouter } from 'next/navigation';

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [writer, setWriter] = useState('');
    const [date, setDate] = useState('');
    const [blog_body, setBody] = useState('');
    const [feedback, setFeedback] = useState<string | null>(null);

    const router = useRouter(); // Initialize useRouter hook

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const result = await addBlog(title, image, description, writer, date, blog_body);

            if (result.error) {
                setFeedback(`Error: ${result.error}`);
            } else {
                setFeedback('Blog added successfully!');
                // Reset fields
                setTitle('');
                setImage('');
                setDescription('');
                setWriter('');
                setDate('');
                setBody('');
                // Navigate to the admin/blog page after success
                router.push('/admin/blog');
            }
        } catch (err) {
            setFeedback(`Unexpected error: ${err}`);
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-2xl font-bold mb-6">Create New Blog</h1>
            {feedback && <div className="mb-4 p-2 text-white bg-gray-800 rounded">{feedback}</div>}
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="form-group">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        type="text"
                        placeholder="Enter blog title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <Label htmlFor="image">Image URL</Label>
                    <Input
                        id="image"
                        type="url"
                        placeholder="Enter image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        id="description"
                        placeholder="Enter blog description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <Label htmlFor="writer">Writer</Label>
                    <Input
                        id="writer"
                        type="text"
                        placeholder="Enter writer's name"
                        value={writer}
                        onChange={(e) => setWriter(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <Label htmlFor="date">Date</Label>
                    <Input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <Label htmlFor="body">Blog Body</Label>
                    <Textarea
                        id="body"
                        placeholder="Write your blog content here"
                        value={blog_body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <Button type="submit">Add Blog</Button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;
