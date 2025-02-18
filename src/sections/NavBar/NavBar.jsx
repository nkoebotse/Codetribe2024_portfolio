
import styles from './NavBarStyles.module.css';

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <h2>Elliot</h2>
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>
              <a href="#cover">Cover</a>
            </li>
            <li>
              <a href="#table-of-contents">Contents</a>
            </li>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#feedback-and-reflections">Feedback</a>
            </li>
            <li>
              <a href="#post-program-goals">Goals</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;