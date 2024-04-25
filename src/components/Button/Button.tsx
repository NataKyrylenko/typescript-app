import {StyledButton} from './styles';
import { ButtonProps } from './types'

function Button({ name, type = "button", disabled = false, onButtonClick }: ButtonProps) {
  return (
    <div>
      <StyledButton disabled={disabled}>{name}</StyledButton>
      
      
      {/* // <button className="button-component" type={type} onClick={onButtonClick}>
    //   {name}
    // </button> */}
    </div>
    
  );
}

export default Button;