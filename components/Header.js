import styles from "../styles/Home.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div>Logo</div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Blogs</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
