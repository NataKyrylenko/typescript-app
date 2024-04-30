import Button from "components/Button/Button";
import {v4} from 'uuid';
import {
  ButtonsContainer,
  InfoContainer,
  InfoText,
  Lesson10Wrapper,
  SpinnerContainer,
} from "./styles";
import { useEffect, useState } from "react";
import Spinner from "components/Spinner/Spinner";

function Lesson10() {
  const [info, setInfo] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCatData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://catfact.ninja/fact");
      const result = await response.json();

      if (!response.ok) {
        throw Object.assign(new Error("API Error "), {
          response: result,
        });
      } else {
        setInfo((prevInfo) => [...prevInfo, result.fact]);
        
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCatData();
  }, []);

  const catFactElement = info.map((info:string) => {
     return <InfoText key={v4()}>{info}</InfoText>
  })

  // const showCatlData = () => {
  //   getCatData();
  //   setIsLoading(true);
  // }
  const deleteAllData = () => {
    setInfo([]);
    //setIsShowCatInfo(false);
  }

  return (
    <Lesson10Wrapper>
      
      <ButtonsContainer>
        <Button name="GET MORE INFO" onButtonClick={getCatData}></Button>
        <Button name="DELETE ALL DATA" onButtonClick={deleteAllData}></Button>
      </ButtonsContainer>
      <SpinnerContainer isLoading={isLoading}><Spinner /></SpinnerContainer>
      
      <InfoContainer isShowCatInfo={!!info.length}>{catFactElement}</InfoContainer>
  
    </Lesson10Wrapper>
  );
}

export default Lesson10;