import styled from "@emotion/styled";
//import GreenEco from "./Client-GreenEco/GreeenEco";
import { GreenEco, Quantum, Zenith } from "assets";

export const ClientsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  margin: 40px auto ;
`;

export const ClientsPageTitle = styled.h2`
    font-size: 25px;
    color: #06006f;
`;

export const ClientsLogosContainer = styled.div`
display: flex;
flex-direction: row;
gap: 25px;
`

export const ClientsLogoContainer = styled.div`
  width: 200px;
  height: 200px;
  padding: 20px;
  border: 2px solid #06006f;
  border-radius: 5px;
`;

export const ClientsLogoGreenEco = styled.img`
  width: 100%;
  height: 100%;
`;
ClientsLogoGreenEco.defaultProps = {src: GreenEco};

export const ClientsLogoQuantumGen= styled.img`
  width: 100%;
  height: 100%;
`;
ClientsLogoQuantumGen.defaultProps = {src: Quantum};

export const ClientsLogoZenith = styled.img`
  width: 100%;
  height: 100%;
`;
ClientsLogoZenith.defaultProps = {src: Zenith};
