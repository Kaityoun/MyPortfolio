import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

// CustomLink Component
const CustomLink = ({ href, title, className = "" }) => {
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className='
                h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease duration-300
            '>&nbsp;</span>
        </Link>
    );
};

// NavBar Component
const NavBar = () => {
    return (
        <header className='
            w-full px-32 py-8 font-medium flex items-center justify-between relative
        '>
            <nav className='flex space-x-4'>
                <CustomLink href="/" title="Home" className='mr-4' />
                <CustomLink href="/about" title="About" className='mx-4' />
            </nav>

            <div className='
                absolute inset-x-1/2 transform -translate-x-1/2 flex justify-center
            '>
                <Logo />
            </div>

            <nav className='flex space-x-4'>
                <CustomLink href="/projects" title="Projects" className='mx-4' />
                <CustomLink href="/articles" title="Articles" className='ml-4' />
            </nav>
        </header>
    );
};

export default NavBar;
