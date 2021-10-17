import styles from "../styles/Home.module.css";
import Image from "next/image";
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
          <h2>{data.description}</h2>
        </div>
      </div>
    </>
  );
};

export default Section;
