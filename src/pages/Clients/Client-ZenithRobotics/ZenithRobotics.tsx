import Button from "components/Button/Button";
import { ZenithRoboticsContainer, ZenithRoboticsInfo, ZenithRoboticsTitle } from "./styles";

function ZenithRobotics() {
  const CompanyName = "Zenith Roboticss";
  const CompanyInfo =
    "Zenith Robotics is a leading developer of automated solutions for manufacturing facilities. They specialize in creating robotic systems that enhance production efficiency and reduce labor costs. Their robots are utilized across various industries including automotive manufacturing, electronics, and food processing.";

  return (
    <ZenithRoboticsContainer>
      <ZenithRoboticsTitle>{CompanyName}</ZenithRoboticsTitle>
      <ZenithRoboticsInfo>{CompanyInfo}</ZenithRoboticsInfo>
      <Button name="Go back"/>
    </ZenithRoboticsContainer>
  );
}

export default ZenithRobotics;
