import ProjectSection from "../components/ProjectSection";
import styles from "../styles/Home.module.css";
import { projectsData } from "../data/projects";
const projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectHero}>
        <h2>My Projects</h2>
      </div>
      <div className={styles.projectsContainer}>
        {projectsData.map((data, key) => (
          <ProjectSection key={key} data={data} />
        ))}
      </div>
    </div>
  );
};

export default projects;
