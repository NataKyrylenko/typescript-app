import Button from "components/Button/Button";
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
  const [isShowCatInfo, setIsShowCatInfo] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getCatData = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const result = await response.json();

      if (!response.ok) {
        throw Object.assign(new Error("API Error "), {
          response: result,
        });
      } else {
        setInfo((prevInfo) => [...prevInfo, result.fact]);
        setIsShowCatInfo(true);
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

  const showCatlData = () => {
    getCatData();
    setIsLoading(true);
  }
  const deleteAllData = () => {
    setInfo([]);
    setIsShowCatInfo(false);
  }

  return (
    <Lesson10Wrapper>
      <ButtonsContainer>
        <Button name="GET MORE INFO" onButtonClick={showCatlData}></Button>
        <Button name="DELETE ALL DATA" onButtonClick={deleteAllData}></Button>
      </ButtonsContainer>
      <SpinnerContainer isLoading={isLoading}>
        <Spinner />
      </SpinnerContainer>
      <InfoContainer isShowCatInfo={isShowCatInfo}>
        {info.map((info, index) => (
          <InfoText>{info}</InfoText>
        ))}
      </InfoContainer>
    </Lesson10Wrapper>
  );
}

export default Lesson10;