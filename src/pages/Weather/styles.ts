import styled from "@emotion/styled";
import { WeatherBack } from "assets";

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 40px;
  background-image: url(${WeatherBack});
`;

export const WeatherHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  background-color: #122d4d80;
  border: 1px solid #d2d2d2;
`;

export const WeatherTitle = styled.h2`
  font-size: 24px;
  color: #ffffff;
`;

export const WeatherSearchComponent = styled.div`
display: flex;
gap: 14px;
margin: 0 auto;
width: 45%;
`;

export const InputSearch = styled.input`
width: 100%;
    padding: 12px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 40px;
    border: 1px solid #FFFFFF1A;
    background-color: rgba(255, 255, 255, 0.5);
    color: #ffffff;
`;

export const WeatherButton = styled.button`
    font-size: 20px;
    border-radius: 40px;
    padding: 8px 40px;
    background-color: #3678B4;
    border: none;
    color: #ffffff;
`;
