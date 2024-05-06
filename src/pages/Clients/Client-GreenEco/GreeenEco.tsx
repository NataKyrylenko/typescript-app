import Button from "components/Button/Button";
import { GreenEcoContainer, GreenEcoInfo, GreenEcoTitle } from "./styles";

function GreenEco() {
  const CompanyName = "GreenEco Solutions";
  const CompanyInfo =
    "GreenEco Solutions is engaged in developing and implementing innovative technologies in the field of renewable energy and environmental sustainability. The company specializes in solar energy systems, wind turbines, and other eco-friendly solutions for homes, businesses, and commercial properties. Their products help to reduce carbon emissions and lessen dependence on fossil fuels.";
  return (
    <GreenEcoContainer>
      <GreenEcoTitle>{CompanyName}</GreenEcoTitle>
      <GreenEcoInfo>{CompanyInfo}</GreenEcoInfo>
      <Button name="Go back" />
    </GreenEcoContainer>
  );
}

export default GreenEco;
