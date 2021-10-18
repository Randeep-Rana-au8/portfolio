import styles from "../styles/Home.module.css";
const HeroSection = () => {
  return (
    <main className={styles.main}>
      <div className={styles.videoBg}>
        <video className={styles.video} src="/Images/Astronaut.mp4" autoPlay loop></video>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>I'm Randeep Rana</h1>
        <p className={styles.description}>Full Stack Web Developer 🚀</p>
      </div>
    </main>
  );
};

export default HeroSection;
