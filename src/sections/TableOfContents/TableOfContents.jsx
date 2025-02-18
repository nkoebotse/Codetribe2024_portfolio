
import styles from './TableOfContentsStyles.module.css';

function TableOfContents() {
  return (
    <section id="table-of-contents" className={styles.container}>
      <h1>Table of Contents</h1>
      <ol>
        <li><a href="#personal-introduction">Personal Introduction</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#skills-matrix">Skills Matrix</a></li>
        <li><a href="#individual-projects">Individual Projects</a></li>
        <li><a href="#group-projects">Group Projects</a></li>
        <li><a href="#assessments">Assessments</a></li>
        <li><a href="#feedback-and-reflections">Feedback and Reflections</a></li>
        <li><a href="#post-program-goals">Post-Program Goals</a></li>
      </ol>
    </section>
  );
}

export default TableOfContents;