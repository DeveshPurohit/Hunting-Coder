import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../styles/blog.module.css'
import * as fs from 'fs';

function Blog(props) {
  console.log(props)
  const [blog, setBlogs] = useState(props.allBlogs)
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
                  <p className={styles.blogitemp}>{blogitem.metadesc.substr(0,150)}....</p>
                  <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read more</button></Link>
                 </div>
          })}
        </div> 
      </main>   
    </>
  )
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata")
  let myfile
  let allBlogs = []
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
      myfile = await fs.promises.readFile(("blogdata/" + item) , 'utf-8')
      allBlogs.push(JSON.parse(myfile))
  }
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default Blog

