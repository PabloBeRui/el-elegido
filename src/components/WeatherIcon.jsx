import { ApiFetch } from "./helpers/ApiFetch";

//iconos de mui del tiempo

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import GrainIcon from "@mui/icons-material/Grain";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import { Box, Tooltip } from "@mui/material";

//Api Key almacenada como variable de entorno

const appid = process.env.REACT_APP_WEATHER_API_KEY;

//Llamo a la API de OpenWeatherMap a través del comoponente ApiFetch
export const WeatherIcon = () => {
  const { data } = ApiFetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=43.3685&lon=-8.4181&appid=${appid}`
  );

  //id del clima
  // Comprobamos si `data` y `data.weather` existen con optional chaining, en caso contrario mostramos el ícono por defecto
  const weatherId = data?.weather?.[0]?.id || null;

  //icono segun id, aplico tooltip propio de mui para
  const getWeatherIcon = (weatherId) => {
    if (weatherId >= 200 && weatherId <= 232) {
      return (
        <Tooltip title="Hoy hay tormenta">
          <ThunderstormIcon />
        </Tooltip>
      ); // Tormenta
    } else if (weatherId >= 300 && weatherId <= 321) {
      return (
        <Tooltip title="Hoy hay un poco de llovizna">
          <GrainIcon />
        </Tooltip>
      ); // Llovizna
    } else if (weatherId >= 500 && weatherId <= 531) {
      return (
        <Tooltip title="Hoy está lloviendo">
          <GrainIcon />
        </Tooltip>
      ); // Lluvia
    } else if (weatherId >= 600 && weatherId <= 622) {
      return (
        <Tooltip title="Hoy está nevado">
          <AcUnitIcon />
        </Tooltip>
      ); // Nieve
    } else if (weatherId === 800) {
      return (
        <Tooltip title="Hoy el cielo está despejado">
          <WbSunnyIcon />
        </Tooltip>
      ); // Cielo despejado
    } else if (weatherId >= 801 && weatherId <= 804) {
      return (
        <Tooltip title="Hoy está Nublado">
          <CloudIcon />
        </Tooltip>
      ); // Nublado
    } else {
      // Si hay algún problema en la carga del tiempo, muestra icono del restuarante por defecto
      return (
        <Tooltip title="El Elegido te da la bienvenida">
          <Box
            component="img"
            src="media/images/NavMenu/logo_el_elegido.png"
            alt="El Elegido te da la bienvenida"
            sx={{
              width: { xs: "2rem", md: "3rem" },
              height: "auto",
              borderRadius: 2,
            }}
          />
        </Tooltip>
      );
    }
  };

  return <Box>{getWeatherIcon(weatherId)}</Box>;
};
