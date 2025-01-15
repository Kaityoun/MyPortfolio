import react from 'react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'

const articles = () => {
    return(
        <>
        <Head>
                <title>Articles</title>
                <meta name = "description" content= "any description"/>
            </Head>
            <main>
                <Layout className = 'pt-16'>
                    <AnimatedText text = "Articles" className='mb-16'/>
                    <ul>
                        <li>Featured Articles</li>
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles