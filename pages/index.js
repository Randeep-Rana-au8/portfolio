import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Section from "../components/Section";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Randeep Rana's Portfolio</title>
        <meta name="description" content="Randeep Rana Full stack developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSection />
      <Section />
      <Section />
      <Section />
    </div>
  );
}
