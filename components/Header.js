import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const Header = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 200) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <header className={scrollNav ? `${styles.header} ${styles.scroll}` : styles.header}>
      <div className={styles.logo}>
        <Link href="/">RR</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
