import React from 'react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import project1 from "../../public/images/projects/project1.png"

const FeaturedProject = ({type, title, summary, img, link}) => {
    return(
        <article className = 'w-full flex items-center jusitfy-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'> 
        <Link href = {link} target = "_blank" 
        className = 'w-1/2 cursor-pointer overflow-hidden rounded-lg'>
            <Image src = {img} alt={title} className = "w-full h-auto"/>
        </Link>
        <div className = 'w-1/2 flex flex-col items-start justify-between p1-6'>
            <span className= 'text-primary font-medium text-xl' >{type}</span>
            <Link href = {link} target = "_blank"className = 'hover:underline underline-offset-2'>
            <h2 className = 'my-2 w-full text-left text-4x1 font-bold'>{title}</h2>
            </Link>
            <p>{summary}</p>
            <div>
            <Link href = {link} target = "_blank">Visit Project</Link>
            </div>
        </div>

        </article>
    )
}

const Project = ({type, title, img, link}) =>{
    return(
        <article className = 'w-full flex flex-col items-center justify-center rounded2xl border border-solid border-dark bg-light p-6 relative'>
              <Link href = {link} target = "_blank" 
        className = 'w-full cursor-pointer overflow-hidden rounded-lg'>
            <Image src = {img} alt={title} className = "w-full h-auto"/>
        </Link>
        <div className = 'w-full flex flex-col items-start justify-between'>
            <span className= 'text-primary font-medium text-xl' >{type}</span>
            <Link href = {link} target = "_blank"className = 'hover:underline underline-offset-2'>
            <h2 className = 'my-2 w-full text-left text-4x1 font-bold'>{title}</h2>
            </Link>
            <div>
            <Link href = {link} target = "_blank" className= 'ml-4 p-2 text-lg font-semibold'>Visit</Link>
            </div>
        </div>
        </article>
    )
}
const projects = () =>{
    return (
        <> 
         <Head>
                <title>Projects</title>
                <meta name = "description" content= "any description"/>
            </Head>
            <main className= 'w-full mb-16 flex flex-col items-center justify-center'> 
                <Layout className= 'pt-16' >
                    <AnimatedText text = "Animated Text" />

                    <div className = 'grid grid-col-12 gap-24'>
                        <div className='col-span-12'>
                           <FeaturedProject
                                title = "Starship Sanitation"
                                img = {project1}
                                summary = " A short game"
                                link = "/"
                                type ="Featured Project"
                           />
                        </div>
                        <div className='col-span-6'>
                        <Project
                                title = "Starship Sanitation"
                                img = {project1}
                                link = "/"
                                type ="Project"
                           />
                        </div>
                        <div className='col-span-6'>
                            Project-2
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects