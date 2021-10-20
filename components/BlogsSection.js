import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const BlogsSection = ({ data }) => {
  const { title, description, imageSrc, imageInLeft, liveLink } = data;
  const size = useWindowSize();

  return (
    <div className={styles.project}>
      {(size.width <= 786 || imageInLeft) && (
        <div className={`${styles.box} ${styles.imageBox}`}>
          <a href={liveLink} target="_blank" rel="noreferrer">
            <Image src={imageSrc} alt={title} width="500px" height="300" />
          </a>
        </div>
      )}
      <div
        className={`${styles.box} ${styles.projectDetails}`}
        style={imageInLeft ? { padding: "0 50px" } : { padding: "0 50px" }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.projectBtns}>
          <a href={liveLink} target="_blank" rel="noreferrer">
            <button className={styles.projectBtn}>Live Link</button>
          </a>
        </div>
      </div>

      {size.width > 786 && !imageInLeft && (
        <div className={`${styles.box} ${styles.imageBox}`}>
          <a href={liveLink} target="_blank" rel="noreferrer">
            <Image src={imageSrc} alt={title} width="500px" height="300" />
          </a>
        </div>
      )}
    </div>
  );
};

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default BlogsSection;
