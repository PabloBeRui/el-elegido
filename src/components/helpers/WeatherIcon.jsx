import { ApiFetch } from "./ApiFetch";

//iconos de mui del tiempo

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import GrainIcon from "@mui/icons-material/Grain";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import { Box } from "@mui/material";

const appid = process.env.REACT_APP_WEATHER_API_KEY;

export const WeatherIcon = () => {
  const { data } = ApiFetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=43.3685&lon=-8.4181&appid=${appid}`
  );

  //id del clima

  // Comprobamos si `data` y `data.weather` existen, en caso contrario mostramos el ícono por defecto con optional chaining
  const weatherId = data?.weather?.[0]?.id || null;

  //icono segun id
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
      //Si hay algún problema en la carga del tiempo, muestra icono del local por defecto
      return (
        <Box
          component="img"
          src="media/images/NavMenu/logo_el_elegido.png"
          alt="description"
          sx={{ width: "10%", height: "auto", borderRadius: 2 }}
        />
      ); // por defecto
    }
  };

  return <Box>{getWeatherIcon(weatherId)}</Box>;
};
