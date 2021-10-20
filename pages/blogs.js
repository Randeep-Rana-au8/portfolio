import Head from "next/head";
import styles from "../styles/Home.module.css";
import { blogsData } from "../data/blogs.js";
import BlogsSection from "../components/BlogsSection";
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
          {blogsData.map((blog) => (
            <BlogsSection key={blog.title} data={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default blogs;
