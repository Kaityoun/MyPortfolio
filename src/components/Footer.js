import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light'>
      <Layout className='py-8 flex items-center justify-between'>
            {/* All Rights Reserved */}
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

            {/* Built With Love by Kaitlyn */}
            <div className='flex items-center'>
            Built with 
            <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span> 
            by Kaitlyn
            </div>

            {/* Link to Contact */}
            <Link href='/' className='hover:underline'>Say Hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer
