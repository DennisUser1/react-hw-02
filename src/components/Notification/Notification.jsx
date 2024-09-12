import styles from "./Notification.module.css";

const Notification = () => (
  <div className={styles.container}>
    <p className={styles.message}>Feedback has not been provided yet.</p>
  </div>
);

export default Notification;