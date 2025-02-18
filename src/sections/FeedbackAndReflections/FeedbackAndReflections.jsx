
import styles from './FeedbackAndReflectionsStyles.module.css';

function FeedbackAndReflections() {
  return (
    <section id="feedback-and-reflections" className={styles.container}>
      <h1>Feedback and Reflections</h1>
      <div className={styles.content}>
        <h2>Facilitator Feedback</h2>
        <p>Elliot has shown great progress in understanding React and building dynamic web applications.</p>
        <h2>Self-Reflection</h2>
        <p>
          During my time at CodeTribe Academy, I have grown significantly in my technical skills and problem-solving abilities.
          I am particularly proud of my ability to work in teams and deliver projects on time.
        </p>
      </div>
    </section>
  );
}

export default FeedbackAndReflections;