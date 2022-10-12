import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/blog.module.css";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

function Blog(props) {
  console.log(props);
  const [blog, setBlogs] = useState(props.allBlogs);
  const [count, setcount] = useState(4);

  const fetchData = async () => {
    let d = await fetch(`https://huntingcoder-eta.vercel.app/api/blogs/?count=${count + 4}`);
    setcount(count + 4);
    let data = await d.json();
    setBlogs(data);
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
              <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
              <div className="-my-8 divide-y-2 divide-gray-100">
          {blog.map((blogitem) => {
            return (
                <div key={blogitem.slug} className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">
                      {blogitem.category}
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">
                      31 Aug 2022
                    </span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                      {blogitem.title}
                    </h2>
                    <p className="leading-relaxed">
                      Glossier echo park pug, church-key sartorial biodiesel
                      vexillologist pop-up snackwave ramps cornhole. Marfa 3
                      wolf moon party messenger bag selfies, poke vaporware
                      kombucha lumbersexual pork belly polaroid hoodie portland
                      craft beer.
                    </p>
                    <Link href={`/blogpost/${blogitem.slug}`}>
                    <a className="text-indigo-500 inline-flex items-center mt-4">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    </Link>
                  </div>
                </div>
                  );
                })}
              </div>
            </div>
          </section>
              {/* // <div key={blogitem.slug} className={styles.blogitem}>
              //   <Link href={`/blogpost/${blogitem.slug}`}>
              //     <a>
              //       <h3>{blogitem.title}</h3>
              //     </a>
              //   </Link>
              //   <p className={styles.blogitemp}>
              //     {blogitem.metadesc.substr(0, 150)}....
              //   </p>
              //   <Link href={`/blogpost/${blogitem.slug}`}>
              //     <button className={styles.btn}>Read more</button>
              //   </Link>
              // </div> */}
        </InfiniteScroll>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allCount = data.length;
  let allBlogs = [];
  for (let index = 0; index < 4; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs, allCount }, // will be passed to the page component as props
  };
}

export default Blog;
