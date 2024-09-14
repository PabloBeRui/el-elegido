import { Box, Typography } from "@mui/material"; // importo Box de MUI para organizar el layout
import { Carrusel } from "../Carrusel.jsx";
import { createArrayImagesOurRestaurant } from "../helpers/createArrayImagesOurRestaurant.js";

//importo las variables con los settings que aplicaré en el componente
import {
  sliderSettings,
  sxBoxSettings,
  sxFlexBoxSettings,
} from "../helpers/ourRestaurantSettings.js";

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
            marginBottom: { xs: "10px", lg: "0" }, // Espacio inferior en móviles
          }}>
          {/* Añado el componente carrusel pasándole las props (array de imágenes y ajustes del carrusel) del componente padre */}
          <Carrusel images={images} sliderSettings={sliderSettings} />
        </Box>

        {/* Contenedor para el texto y el lema */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "4rem", lg: "1rem" },
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
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "primary.main",
              textShadow: "2px 2px 4px rgba(79, 91, 105, 0.7)",
              mb: { xs: "1rem", lg: "0" },
            }}>
            El Elegido es más que un Restaurante; es un tributo a la Alta Cocina
            y al Arte Culinario. Desde nuestros inicios, hemos fusionado
            tradición y modernidad para crear una experiencia gastronómica
            inigualable. Nuestro equipo de Chefs utiliza ingredientes locales y
            de temporada para elaborar platos que deleitan los sentidos, en un
            ambiente de lujo y sofisticación. Ven y descubre un lugar donde cada
            comida se convierte en una obra de Arte.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
