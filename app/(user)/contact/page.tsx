"use client";

import React from "react";
import Image from "next/image";
import { useForm, FormProvider } from "react-hook-form";
import contactImage from "@/public/1.jpg";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const ContactPage: React.FC = () => {
    const formMethods = useForm({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
        mode: "onBlur", // Enable validation on blur
    });

    const onSubmit = (data: { name: string; email: string; message: string }) => {
        console.log("Form Data:", data);
        alert("Thank you for reaching out! We will get back to you soon.");
        formMethods.reset(); // Reset form fields
    };

    return (
        <div className="max-w-6xl mx-auto my-10 p-6 h-screen">
            <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
            <div className="flex flex-col lg:flex-row shadow-lg rounded-lg overflow-hidden">
                {/* Left Side: Image */}
                <div className="lg:w-1/2 relative flex flex-col items-center p-2 m-5">
                    <div className="w-full h-full flex justify-center items-center pb-4 border-b-4">
                        <Image
                            src={contactImage}
                            alt="Contact Us"
                            width={500}
                            height={200}
                            className="rounded-l-lg object-cover sm:object-contain"
                        />
                    </div>
                    <div className="flex items-center justify-center space-x-8 mt-4">
                        <a
                            href="https://www.facebook.com/profile.php?id=61559174863893&mibextid=ZbWKwL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-all"
                        >
                            <FaFacebook className="text-4xl" />
                        </a>
                        <a
                            href="https://instagram.com/dreamforge88"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:text-pink-700 transition-all"
                        >
                            <FaInstagram className="text-4xl" />
                        </a>
                        <a
                            href="https://www.youtube.com/@DreamForge-cw2gr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-600 hover:text-red-800 transition-all"
                        >
                            <FaYoutube className="text-4xl" />
                        </a>
                        <a
                            href="https://x.com/DreamForge2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-600 transition-all"
                        >
                            <FaXTwitter className="text-4xl" />
                        </a>
                    </div>
                </div>


                {/* Right Side: Form */}
                <div className="lg:w-1/2 p-6 lg:border-l-4 m-5">
                    <FormProvider {...formMethods}>
                        <form onSubmit={formMethods.handleSubmit(onSubmit)} className="space-y-4 m-4">
                            <FormField
                                control={formMethods.control}
                                name="name"
                                rules={{ required: "Name is required." }}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={formMethods.control}
                                name="email"
                                rules={{
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address.",
                                    },
                                }}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="Your Email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={formMethods.control}
                                name="message"
                                rules={{ required: "Message is required." }}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Your Message" rows={5} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div>
                                <Button type="submit" className="w-full py-3 rounded-md focus:outline-none">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
