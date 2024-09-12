import styles from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positive }) => (
  <div className={styles.container}>
    <h2>Feedback Statistics</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive Feedback: {positive}%</p>
  </div>
);

export default Feedback;