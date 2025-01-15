import react from 'react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'

const FeaturedArticle = ({img, title, time, summary, link}) => {
    return(
        <li>
            <Link href = {link} target = "_blank" 
            className = 'w-full cursor-pointer overflow-hidden rounded-lg'>
            <Image src = {img} alt={title} className = "w-full h-auto"/>
            </Link>
            <Link href = {link} target = '_blank'>
            
            </Link>
        </li>
    )
}
const articles = () => {
    return(
        <>
        <Head>
                <title>Articles</title>
                <meta name = "description" content= "any description"/>
            </Head>
            <main className = 'w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className = 'pt-16'>
                    <AnimatedText text = "Articles" className='mb-16'/>
                    <ul className= 'grid grid-col-2 gap-16'>
                        <li>Featured Article-1</li>
                        <li>Featured Article-2</li>
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles