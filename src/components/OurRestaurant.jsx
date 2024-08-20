import { Box } from "@mui/material"; // importo Box de MUI para organizar el layout
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
  autoplaySpeed: 3000, // Tiempo entre cada desplazamiento automático (en milisegundos, 3 segundos)
};

// Creo una variable con los valores sx de Box

const sxBoxSettings = { width: "80%", margin: "0 auto", paddingTop: "20px" };

export const OurRestaurant = () => {
  // Genero un array de rutas de imágenes usando la función createArrayImagesOurRestaurant
  const images = createArrayImagesOurRestaurant(5);

  return (
    // Creo un Box de Material-UI y le aplico estilos con su propiedad sx y los valores de mi variable para manejar el layout y centrar el carrusel en la página
    <Box sx={sxBoxSettings}>
      {/* Añado el componente carrusel pasándole las props (array de imágenes y ajustes del carrusel) del componente padre  */}
      <Carrusel images={images} sliderSettings={sliderSettings} />
    </Box>
  );
};
