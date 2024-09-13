import styles from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positive }) => (
  <div className={styles.container}>
    <h2>Feedback Statistics</h2>
    <p>Good: <span className={styles.value}>{good}</span></p>
    <p>Neutral: <span className={styles.value}>{neutral}</span></p>
    <p>Bad: <span className={styles.value}>{bad}</span></p>
    <p>Total: <span className={styles.value}>{total}</span></p>
    <p>Positive Feedback: <span className={styles.value}>{positive}%</span></p>
  </div>
);
 
export default Feedback;