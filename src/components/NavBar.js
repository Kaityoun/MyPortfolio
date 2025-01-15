import React, {useState} from 'react'
import Link from 'next/link';
import Logo from './Logo';
import {useRouter} from 'next/router'
import {GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons';
import {motion} from "framer-motion"
import useThemeSwitcher from './hooks/useThemeSwitcher';

// CustomLink Component
const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    console.log(router)
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
                h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>
                &nbsp;
            </span>
        </Link>
    );
};

// NavBar Component
const NavBar = () => {
    const [mode, setmode] = useThemeSwitcher();
    return (
        <header className='
            w-full px-32 py-8 font-medium flex items-center justify-between relative
        '>
            <nav className='flex space-x-4'>
                <CustomLink href="/" title="Home" className='mr-4' />
                <CustomLink href="/about" title="About" className='mx-4' />
            </nav>

            <nav className='flex space-x-4'>
                <CustomLink href="/projects" title="Projects" className='mx-4' />
                <CustomLink href="/articles" title="Articles" className='ml-4' />

                <motion.a href = "https://www.linkedin.com/in/kaitlyn-youn/" target = {"_blank"}
                whileHover={{y:-2}}
                className="w-6 mr-3"
                >
                    <LinkedInIcon/>
                </motion.a>
                
                <motion.a href = "https://github.com/Kaityoun" target = {"_blank"}
                 whileHover={{y:-2}}
                className="w-6 mr-3"
                >
                    <GithubIcon/>
                </motion.a>

                <button 
                onClick = {() => setmode(mode === "light" ? "dark" : "light")}
                >
                {
                    mode === "dark" ?
                    <SunIcon className = {"fill-dark"} /> 
                    : <MoonIcon className = {"fill-dark"} />
                }
                </button>
            </nav>


        <div className = 'absolute left-[50%] top-2 translate-x-[-50%'>
        <Logo />
        </div>
        </header>
    );
};

export default NavBar;
