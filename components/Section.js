import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
// import ImgSrc from "../Image/myimage.jpg";

const Section = ({ data }) => {
  console.log(data);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>{data.title}</h2>
      <div className={styles.section}>
        <div className={`${styles.box} ${styles.sectionImage}`}>
          <Image
            className={styles.img}
            src={data.imageSrc}
            alt={data.title}
            width={500}
            height={500}
            // layout="fill"
            // sizes="50vw"
          />
        </div>
        <div className={`${styles.box} ${styles.sectionData}`}>
          <h2>
            I am a full stack developer who writes, clean, elegant and efficient code. I enjoy
            turning complex problems into simple, beautiful and intuitive designs. When I'm not
            pushing pixels, you'll find me travelling, playing cricket or working out in gym.
            <br />
            <br />I have good experience working with Reactjs, Redux, Nextjs, Javascript, Nodejs,
            Expressjs and Mongodb. For Design I usually use plain css, sass and material ui.
          </h2>
          <Link href="/about">
            <button className={styles.readMoreBtn}>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Section;
