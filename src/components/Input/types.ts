type InputType = "button" | "checkbox" | "email" | "number" | "password" | "radio" | "reset" | "search" | "tel" | "text" | "time" | undefined;

export interface InputProps {
    name: string,
    type?: InputType,
    placeholder: string,
    label:string,
    onInputChange: () => void,

}