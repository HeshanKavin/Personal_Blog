// app/admin/layout.tsx
'use client';
import { ModeToggle } from "@/components/ModeToggle";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { AppSidebar } from "@/components/admin/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true);
    // const [user, setUser] = useState<any>(null);

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const supabase = createClient();
    //         const { data: user, error } = await supabase.auth.getUser();

    //         // If there's no user or an error, redirect to the login page
    //         if (error || !user) {
    //             redirect("/login");
    //             return;
    //         }

    //         setUser(user); // Set user data when authenticated
    //         setLoading(false); // Set loading to false when done fetching user
    //     };

    //     fetchUser();
    // }, []);

    useEffect(() => {
        const fetchUser = async () => {
            const supabase = createClient();
            const { data: user, error } = await supabase.auth.getUser();

            // If there's no user or an error, redirect to the login page
            if (error || !user) {
                redirect("/login");
                return;
            }

            setLoading(false); // Set loading to false when done fetching user
        };

        fetchUser();
    }, []);


    // Show loading state while waiting for the session check
    if (loading) {
        return <div>Loading...</div>;
    }

    // Once the user is authenticated, render the page content
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="absolute top-4 right-4">
                <ModeToggle />
            </div>
            <main className="">
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    );
};

export default AdminLayout;
