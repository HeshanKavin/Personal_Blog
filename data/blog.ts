"use server";

import { createClient } from '@/utils/supabase/server';

const supabase = await createClient();

export const fetchBlogs = async () => {
    try {
        let { data: blog, error } = await supabase
            .from('blog')
            .select('*')

    } catch (error) {
        console.log(error);
    }
}
fetchBlogs();