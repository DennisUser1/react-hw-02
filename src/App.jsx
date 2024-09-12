import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import "./App.css";

const App = () => {
  const defaultFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    return savedFeedback || defaultFeedback;
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const totalFeedback = Object.values(feedback).reduce((acc, value) => acc + value, 0);

  const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  const resetFeedback = () => {
    setFeedback(defaultFeedback);
  };

  return (
    <div className="background">
      <div className="box-blur">
        <Description />
        <div className="container">
          <div className="feedback-container">
            {totalFeedback > 0 && (
              <Feedback
                good={feedback.good}
                neutral={feedback.neutral}
                bad={feedback.bad}
                total={totalFeedback}
                positive={positiveFeedback}
              />
            )}
          </div>
          <div className="options-container">
            <Options
              updateFeedback={updateFeedback}
              resetFeedback={resetFeedback}
              totalFeedback={totalFeedback}
            />
            {totalFeedback === 0 && <Notification />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
