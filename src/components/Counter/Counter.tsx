import "./styles.css";
import Button from "components/Button/Button";
import { useState } from "react";
import { CounterProps } from "./types";


function Counter({count, onMinus, onPlus} : CounterProps) {

  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button onButtonClick={onMinus} name="-" />
      </div>
      <p>{count}</p>
      <div className="button-control">
        <Button onButtonClick={onPlus} name="+" />
      </div>
    </div>
  );
}

export default Counter;