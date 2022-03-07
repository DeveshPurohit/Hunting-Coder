import React, { useState , useEffect } from 'react'
import styles from '../../styles/blogpost.module.css'

const slug = (props) => {
  const [blog, setBlog] = useState(props.myblogs)
  
  return (
    <>
      <main className={styles.main}>
      <div className={styles.container}>
        <h2>{blog.title }</h2>
        <hr/>
        <p>{blog.content}</p>
        </div>
      </main>     
    </>
  )
}

export async function getServerSideProps(context) {
  const {slug} = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myblogs = await data.json()

  return {
    props: {myblogs}, // will be passed to the page component as props
  }
}

export default slug