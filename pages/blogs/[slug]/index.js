import { useEffect, useState } from "react";
import styles from "../../../styles/blogs.module.css";
import * as fs from "fs";
import { promisify } from "util";

const readfile = promisify(fs.readFile);

export default function BlogPost(props) {
  // const { slug } = params;

  const [blog, setblog] = useState(props?.data);
  console.log(blog?.title);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await
  //       const data = await response.json();
  //       setblog(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, []);
  return (
    <main className={styles.container}>
      <h1 className={styles.slugH1}>
        Blog Post:<span>{blog?.title}</span>{" "}
      </h1>

      <p>
        {blog?.content}
        {blog?.description}
      </p>
      <h3>
        Auther :<span>{blog?.author}</span>
      </h3>
    </main>
  );
}

// export async function getServerSideProps(context) {
//   // Fetch data from external API

//   const { slug } = context.query;
//   const res = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
//   const data = await res.json();
//   // Pass data to the page via props
//   return { props: { data } };
// }

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "cssFlexboxGuide" } },
      { params: { slug: "GuideToNode" } },
      { params: { slug: "UnderstandingReactjs" } },
    ],
    fallback: true, // Set to "true" or "blocking" depending on your preference
  };
}

export async function getStaticProps(context) {
  try {
    const { slug } = context.params;
    console.log(slug);
    const data = await readfile(`blogData/${slug}.JSON`, "utf-8");
    return {
      props: { data: JSON.parse(data) },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { data: null },
    };
  }
}
