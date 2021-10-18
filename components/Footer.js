import styles from "../styles/Home.module.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3>RR © {new Date().getFullYear()} All rights reserved.</h3>
      <div className={styles.icons}>
        <a
          href="https://www.twitter.com/irandeeprana"
          target="_blank"
          rel="noreferrer"
          className={styles.socialIcon}
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/randeep_rana_official/"
          target="_blank"
          rel="noreferrer"
          className={styles.socialIcon}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/randeep-rana-dev/"
          target="_blank"
          rel="noreferrer"
          className={styles.socialIcon}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.twitter.com/irandeeprana"
          target="_blank"
          rel="noreferrer"
          className={styles.socialIcon}
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.twitter.com/irandeeprana"
          target="_blank"
          rel="noreferrer"
          className={styles.socialIcon}
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default Footer;
