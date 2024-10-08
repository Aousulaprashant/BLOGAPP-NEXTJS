import React from "react";
import styles from "../styles/page.module.css";
const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.js</code>
        </p> */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://aousulaprashanth-portfolio.netlify.app/"
          >
            By Prashanth
          </a>
        </div>
      </div>

      <div className={styles.middle}>
        <div>
          <p>Be A</p>
          <h1 className={styles.con}>
            BRAVE<span> CODER</span>
          </h1>
        </div>

        <img src="/codeimg.jpg" />
      </div>

      <h2 className={styles.latest}>Latest bloGs</h2>
      <div className="latest-blogs"></div>
    </main>
  );
};

export default Home;
