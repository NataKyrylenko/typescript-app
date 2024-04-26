import Button from "components/Button/Button";
import { useState } from "react";
import { CounterProps } from "./types";
import { CounterComponent,  ButtonControl, CounterElement} from "./styles";


function Counter({count, onMinus, onPlus} : CounterProps) {

  return (
    <CounterComponent>
      <ButtonControl>
        <Button onButtonClick={onMinus} name="-" />
      </ButtonControl>
      <CounterElement></CounterElement>
      <ButtonControl>
        <Button onButtonClick={onPlus} name="+" />
      </ButtonControl>
    </CounterComponent>
  );
}

export default Counter;