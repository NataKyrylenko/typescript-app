//import GreenEco from "./Client-GreenEco/GreeenEco";
//import QuantumGen from "./Client-QuantumGen/QuantumGen";
//import ZenithRobotics from "./Client-ZenithRobotics/ZenithRobotics";
import { ClientsLogoContainer, ClientsLogoGreenEco, ClientsLogoQuantumGen, ClientsLogoZenith, ClientsLogosContainer, ClientsPageContainer, ClientsPageTitle } from "./styles";

function Clients() {
    return (
        <ClientsPageContainer>
            <ClientsPageTitle>
               Our Clients:
            </ClientsPageTitle>
            
            <ClientsLogosContainer>
            <ClientsLogoContainer>
                <ClientsLogoGreenEco/>
            </ClientsLogoContainer>

            <ClientsLogoContainer>
                <ClientsLogoQuantumGen/>
            </ClientsLogoContainer>

            <ClientsLogoContainer>
                <ClientsLogoZenith/>
            </ClientsLogoContainer>

            {/* <GreenEco/>
            <QuantumGen/>
            <ZenithRobotics/> */}
            </ClientsLogosContainer>
        </ClientsPageContainer>
    )
}
export default Clients;