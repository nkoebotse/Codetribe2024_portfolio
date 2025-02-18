
import styles from './PostProgramGoalsStyles.module.css';

function PostProgramGoals() {
  return (
    <section id="post-program-goals" className={styles.container}>
      <h1>Post-Program Goals</h1>
      <div className={styles.content}>
        <h2>Short-Term Goals</h2>
        <ul>
          <li>Secure a job in web development.</li>
          <li>Build 2-3 more portfolio projects.</li>
        </ul>
        <h2>Long-Term Goals</h2>
        <ul>
          <li>Become a full-stack developer.</li>
          <li>Contribute to open-source projects.</li>
        </ul>
      </div>
    </section>
  );
}

export default PostProgramGoals;