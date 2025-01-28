import styles from './NavBarStyles.module.css'; // Use .module.css for scoped CSS

const NavBar = () => {
  return (
    <section className={styles.container}>

        <div className={styles.header}>
      <div className={styles.logo}>
        <h2>elliot</h2>
      </div>

      <div className={styles.navLinks}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#tech-stack">Tech Stack</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      </div>
    </section>
  );
};

export default NavBar;
