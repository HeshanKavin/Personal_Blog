import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialMedia = () => {
    return (
        <div className="flex items-center space-x-4">
            <a
                href="https://www.facebook.com/profile.php?id=61559174863893&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-all"
            >
                <FaFacebook className="text-xl" />
            </a>
            <a
                href="https://instagram.com/dreamforge88"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 transition-all"
            >
                <FaInstagram className="text-xl" />
            </a>
            <a
                href="https://www.youtube.com/@DreamForge-cw2gr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800 transition-all"
            >
                <FaYoutube className="text-xl" />
            </a>
            <a
                href="https://x.com/DreamForge2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition-all"
            >
                <FaXTwitter className="text-xl" />
            </a>
        </div>
    );
};

export default SocialMedia;
