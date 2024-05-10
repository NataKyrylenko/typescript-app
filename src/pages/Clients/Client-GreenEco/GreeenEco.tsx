import Button from "components/Button/Button";
import { GreenEcoContainer, GreenEcoInfo, GreenEcoTitle } from "./styles";
import { useNavigate } from "react-router-dom";
import { ButtonContainer } from "../styles";

function GreenEco() {
  const CompanyName = "GreenEco Solutions";

  const navigate = useNavigate();
  const goToPreviusPage = () => {
    navigate(-1);
  };

  return (
    <GreenEcoContainer>
      <GreenEcoTitle>{CompanyName}</GreenEcoTitle>
      <GreenEcoInfo>
        GreenEco Solutions is engaged in developing and implementing innovative
        technologies in the field of renewable energy and environmental
        sustainability. The company specializes in solar energy systems, wind
        turbines, and other eco-friendly solutions for homes, businesses, and
        commercial properties. Their products help to reduce carbon emissions
        and lessen dependence on fossil fuels.
      </GreenEcoInfo>
      <GreenEcoInfo>
        Their research and development efforts focus not only on improving the
        efficiency of existing renewable energy technologies but also on
        pioneering new approaches such as algae-based biofuels and kinetic
        energy harvesting. GreenEco Solutions has received multiple awards for
        their contributions to environmental conservation and has been
        recognized by industry organizations for their commitment to corporate
        social responsibility.
      </GreenEcoInfo>
      <ButtonContainer>
        <Button name="Go back" onButtonClick={goToPreviusPage} />
      </ButtonContainer>
    </GreenEcoContainer>
  );
}

export default GreenEco;
