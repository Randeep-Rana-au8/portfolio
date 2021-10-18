import styles from "../styles/Home.module.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3>RR © {new Date().getFullYear()} All rights reserved.</h3>
      <div className={styles.icons}>
        <div className={styles.socialIcon}>
          <FaFacebook />
        </div>
        <div className={styles.socialIcon}>
          <FaInstagram />
        </div>
        <div className={styles.socialIcon}>
          <FaLinkedin />
        </div>
        <div className={styles.socialIcon}>
          <FaTwitter />
        </div>
        <div className={styles.socialIcon}>
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
