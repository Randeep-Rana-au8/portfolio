import styles from "../styles/Home.module.css";
const Section = ({ data }) => {
  return (
    <div className={styles.section}>
      <div className={`${styles.box} ${styles.sectionImage}`}>Image</div>
      <div className={`${styles.box} ${styles.sectionData}`}>Data</div>
    </div>
  );
};

export default Section;
