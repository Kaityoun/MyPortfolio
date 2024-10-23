import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/bbyme.jpg"
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'

const about = () => {
    return(
        <>
            <Head>
                <title>About Me</title>
                <meta name = "description" content= "any description"/>
            </Head>
            <main className= 'flex w-full flex-col items-center justify-center'>
                <Layout className = "pt-10">
                <AnimatedText text = "About Me" className='mb-16'/>
                <div className='grid w-full grid-cols-8'>
                    <div className ='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                        <p className='font-medium'>
                            I’m a computer science student who loves creating immersive experiences. Whether it’s a videogame or user-friendly website, I love finding ways to blend art and technology!
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded 2x1 border-2 border-solid border-dark bg-light p-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded 2x1 bg-dark' />
                        <Image src={profilePic} alt="Bby Kaitlyn" className='w-full h-auto rounded 2x1'/>
                    </div>
                </div>
                <Skills/>
                <Experience/>
                </Layout>
            </main>
        
        </>
    )
}

export default about