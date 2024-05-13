import { createContext, useState } from "react";
import {
  InputSearch,
  WeatherButton,
  WeatherHeader,
  WeatherSearchComponent,
  WeatherTitle,
  WeatherWrapper,
} from "./styles";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";



function Weather() {
  const [city, setCity] = useState<string>("");

const WeatherContext = createContext();

  const APP_ID = "98a15a296a4e42da4b093ad3c1e8a315";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`;

  const getWeatherData = async () => {
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    try {
      const response = await fetch(apiUrl);
      const result = await response.json();
     console.log(result);

      if (!response.ok) {
        throw Object.assign(new Error("API Error "), {
          response: result,
        });
      } else {
        
      }
    } catch (error) {
      console.log(error);
    } finally {
      //   setIsLoading(false);
    }
  };



  return (
    <WeatherContext.Provider value={city}>
    <WeatherWrapper>
      <WeatherHeader>
        <WeatherTitle>Weather App</WeatherTitle>
      </WeatherHeader>

      <WeatherSearchComponent>
        <InputSearch onChange={(e) => setCity(e.target.value)} />
        <WeatherButton onClick={getWeatherData}>Search</WeatherButton>
      </WeatherSearchComponent>

      <WeatherInfo/>
    </WeatherWrapper>
    </WeatherContext.Provider>
  );
}

export default Weather;
