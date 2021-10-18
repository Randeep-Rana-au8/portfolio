import styles from "../styles/Home.module.css";
import Image from "next/image";
const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectHero}>
        <h2>About Me</h2>
      </div>
      <div className={styles.project}>
        <div className={styles.box}>
          <Image src="/Images/randeeprana.jpg" alt="randeep-rana" width={400} height={400} />
        </div>
        <div className={styles.box}>
          <h2>
            I am a full stack developer who writes, clean, elegant and efficient code. I enjoy
            turning complex problems into simple, beautiful and intuitive designs. When I'm not
            pushing pixels, you'll find me travelling, playing cricket or working out in gym.
            <br />
            <br />I have good experience working with Reactjs, Redux, Nextjs, Javascript, Nodejs,
            Expressjs and Mongodb. For Design I usually use plain css, sass and material ui.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default about;
