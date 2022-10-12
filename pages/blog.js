import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/blog.module.css";
import * as fs from "fs";

function Blog(props) {
  const [blog, setBlogs] = useState(props.allBlogs);

  return (
    <>
      <main className={styles.main}>
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
                <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
              </div>
            </div>
          </section>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allCount = data.length;
  let allBlogs = [];
  for (let index = 0; index < allCount; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs, allCount }, // will be passed to the page component as props
  };
}

export default Blog;
