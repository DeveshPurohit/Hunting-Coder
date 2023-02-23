import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

function Navbar() {
  const router = useRouter()
  return (
    <>
        <nav className="">
            <ul className='flex justify-center font-semibold space-x-14 text-lg'>
                <Link href="/"><a className={router.pathname === "/" ? "" : "text-gray-500"}><li>Home</li></a></Link>
                <Link href="/about"><a className={router.pathname === "/about" ? "" : "text-gray-500"}><li>About</li></a></Link>
                <Link href="/blog"><a className={router.pathname === "/blog" ? "" : "text-gray-500"}><li>Blog</li></a></Link>
                <Link href="/contact"><a className={router.pathname === "/contact" ? "" : "text-gray-500"}><li>Contact</li></a></Link>
            </ul>
      </nav>
    </>
  )
}

export default Navbar