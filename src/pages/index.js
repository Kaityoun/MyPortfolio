import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/Worm.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import {LinkArrow } from '@/components/Icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
    <main className= 'flex items-center text-dark w-full min-h-screen dark:text-light'> 
      <Layout className = 'pt-0'>
        <div className = "flex items-center justify-between w-full">
          <div className = 'w-1/2'>
            <Image src={profilePic} alt= "kaitlyn" className= 'w-full h-auto'/>
          </div>
          <div className = 'w-1/2 flex flex-col items-center self-center'>
            <h1></h1>
            <AnimatedText text = "Hello World!" className='!text-6x1 !text-left'/>
            <p className='my-4 text-base font-medium' >
            I’m a computer science student who loves creating immersive experiences. Whether it’s a videogame or user-friendly website, I love finding ways to blend art and technology!
            </p>
            <div className= 'flex items-center self-start mt-2'>
              <Link href="/dummy.pdf" target={"_blank"}
              className="flex items-center bg-dark text-light p-2.5 px-6
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
              border-2 border-solid border-transparent hover:border-dark
              dark:bg-light dark:text-dark"
              download={true}
              >Resume <LinkArrow className={"w-6 ml-1"}/>
              
              </Link>
              <Link href="mailto:abcd@gmailcom" target={"_blank"}
              className= 'ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'
              >Contact</Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
    </>
  )
}
