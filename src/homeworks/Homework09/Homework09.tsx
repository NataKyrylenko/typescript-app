import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { Homework09Container, ResultContainer, ResultElement } from "./styles";
import { ChangeEvent, useState } from "react";

function Homework09 () {
    const [inputValue1,setInputValue1] = useState<string>('');
    const [inputValue2,setInputValue2] = useState<string>('');
    const [isShowResult,setIsShowResult] = useState<boolean>(false);

    const onChangeInput1 = (event:ChangeEvent<HTMLInputElement>):void => {
        setInputValue1(event.target.value);
    };

    const onChangeInput2 = (event:ChangeEvent<HTMLInputElement>): void => {
        setInputValue2(event.target.value);
    };

    const buttonClick = () => {
        //setIsShowResult(true);
        setIsShowResult(!isShowResult)
    }


    return (
    <Homework09Container>
        <Input value={inputValue1} name="first text" type="text" placeholder="Input text 1" label='first text' onInputChange={onChangeInput1}/>
        <Input value={inputValue2} name="second text" type="text" placeholder="Input text 2" label='second text' onInputChange={onChangeInput2}/>
        <Button name="Send text" onButtonClick={buttonClick}/>
        <ResultContainer isShowResult={isShowResult}>
            <ResultElement>{inputValue1}</ResultElement>
            <ResultElement>{inputValue2}</ResultElement>
        </ResultContainer>
    </Homework09Container>
)

}

export default Homework09;