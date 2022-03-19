import React, { useState , useEffect } from 'react'
import styles from '../../styles/blogpost.module.css'
import * as fs from 'fs'; 

const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
  const [blog, setBlog] = useState(props.myBlog)
  
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <h2>{blog && blog.title}</h2>
          <hr/>
          {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)} />}
        </div>
      </main>     
    </>
  )
}

export async function getStaticPaths() {
  let allb = await fs.promises.readdir('blogdata')
  allb = allb.map((item) => {
    return {params: { slug: item.split('.')[0]}}
  })
  return {
    paths: allb,
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