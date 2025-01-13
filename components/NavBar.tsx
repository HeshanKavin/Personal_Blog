import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { ModeToggle } from './ModeToggle';
import NavigationMenuDemo from './NavigationMenuDemo';
import SocialMedia from './SocialMedia';

const NavBar = () => {
    return (
        <nav className='h-14 bg-background/60 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between z-10'>
            <div className='font-bold text-xl'>
                DreamForge
            </div>
            <NavigationMenuDemo />
            <SocialMedia />
            <div className='flex items-center space-x-4'>
                <FaSearch className='text-xl cursor-pointer ' />
                <ModeToggle />
            </div>
        </nav>
    )
}

export default NavBar