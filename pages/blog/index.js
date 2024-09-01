import React, { useEffect, useState } from "react";
import styles from "../../styles/blogs.module.css";
import Link from "next/link";
import * as fs from "fs";
import { promisify } from "util";
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

const blog = (props) => {
  console.log(props);
  const [data, setData] = useState(props.alldata);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/getAll")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(response.statusText);
  //       }
  //       return response.json();
  //     })
  //     .then((parse) => {
  //       setData(parse);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // }, []);

  return (
    <div className={styles.blogmain}>
      <h1>
        BLOG<span>S</span>
      </h1>
      <div className={styles.blogheader}>
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <div key={item.id}>
                <Link href={`/blogs/${item.title}`}>
                  <h2>{item.title}</h2>
                </Link>
                <p>{item.description}</p>
                <hr></hr>
              </div>
            );
          })
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};

// This also gets called at build time
export async function getStaticProps(context) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  console.log(context);

  let alldata = [];
  const data = await readdir("blogData");

  let file;
  for (let i = 0; i < data.length; i++) {
    file = await readFile("blogData/" + data[i], "utf-8");
    alldata.push(JSON.parse(file));
  }
  // const res = await fetch();
  // const post = await res.json();

  // Pass post data to the page via props
  return {
    props: {
      alldata,
    },
  };
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch("http://localhost:3000/api/getAll");
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

export default blog;
