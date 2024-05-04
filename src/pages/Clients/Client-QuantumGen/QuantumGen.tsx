import Button from "components/Button/Button";
import { QuantumGenContainer, QuantumGenInfo, QuantumGenTitle } from "./styles";

function QuantumGen() {
  const CompanyName = "QuantumGen Healthcare";
  const CompanyInfo =
    "QuantumGen Healthcare is an innovative biotechnology company focused on developing advanced medical solutions using quantum technologies. They are working on creating new pharmaceuticals, diagnostic tools, and treatment methods based on principles of quantum physics. The company actively explores the applications of quantum computing and quantum biology to improve medical practice and treat various diseases.";

  return (
    <QuantumGenContainer>
      <QuantumGenTitle>{CompanyName}</QuantumGenTitle>
      <QuantumGenInfo>{CompanyInfo}</QuantumGenInfo>
      <Button name="Go back"/>
    </QuantumGenContainer>
  );
}

export default QuantumGen;
