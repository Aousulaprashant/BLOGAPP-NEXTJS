import React from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
const NavBar = () => {
  return (
    <div className={styles.navbardiv}>
      <ul className={styles.navbar}>
        <li className={styles.list}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.list}>
          <Link href="/blog">Blogs</Link>
        </li>
        <li className={styles.list}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default NavBar;
