import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/blog.module.css'

function blog() {
  const [blog, setBlogs] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs").then((a) => {
      return a.json()
    })
    .then((parsed) => {
      setBlogs(parsed)
    })
  },[])
  return (
    <>
      <main className={styles.main}>
      <h2>Popular blogs</h2>
        <div className="blogs">
          {blog.map((blogitem) => {
          return <div key={blogitem.slug} className={styles.blogitem}>
                  <Link href={`/blogpost/${blogitem.slug}`}><a><h3>{blogitem.title}</h3></a></Link>
                  <p className={styles.blogitemp}>{blogitem.content.substr(0,150)}....</p>
                 </div>
          })}
        </div> 
      </main>   
    </>
  )
}

export default blog