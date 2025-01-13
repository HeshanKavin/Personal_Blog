import React from 'react'
import Link from 'next/link'
import SocialMedia from './SocialMedia';

export function Footer() {
    return (
        <footer className="bg-background/60 border-t px-8 py-6 backdrop-blur">
            <div className="flex flex-col items-center md:items space-y-4">
                {/* Logo and Name */}
                <div className="flex flex-col items-center justify-center md:items-start">
                    <div className="font-bold text-xl">DreamForge</div>
                </div>

                {/* Social Media Icons */}
                <SocialMedia />

                {/* Navigation Links */}
                <div className="flex flex-col space-y-2 md:flex-row text-center md:text-left md:space-x-6 md:space-y-0 text-sm">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <Link href="/about" className="hover:underline">
                        About
                    </Link>
                    <Link href="/blog" className="hover:underline">
                        Blogs
                    </Link>
                    <Link href="/contact" className="hover:underline">
                        Contact
                    </Link>
                    {/* <Link href="/privacy" className="hover:underline">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="hover:underline">
                        Terms of Service
                    </Link> */}
                </div>

                {/* Email Address */}
                <div className="text-sm text-muted-foreground">
                    Contact us at:{' '}
                    <a
                        href="mailto:hkd9482@gmail.com"
                        className="text-blue-600 hover:underline"
                    >
                        hkd9482@gmail.com
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} DreamForge. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
