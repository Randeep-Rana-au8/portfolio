import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Section from "../components/Section";
import styles from "../styles/Home.module.css";
import { aboutObj } from "../data/about";
import SkillsSection from "../components/SkillsSection";

export default function Home() {
  console.log(aboutObj);
  return (
    <div className={styles.app}>
      <Head>
        <title>Randeep Rana's Portfolio</title>
        <meta name="description" content="Randeep Rana Full stack developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {/* <Header /> */}
        <HeroSection />
        <Section data={aboutObj} />
        <SkillsSection />

        {/* <Section />
      <Section /> */}
      </div>
    </div>
  );
}
