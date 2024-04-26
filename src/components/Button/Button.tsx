import {StyledButton} from './styles';
import { ButtonProps } from './types'

function Button({ name, type = "button", disabled = false, onButtonClick }: ButtonProps) {
  return (
      <StyledButton disabled={disabled}>{name}</StyledButton>
  );
}

export default Button;