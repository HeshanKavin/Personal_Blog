"use client";

import React, { useState } from 'react';
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
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState<string>('');

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment.trim()]);
            setNewComment('');
        }
    };

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
                className="w-full h-auto rounded-lg mb-4"
            />

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl mb-4">{blog.description}</p>

            {/* Writer and Date */}
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4">
                By {blog.writer} on {blog.date}
            </p>

            {/* Blog Body */}
            <div className="blog-body text-base sm:text-base lg:text-lg mb-6">
                <p>{blog.blog_body}</p>
            </div>

            {/* Comment Section */}
            <div className="comments-section mt-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">Comments</h2>

                {/* Display Comments */}
                <ul className="space-y-4 mb-6">
                    {comments.map((comment, index) => (
                        <li key={index} className="border-b pb-2 text-gray-800">
                            {comment}
                        </li>
                    ))}
                    {comments.length === 0 && (
                        <p className="text-gray-600">No comments yet. Be the first to comment!</p>
                    )}
                </ul>

                {/* Add Comment */}
                <div className="add-comment">
                    <textarea
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Write a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        rows={4}
                    />
                    <button
                        onClick={handleAddComment}
                        className="mt-2 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Add Comment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
