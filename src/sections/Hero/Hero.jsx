import styles from './HeroStyles.module.css';
import heroImg from '../../assets/elliot-img.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Elliot
          <br />
          Sekgobela
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://x.com/Elliotsek" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https:// github.com/code50/136261850" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://za.linkedin.com/in/elliot-sekgobela-ab924819a" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Innovative Software Developer with extensive experience in front-end and back-end development.
Proficient in JavaScript, Java, Python, HTML, CSS, React, and Node.js. Skilled in MongoDB and
optimizing system performance. </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
