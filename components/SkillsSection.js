import Image from "next/image";
import styles from "../styles/Home.module.css";
import { skillsObj } from "../data/skills";

const SkillsSection = () => {
  console.log(skillsObj);
  return (
    <div className={styles.skillsSection}>
      <h1 style={{ textAlign: "center" }}>My Skills</h1>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsImage}>
          <Image src="/Images/nextjs.png" alt="reactjs" width={180} height={150} />
        </div>
        <div className={styles.skillsImage}>
          <Image src="/Images/react.png" alt="reactjs" width={160} height={150} />
        </div>

        <div className={styles.skillsImage}>
          <Image src="/Images/nodejs.png" alt="reactjs" width={160} height={150} />
        </div>
        <div className={styles.skillsImage}>
          <Image src="/Images/mongodb.png" alt="reactjs" width={160} height={150} />
        </div>
        <div className={styles.skillsImage}>
          <Image src="/Images/html.png" alt="reactjs" width={160} height={150} />
        </div>
        <div className={styles.skillsImage}>
          <Image src="/Images/css.png" alt="reactjs" width={160} height={150} />
        </div>
        <div className={styles.skillsImage}>
          <Image src="/Images/js.png" alt="reactjs" width={160} height={150} />
        </div>
        <div className={styles.skillsImage}>
          <Image src="/Images/materialUi.png" alt="reactjs" width={170} height={150} />
        </div>
        <div className={styles.skillsImage}>
          <Image src="/Images/Redux.png" alt="Redux" width={190} height={150} />
        </div>
        <div className={styles.skillsImage}>
          <Image src="/Images/Expressjs.png" alt="Expressjs" width={280} height={150} />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
