import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface ButtonPropsStyled  {
  mainButton?: boolean
}

const commonBoxStyles= css`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Lesson08Component = styled.div`
${commonBoxStyles};
padding: 40px;
gap: 15px;
`;
export const BoxComponent = styled.div`
${commonBoxStyles};
  width: 150px;
  height: 250px;
  background: #E5D4C6;
`;

export const ButtonComponents = styled.button<ButtonPropsStyled>`
width: 200px;
height: 70px;
border: none;
/* background-color: #6BE36C; */
border-radius: 6px;
padding: 10px;
background:  ${({mainButton}) => mainButton ? '#6BE36C':'#6BE3BE'};
cursor: pointer;

`
