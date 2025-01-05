'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/admin', 'layout')
    redirect('/admin')
}

export async function signup(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/login', 'layout')
    redirect('/login')
}
export const logout = async () => {
    const supabase = await createClient();  // Await the client creation

    // Sign out from the current session
    const { error } = await supabase.auth.signOut();

    // Handle any errors that may occur during sign-out
    if (error) {
        console.error('Error logging out:', error.message);
        redirect("/error"); // Redirect to an error page if logout fails 
    }

    // Revalidate the path to ensure the layout is updated
    revalidatePath("/login", "layout");

    // Redirect to the login page
    redirect("/login");
}