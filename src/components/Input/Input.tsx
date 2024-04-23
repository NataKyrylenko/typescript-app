import "./styles.css";
import { InputProps } from "./types";

function Input({name,type, placeholder, label, onInputChange}: InputProps) {
  return (
    <div className="input-wrapper">
        <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder} 
        onChange={onInputChange}
      />
    </div>
  );
}

export default Input;
