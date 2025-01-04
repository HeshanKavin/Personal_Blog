'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export const logout = async () => {
    const supabase = await createClient();  // Await the client creation

    // Sign out from the current session
    const { error } = await supabase.auth.signOut();

    // Handle any errors that may occur during sign-out
    if (error) {
        console.error('Error logging out:', error.message);
        redirect("/error"); // Redirect to an error page if logout fails
        return;
    }

    // Revalidate the path to ensure the layout is updated
    revalidatePath("/login", "layout");

    // Redirect to the login page
    redirect("/login");
}
