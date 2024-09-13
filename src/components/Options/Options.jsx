import styles from "./Options.module.css";

const handleClick = (event) => {
  console.log('Button clicked'); 
  event.currentTarget.blur(); 
};

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => (
  <div className={styles.container}>
    <button onClick={(e) => { updateFeedback("good"); handleClick(e); }}>Good</button>
    <button onClick={(e) => { updateFeedback("neutral"); handleClick(e); }}>Neutral</button>
    <button onClick={(e) => { updateFeedback("bad"); handleClick(e); }}>Bad</button>
    {totalFeedback > 0 ? <button onClick={(e) => {resetFeedback(); handleClick(e); }}>Reset</button> : ''}
  </div>
);

export default Options;