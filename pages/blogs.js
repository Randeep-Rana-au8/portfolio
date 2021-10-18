import Head from "next/head";
import styles from "../styles/Home.module.css";
const blogs = () => {
  return (
    <>
      <Head>
        <title>About | Rana</title>
        <meta name="description" content="Randeep Rana Full stack developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.projectHero}>
          <h2>My Blogs</h2>
        </div>
        <div className={styles.project}>
          <p>Blogs are Coming Soon</p>
        </div>
      </div>
    </>
  );
};

export default blogs;
