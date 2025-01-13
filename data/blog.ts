'use server'

import { createClient } from "@/utils/supabase/server"

const getAllBlogs = async () => {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from('blog')
        .select('*')

    return {
        error: error?.message,
        blog: data,
    }
}


//add blogs 
const addBlog = async (title: string, image: string, description: string, writer: string, date: string, blog_body: string) => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('blog')
        .insert([{ title, image, description, writer, date, blog_body }]);

    return {
        error: error?.message,
        blog: data,
    };
};

// Update an existing blog
const updateBlog = async (id: number, title: string, image: string, description: string, writer: string, date: string, blog_body: string) => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('blog')
        .update({ title, image, description, writer, date, blog_body })
        .eq('id', id);  // Assuming 'id' is the primary key

    return {
        error: error?.message,
        blog: data,
    };
};

// Delete a blog
const deleteBlog = async (id: number) => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('blog')
        .delete()
        .eq('id', id);  // Assuming 'id' is the primary key

    return {
        error: error?.message,
        blog: data,
    };
};

const getBlogById = async (id: number) => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('blog')
        .select('*')
        .eq('id', id) // Fetching the blog with the specified ID
        .single(); // Ensures only one row is returned

    return {
        error: error?.message,
        blog: data,
    };
};

export { getAllBlogs, addBlog, updateBlog, deleteBlog, getBlogById };