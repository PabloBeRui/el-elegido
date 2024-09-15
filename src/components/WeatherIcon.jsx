import { Box, Tooltip, Typography } from "@mui/material"; // Añadimos Typography para mostrar la temperatura
import { ApiFetch } from "./helpers/ApiFetch";

// Importamos los íconos de la carpeta assets/icons/weatherIcons
import ThunderstormIcon from "../assets/icons/weatherIcons/thunderstorm.png";
import DrizzleIcon from "../assets/icons/weatherIcons/drizzle.png";
import RainIcon from "../assets/icons/weatherIcons/rain.png";
import SnowIcon from "../assets/icons/weatherIcons/snow.png";
import ClearIcon from "../assets/icons/weatherIcons/clear.png";
import CloudIcon from "../assets/icons/weatherIcons/cloud.png";

// Api Key almacenada como variable de entorno
const appid = process.env.REACT_APP_WEATHER_API_KEY;

// Llamo a la API de OpenWeatherMap a través del componente ApiFetch
export const WeatherIcon = () => {
  const { data } = ApiFetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=43.3685&lon=-8.4181&appid=${appid}`
  );

  // id del clima
  // Comprobamos si `data` y `data.weather` existen con optional chaining, en caso contrario mostramos el ícono por defecto
  const weatherId = data?.weather?.[0]?.id || null;

  // Hago lo mismo para obtener la temperatura desde el campo `main.temp` en kelvins
  const weatherTemperature = data?.main?.temp || null;

  // Convertimos la temperatura de kelvin a celsius (agregado nuevo)
  const temperatureInCelsius = weatherTemperature
    ? Math.round(weatherTemperature - 273.15)
    : null;

  // icono según id
  const getWeatherIcon = (weatherId) => {
    if (weatherId >= 200 && weatherId <= 232) {
      return (
        <Box display="flex" alignItems="center" gap={1}>
          <img
            src={ThunderstormIcon}
            alt="Tormenta"
            title="Tormenta"
            width="24"
          />
          {/* Temperatura */}
          <Typography variant="h6" color="primary">
            {`${temperatureInCelsius}°C`}
          </Typography>
        </Box>
      ); // Tormenta
    } else if (weatherId >= 300 && weatherId <= 321) {
      return (
        <Box display="flex" alignItems="center" gap={1}>
          <img src={DrizzleIcon} alt="Llovizna" title="Llovizna" width="24" />

          <Typography variant="h6" color="primary">
            {`${temperatureInCelsius}°C`}
          </Typography>
        </Box>
      ); // Llovizna
    } else if (weatherId >= 500 && weatherId <= 531) {
      return (
        <Box display="flex" alignItems="center" gap={1}>
          <img src={RainIcon} alt="Lluvia" title="Lluvia" width="24" />

          <Typography variant="h6" color="primary">
            {`${temperatureInCelsius}°C`}
          </Typography>
        </Box>
      ); // Lluvia
    } else if (weatherId >= 600 && weatherId <= 622) {
      return (
        <Box display="flex" alignItems="center" gap={1}>
          <img src={SnowIcon} alt="Nieve" title="Nieve" width="24" />

          <Typography variant="h6" color="primary">
            {`${temperatureInCelsius}°C`}
          </Typography>
        </Box>
      ); // Nieve
    } else if (weatherId === 800) {
      return (
        <Box display="flex" alignItems="center" gap={1}>
          <img
            src={ClearIcon}
            alt="Cielo despejado"
            title="Cielo despejado"
            width="24"
          />

          <Typography variant="h6" color="primary">
            {`${temperatureInCelsius}°C`}
          </Typography>
        </Box>
      ); // Cielo despejado
    } else if (weatherId >= 801 && weatherId <= 804) {
      return (
        <Box display="flex" alignItems="center" gap={1}>
          <img src={CloudIcon} alt="Nublado" title="Nublado" width="24" />

          <Typography variant="h6" color="primary">
            {`${temperatureInCelsius}°C`}
          </Typography>
        </Box>
      ); // Nublado
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
