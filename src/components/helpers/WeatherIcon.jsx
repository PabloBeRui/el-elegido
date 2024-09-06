import { ApiFetch } from "./ApiFetch";

//iconos de mui del tiempo

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import GrainIcon from "@mui/icons-material/Grain";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import { Icon } from "@mui/material";

const appid = "";

export const WeatherIcon = () => {
  const { data, error, loading } = ApiFetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=43.3685&lon=-8.4181&appid=${appid}`
  );

  const weatherId = data[0].id;

  const getWeatherIcon = (weatherId) => {
    if (weatherId >= 200 && weatherId <= 232) {
      return <ThunderstormIcon />; // Tormenta
    } else if (weatherId >= 300 && weatherId <= 321) {
      return <GrainIcon />; // Llovizna
    } else if (weatherId >= 500 && weatherId <= 531) {
      return <GrainIcon />; // Lluvia
    } else if (weatherId >= 600 && weatherId <= 622) {
      return <AcUnitIcon />; // Nieve
    } else if (weatherId === 800) {
      return <WbSunnyIcon />; // Cielo despejado
    } else if (weatherId >= 801 && weatherId <= 804) {
      return <CloudIcon />; // Nublado
    } else {
      return <CloudIcon />; // por defecto
    }
  };

  loading && console.log(loading);
  error && console.log(`Error:  ${error}`);

  return <Icon>getWeatherIcon(weatherId)</Icon>;
};
