
import { TextareaComponent, TextareaElement,  TextareaLabelElement} from "./styles";
import { TextAreaProps } from "./types";

function TextArea({ placeholder, name, label }: TextAreaProps) {
    return (
        <TextareaComponent>
            <TextareaLabelElement>{label}</TextareaLabelElement>
            <TextareaElement placeholder={placeholder} name={name}></TextareaElement>
        </TextareaComponent>
    )
}

export default TextArea;