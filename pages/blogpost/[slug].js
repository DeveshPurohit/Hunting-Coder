import React, { useState , useEffect } from 'react'
import styles from '../../styles/blogpost.module.css'
import * as fs from 'fs'; 

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog)
  
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <h2>{blog && blog.title}</h2>
          <hr/>
          <p>{blog && blog.content}</p>
        </div>
      </main>     
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug:"how-to-learn-django",
                  slug:"how-to-learn-nextjs",              
                  slug:"how-to-learn-python",
                  slug:"how-to-learn-react"
                }  
      }
    ],
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;


  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  }
}

export default Slug