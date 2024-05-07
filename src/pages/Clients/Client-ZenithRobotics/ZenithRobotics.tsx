import Button from "components/Button/Button";
import {
  ZenithRoboticsContainer,
  ZenithRoboticsInfo,
  ZenithRoboticsTitle,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { ButtonContainer } from "../styles";

function ZenithRobotics() {
  const CompanyName = "Zenith Robotics";

  const navigate = useNavigate();
  const goToPreviusPage = () => {
    navigate("/clients");
  };

  return (
    <ZenithRoboticsContainer>
      <ZenithRoboticsTitle>{CompanyName}</ZenithRoboticsTitle>
      <ZenithRoboticsInfo>
        Zenith Robotics is a leading developer of automated solutions for
        manufacturing facilities. They specialize in creating robotic systems
        that enhance production efficiency and reduce labor costs. Their robots
        are utilized across various industries including automotive
        manufacturing, electronics, and food processing.
      </ZenithRoboticsInfo>
      <ZenithRoboticsInfo>
        The company's headquarters are located in Silicon Valley, with regional
        offices in key manufacturing hubs worldwide, such as Shanghai,
        Stuttgart, and Detroit. Zenith Robotics has established strategic
        partnerships with major automotive OEMs and electronics manufacturers to
        integrate their robotic solutions into assembly lines, resulting in
        increased productivity and quality control.
      </ZenithRoboticsInfo>
      <ButtonContainer>
        <Button name="Go back" onButtonClick={goToPreviusPage} />
      </ButtonContainer>
    </ZenithRoboticsContainer>
  );
}

export default ZenithRobotics;
