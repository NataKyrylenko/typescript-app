import Button from "components/Button/Button";
import { CreenEcoContainer, CreenEcoInfo, CreenEcoTitle } from "./styles";

function CreenEco() {
  const CompanyName = "GreenEco Solutions";
  const CompanyInfo =
    "GreenEco Solutions is engaged in developing and implementing innovative technologies in the field of renewable energy and environmental sustainability. The company specializes in solar energy systems, wind turbines, and other eco-friendly solutions for homes, businesses, and commercial properties. Their products help to reduce carbon emissions and lessen dependence on fossil fuels.";
  return (
    <CreenEcoContainer>
      <CreenEcoTitle>{CompanyName}</CreenEcoTitle>
      <CreenEcoInfo>{CompanyInfo}</CreenEcoInfo>
      <Button name="Go back" />
    </CreenEcoContainer>
  );
}

export default CreenEco;
