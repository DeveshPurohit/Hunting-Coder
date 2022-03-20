import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/blog.module.css";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

function Blog(props) {
  console.log(props);
  const [blog, setBlogs] = useState(props.allBlogs);
  const [count, setcount] = useState(4)

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count+4}`)
    setcount(count+4)
    let data = await d.json()
    setBlogs(data)
  };

  return (
    <>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blog.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allCount !== blog.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blog.map((blogitem) => {
            return (
              <div key={blogitem.slug} className={styles.blogitem}>
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <a>
                    <h3>{blogitem.title}</h3>
                  </a>
                </Link>
                <p className={styles.blogitemp}>
                  {blogitem.metadesc.substr(0, 150)}....
                </p>
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <button className={styles.btn}>Read more</button>
                </Link>
              </div>
            );
          })}
        </InfiniteScroll>
        
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allCount = data.length
  let allBlogs = [];
  for (let index = 0; index < 4; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs , allCount }, // will be passed to the page component as props
  };
}

export default Blog;