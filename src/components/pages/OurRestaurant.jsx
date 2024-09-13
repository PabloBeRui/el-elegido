import { Box, Typography } from "@mui/material"; // importo Box de MUI para organizar el layout
import { Carrusel } from "../Carrusel.jsx";
import { createArrayImagesOurRestaurant } from "../helpers/createArrayImagesOurRestaurant.js";

// Configuro el carrusel de react-SliderTrack, para ello consigo una configuración predefinida y ajusto ciertos parámetros, con un comentario en cada uno para futuras modificaciones.
const sliderSettings = {
  dots: true, // Muestra los puntos de navegación en la parte inferior del carrusel
  infinite: true, // Permite que el carrusel se desplace en un bucle infinito
  speed: 400, // Velocidad de transición entre las imágenes (en milisegundos)
  slidesToShow: 1, // Número de imágenes visibles a la vez (en este caso, una imagen por vez)
  slidesToScroll: 1, // Número de imágenes que se desplazarán cuando se navegue en el carrusel
  autoplay: true, // Habilita el desplazamiento automático de las imágenes
  arrows: false, // Flechas para pasar fotos
};

// Creo una variable con los valores sx de Box para manejar los tamaños del contenedor principal
const sxBoxSettings = {
  width: {
    xs: "95%", // Móviles
    sm: "90%", // Tablets
    md: "80%", // Laptops pequeñas
    lg: "80%", // Escritorio estándar
    xl: "80%", // Escritorios grandes
  },
  margin: "0 auto",
  paddingTop: "20px",
};

// Creo otra variable con los valores flex para manejar la distribución en columna en móvil y en fila en escritorio
const sxFlexBoxSettings = {
  display: "flex",
  flexDirection: { xs: "column", lg: "row" },
  justifyContent: { xs: "space-around", lg: "space-between" },

  alignItems: "center",
  minHeight: { xs: "auto", lg: "75vh" }, // centro los elementos en modo desktop
  padding: "20px",
};

export const OurRestaurant = () => {
  // Genero un array de rutas de imágenes usando la función createArrayImagesOurRestaurant
  const images = createArrayImagesOurRestaurant(8);

  return (
    <Box sx={sxBoxSettings}>
      {/* FlexBox para manejar la distribución de contenido */}
      <Box sx={sxFlexBoxSettings}>
        {/* Carrusel de imágenes */}
        <Box
          sx={{
            width: { xs: "100%", lg: "45%" }, // Carrusel ocupa el 100% en móvil, 45% en escritorio
            marginBottom: { xs: "20px", lg: "0" }, // Espacio inferior en móviles
          }}>
          {/* Añado el componente carrusel pasándole las props (array de imágenes y ajustes del carrusel) del componente padre */}
          <Carrusel images={images} sliderSettings={sliderSettings} />
        </Box>

        {/* Contenedor para el texto y el lema */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
            width: { xs: "100%", lg: "45%" }, // Texto ocupa el 100% en móvil, 45% en escritorio
            textAlign: { xs: "center", lg: "left" }, // Centrado en móvil, alineado a la izquierda en escritorio
          }}>
          {/* Lema del restaurante */}
          <Typography
            sx={{
              fontFamily: "GreatVibes",
              fontSize: { xs: "2rem", md: "3rem" },
              marginBottom: "20px",
              color: "primary.main",
              textShadow: "2px 2px 4px rgba(79, 91, 105, 0.7)", //sombreado para mejorar legibilidad con color secondary con transparencia
              textAlign: { xs: "right", lg: "center" },
            }}>
            "El Arte de Comer Bien"
          </Typography>

          {/* Texto  sobre el restaurante */}
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: "primary.main",
              textShadow: "2px 2px 4px rgba(79, 91, 105, 0.7)",
            }}>
            El Elegido es más que un Restaurante; es un tributo a la Alta Cocina
            y al Arte Culinario. Desde nuestros inicios, hemos fusionado
            tradición y modernidad para crear una experiencia gastronómica
            inigualable. Nuestro equipo de Chefs utiliza ingredientes locales y
            de temporada para elaborar platos que deleitan los sentidos, en un
            ambiente de lujo y sofisticación. Ven y descubre un lugar donde cada
            comida se convierte en una obra maestra.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
