import styles from "./Options.module.css";

// const handleClick = (event) => {
//   console.log('Button clicked'); 
//   event.currentTarget.style.backgroundColor = '#9d5523';
//   event.currentTarget.style.borderColor = 'transparent';  
// };

// const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => (
//   <div className={styles.container}>
//     <button onClick={(e) => { updateFeedback("good"); handleClick(e); }}>Good</button>
//     <button onClick={(e) => { updateFeedback("neutral"); handleClick(e); }}>Neutral</button>
//     <button onClick={(e) => { updateFeedback("bad"); handleClick(e); }}>Bad</button>
//     {totalFeedback > 0 ? <button onClick={(e) => {resetFeedback(); handleClick(e); }}>Reset</button> : ''}
//   </div>
// );

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => (
  <div className={styles.container}>
    <button onClick={() => updateFeedback("good")}>Good</button>
    <button onClick={() => updateFeedback("neutral")}>Neutral</button>
    <button onClick={() => updateFeedback("bad")}>Bad</button>
    {totalFeedback > 0 ? <button onClick={resetFeedback}>Reset</button> : ''}
  </div>
);

export default Options;