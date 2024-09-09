import { Box, Typography } from "@mui/material"; // importo Box de MUI para organizar el layout
import { Carrusel } from "./helpers/Carrusel";
import { createArrayImagesOurRestaurant } from "./helpers/createArrayImagesOurRestaurant.js";

// Configuro el carrusel de react-SliderTrack, para ello consigo una configuración predefinida y ajusto ciertos parámetros, con un comentario en cada uno para futuras modificaciones.

const sliderSettings = {
  dots: true, // Muestra los puntos de navegación en la parte inferior del carrusel
  infinite: true, // Permite que el carrusel se desplace en un bucle infinito
  speed: 500, // Velocidad de transición entre las imágenes (en milisegundos)
  slidesToShow: 1, // Número de imágenes visibles a la vez (en este caso, una imagen por vez)
  slidesToScroll: 1, // Número de imágenes que se desplazarán cuando se navegue en el carrusel
  autoplay: true, // Habilita el desplazamiento automático de las imágenes
  arrows: false,
};

// Creo una variable con los valores sx de Box

const sxBoxSettings = {
  width: {
    xs: "90%", // Móviles
    sm: "80%", // Tablets
    md: "70%", // Laptops pequeñas
    lg: "60%", // Escritorio estándar
    xl: "50%", // Escritorios grandes
  },
  margin: "0 auto",
  paddingTop: "20px",
};

// Creo otra con los valores flex

const sxFlexBoxSettings = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around", // Separa el carrusel y el texto en la pantalla
  alignItems: "center", // Centra los elementos en el eje secundario (horizontal)
  height: "80vh", // Usar todo el espacio disponible en la pantalla
};

export const OurRestaurant = () => {
  // Genero un array de rutas de imágenes usando la función createArrayImagesOurRestaurant
  const images = createArrayImagesOurRestaurant(8);

  return (
    <Box sx={{ ...sxBoxSettings, ...sxFlexBoxSettings }}>
      {/* Creo un Box de Material-UI y le aplico estilos con su propiedad sx y los valores de mi variable para manejar el layout y centrar el carrusel en la página*/}
      <Box sx={{ ...sxBoxSettings }}>
        {/* Añado el componente carrusel pasándole las props (array de imágenes y ajustes del carrusel) del componente padre  */}
        <Carrusel images={images} sliderSettings={sliderSettings} />
      </Box>
      <Typography
        sx={{
          ...sxBoxSettings,
          fontFamily: "GreatVibes, serif",
          fontSize: "2rem",
        }}
        variant="h5"
        align="center"
        color="primary">
        "El Arte de Comer Bien"
      </Typography>
    </Box>
  );
};
