import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const NavBar = () => {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between relative'>
            <nav className='flex space-x-4'>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/articles">Articles</Link>
            </nav>

            <div className='absolute inset-x-1/2 transform -translate-x-1/2 flex justify-center'>
                <Logo />
            </div>

            <nav className='flex space-x-4'>
                <Link href="/" target="_blank">T</Link>
                <Link href="/" target="_blank">T</Link>
                <Link href="/" target="_blank">T</Link>
                <Link href="/" target="_blank">T</Link>
                <Link href="/" target="_blank">T</Link>
            </nav>
        </header>
    );
};

export default NavBar;
