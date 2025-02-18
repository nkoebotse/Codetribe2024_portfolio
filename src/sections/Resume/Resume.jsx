
import styles from './ResumeStyles.module.css';

function Resume() {
  return (
    <section id="resume" className={styles.container}>
      <h1>Resume</h1>
      <div className={styles.resumeContent}>
        <h2>Elliot Sekgobela</h2>
        <p>Software Developer</p>
        <h3>Skills</h3>
        <ul>
          <li>JavaScript, React, Node.js</li>
          <li>HTML, CSS, Bootstrap</li>
          <li>Python, Java</li>
        </ul>
        <h3>Experience</h3>
        <p>CodeTribe Academy Trainee (2023 - Present)</p>
        <h3>Education</h3>
        <p>Bachelor of Science in Computer Science</p>
      </div>
    </section>
  );
}

export default Resume;