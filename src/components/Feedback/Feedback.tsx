import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback() {
  const [countLike, setCountLike] = useState<number>(0);
  const [countDislike, setCountDislike] = useState<number>(0);

  const onLike = ():void => {
    setCountLike((prevValue) => prevValue + 1);
  };

  const onDislike = ():void => {
      setCountDislike((prevValue) => prevValue + 1);
  };

  const resetResult = ():void => {
    setCountLike(0);
    setCountDislike(0);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-components">
        <p>{countLike}</p>
        <Button name="Like" onButtonClick={onLike} />
        
      </div>
      <div className="feedback-components">
        <p>{countDislike}</p>
        <Button name="Dislike" onButtonClick={onDislike} />
        
      </div>
      <div className="feedback-components">
        <Button name="Reset Results" onButtonClick={resetResult} />
      </div>
    </div>
  );
}

export default Feedback;
