"use client";

import React, { useState } from "react";

export default function AddBlogForm() {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        category: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add logic to send data to your backend
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl mb-5">Create a New Blog</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block text-sm font-medium">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        className="w-full border px-3 py-2"
                        rows={5}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium">
                        Category
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full border px-3 py-2"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
}
