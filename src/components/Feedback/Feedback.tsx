
import Button from "components/Button/Button";
import { useState } from "react";
import { FeedbackProps } from "./types";
import { FeedbackContainer, FeedbackComponent, FeedbackCounter } from "./styles";

function Feedback({
  countLike,
  countDislike,
  onLike,
  onDislike,
  resetResult,
}: FeedbackProps) {
  return (
    <FeedbackContainer>
      <FeedbackComponent>
        <FeedbackCounter>{countLike}</FeedbackCounter>
        <Button name="Like" onButtonClick={onLike} />
      </FeedbackComponent>
      <FeedbackComponent>
        <FeedbackCounter>{countDislike}</FeedbackCounter>
        <Button name="Dislike" onButtonClick={onDislike} />
      </FeedbackComponent>
      <FeedbackComponent>
        <Button name="Reset Results" onButtonClick={resetResult} />
      </FeedbackComponent>
    </FeedbackContainer>
  );
}

export default Feedback;
