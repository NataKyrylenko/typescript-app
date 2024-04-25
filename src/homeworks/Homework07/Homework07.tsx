import Feedback from "components/Feedback/Feedback";
import "./styles.css";

import { useState } from "react";

function Homework07() {
  const [countLike, setCountLike] = useState<number>(0);
  const [countDislike, setCountDislike] = useState<number>(0);

  const onLike = (): void => {
    setCountLike((prevValue) => prevValue + 1);
  };

  const onDislike = (): void => {
    setCountDislike((prevValue) => prevValue + 1);
  };

  const resetResult = (): void => {
    setCountLike(0);
    setCountDislike(0);
  };

  return (
    <div className="homework07-container">
      <Feedback
      
        countLike={countLike}
        countDislike={countDislike}
        onLike={onLike}
        onDislike={onDislike}
        resetResult={resetResult}
      />
    </div>
  );
}
export default Homework07;
