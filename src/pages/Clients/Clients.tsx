//import GreenEco from "./Client-GreenEco/GreeenEco";
//import QuantumGen from "./Client-QuantumGen/QuantumGen";
//import ZenithRobotics from "./Client-ZenithRobotics/ZenithRobotics";
import {
  ClientsLogoContainer,
  ClientsLogoGreenEco,
  ClientsLogoQuantumGen,
  ClientsLogoZenith,
  ClientsLogosContainer,
  ClientsPageContainer,
  ClientsPageTitle,
} from "./styles";
import { ClientsProps } from "./types";

function Clients({ children }: ClientsProps) {
  return (
    <ClientsPageContainer>
      <ClientsPageTitle>Our Clients:</ClientsPageTitle>

      <ClientsLogosContainer>
        <ClientsLogoContainer to="/clients/greenEco">
          <ClientsLogoGreenEco />
        </ClientsLogoContainer>

        <ClientsLogoContainer to="/clients/quantumGen">
          <ClientsLogoQuantumGen />
        </ClientsLogoContainer>

        <ClientsLogoContainer to="/clients/zenithRobotics">
          <ClientsLogoZenith />
        </ClientsLogoContainer>
      </ClientsLogosContainer>
    </ClientsPageContainer>
  );
}
export default Clients;
