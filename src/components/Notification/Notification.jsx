import styles from "./Notification.module.css";

const Notification = () => (
  <div className={styles.container}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path fill="#492002" fillRule="nonzero" d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2Zm0 9a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0v-8a1 1 0 0 0-1-1Zm0-4.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"/></svg>
    <p className={styles.message}>Feedback has not been provided yet.</p>
  </div>
);

export default Notification;