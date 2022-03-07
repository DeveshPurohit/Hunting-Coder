import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/blog.module.css'

function blog(props) {
  console.log(props)
  const [blog, setBlogs] = useState(props.allblogs)
  // useEffect(() => {
    
  // },[])
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
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs")
  let allblogs = await data.json()
  return {
    props: {allblogs}, // will be passed to the page component as props
  }
}

export default blog

