import { ApiFetch } from "./helpers/ApiFetch";

//iconos importados  del del tiempo

// Importamos los iconos de la carpeta assets/icons/weatherIcons
import ThunderstormIcon from "../assets/icons/weatherIcons/thunderstorm.png";
import DrizzleIcon from "../assets/icons/weatherIcons/drizzle.png";
import RainIcon from "../assets/icons/weatherIcons/rain.png";
import SnowIcon from "../assets/icons/weatherIcons/snow.png";
import ClearIcon from "../assets/icons/weatherIcons/clear.png";
import CloudIcon from "../assets/icons/weatherIcons/cloud.png";
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
      return <img src={ThunderstormIcon} alt="Tormenta" title="Tormenta" width="24" />; // Tormenta
    } else if (weatherId >= 300 && weatherId <= 321) {
      return <img src={DrizzleIcon} alt="Llovizna" title="Llovizna" width="24" />; // Llovizna
    } else if (weatherId >= 500 && weatherId <= 531) {
      return <img src={RainIcon} alt="Lluvia" title="Lluvia" width="24" />; // Lluvia
    } else if (weatherId >= 600 && weatherId <= 622) {
      return <img src={SnowIcon} alt="Nieve" title="Nieve" width="24" />; // Nieve
    } else if (weatherId === 800) {
      return <img src={ClearIcon} alt="Cielo despejado" title="Cielo despejado" width="24" />; // Cielo despejado
    } else if (weatherId >= 801 && weatherId <= 804) {
      return <img src={CloudIcon} alt="Nublado" width="24" />; // Nublado
    } else {
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
