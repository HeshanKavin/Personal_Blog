import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="bg-background/60 border-t px-8 py-6 backdrop-blur">
            <div className="flex flex-col items-center md:items space-y-4">
                {/* Logo and Name */}
                <div className="flex flex-col items-center justify-center md:items-start">
                    <div className="font-bold text-xl">DreamForge</div>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook className="text-xl hover:text-primary" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className="text-xl hover:text-primary" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <FaYoutube className="text-xl hover:text-primary" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter className="text-xl hover:text-primary" />
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-2 md:flex-row text-center md:text-left md:space-x-6 md:space-y-0 text-sm">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <Link href="/about" className="hover:underline">
                        About
                    </Link>
                    <Link href="/category" className="hover:underline">
                        Category
                    </Link>
                    <Link href="/contact" className="hover:underline">
                        Contact
                    </Link>
                    <Link href="/privacy" className="hover:underline">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="hover:underline">
                        Terms of Service
                    </Link>
                </div>

                {/* Copyright */}
                <div className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} DreamForge. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
