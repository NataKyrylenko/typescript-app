import { useContext } from "react";
import { WeatherInfoCard, WeatherInfoContainer } from "./styles";

function WeatherInfo() {

  const weather = useContext(WeatherContext);
    return (
    <WeatherInfoContainer>
      <WeatherInfoCard>
        
      </WeatherInfoCard>
    </WeatherInfoContainer>
    )
  }
  
  export default WeatherInfo;