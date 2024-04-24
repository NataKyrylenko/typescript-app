import "./styles.css";
import Button from "components/Button/Button";
import { useState } from "react";
import { FeedbackProps } from "./types";

function Feedback({
  countLike,
  countDislike,
  onLike,
  onDislike,
  resetResult,
}: FeedbackProps) {
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
