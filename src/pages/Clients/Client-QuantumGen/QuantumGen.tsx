import Button from "components/Button/Button";
import { QuantumGenContainer, QuantumGenInfo, QuantumGenTitle } from "./styles";
import { useNavigate } from "react-router-dom";
import { ButtonContainer } from "../styles";

function QuantumGen() {
  const CompanyName = "QuantumGen Healthcare";

  const navigate = useNavigate();
  const goToPreviusPage = () => {
    navigate("/clients");
  };

  return (
    <QuantumGenContainer>
      <QuantumGenTitle>{CompanyName}</QuantumGenTitle>
      <QuantumGenInfo>
        QuantumGen Healthcare is an innovative biotechnology company focused on
        developing advanced medical solutions using quantum technologies. They
        are working on creating new pharmaceuticals, diagnostic tools, and
        treatment methods based on principles of quantum physics. The company
        actively explores the applications of quantum computing and quantum
        biology to improve medical practice and treat various diseases.
      </QuantumGenInfo>
      <QuantumGenInfo>
        Their research initiatives include the development of quantum-inspired
        algorithms for drug discovery, quantum-enhanced imaging techniques for
        early disease detection, and quantum cryptography for securing medical
        data. QuantumGen Healthcare collaborates with leading academic
        institutions and pharmaceutical companies to accelerate the translation
        of quantum technologies from the lab to the clinic, with the ultimate
        goal of personalized, precision medicine.
      </QuantumGenInfo>
      <ButtonContainer>
        <Button name="Go back" onButtonClick={goToPreviusPage} />
      </ButtonContainer>
    </QuantumGenContainer>
  );
}

export default QuantumGen;
