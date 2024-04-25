import { InputComponent, LabelElement, InputElement } from "./styles";
import { InputProps } from "./types";

function Input({ name, type, placeholder, label, onInputChange }: InputProps) {
  return (
    <InputComponent>
      <LabelElement>{label}</LabelElement>
      <InputElement
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}>
        </InputElement>
    </InputComponent>
  );
}

export default Input;
