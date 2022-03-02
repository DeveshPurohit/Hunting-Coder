import { useRouter } from 'next/router'
import React, { useState , useEffect } from 'react'
import styles from '../../styles/blogpost.module.css'

const slug = () => {
  const [blog, setBlog] = useState([])
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const {slug} = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
      return a.json()
    })
    .then((parsed) => {
      setBlog(parsed)
    })
  },[router.isReady])
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

export default slug