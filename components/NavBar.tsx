import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaSearch } from 'react-icons/fa';
import { ModeToggle } from './ModeToggle';
import NavigationMenuDemo from './NavigationMenuDemo';

const NavBar = () => {
    return (
        <nav className='h-14 bg-background/60 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between z-10'>
            <div className='font-bold text-xl'>
                DreamForge
            </div>
            <NavigationMenuDemo />
            <div className='flex items-center space-x-4'>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className='text-xl it' />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className='text-xl ' />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className='text-xl' />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className='text-xl' />
                </a>
            </div>
            <div className='flex items-center space-x-4'>
                <FaSearch className='text-xl cursor-pointer ' />
                <ModeToggle />
            </div>
        </nav>
    )
}

export default NavBar