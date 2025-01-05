"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signup, login } from "@/actions/auth"

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
});

export function LoginForm() {
    // Define the form using useForm and Zod schema
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    // 2. Define a submit handler.
    // async function onSubmit(values: z.infer<typeof formSchema>) {
    //     // Call the login function with email and password
    //     try {
    //         const formData = new FormData();
    //         formData.append('email', values.email);
    //         formData.append('password', values.password);

    //         await login(formData); // Pass FormData to the server-side login function
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    return (
        <Form {...form} >
            <form className="space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Login</h1>
                </div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Password" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-between">
                    <Button formAction={login} type="submit">Login</Button>
                    <Button formAction={signup} type="submit">Signup</Button>
                </div>
            </form>
        </Form>
    )
}
