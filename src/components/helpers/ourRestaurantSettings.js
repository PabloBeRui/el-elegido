//Variables con las settings de de OurRestaurant

// Configuro el carrusel de react-SliderTrack, para ello consigo una configuración predefinida y ajusto ciertos parámetros, con un comentario en cada uno para futuras modificaciones.
export const sliderSettings = {
  dots: true, // Muestra los puntos de navegación en la parte inferior del carrusel
  infinite: true, // Permite que el carrusel se desplace en un bucle infinito
  speed: 400, // Velocidad de transición entre las imágenes (en milisegundos)
  slidesToShow: 1, // Número de imágenes visibles a la vez (en este caso, una imagen por vez)
  slidesToScroll: 1, // Número de imágenes que se desplazarán cuando se navegue en el carrusel
  autoplay: true, // Habilita el desplazamiento automático de las imágenes
  arrows: false, // Flechas para pasar fotos
};

// Creo una variable con los valores sx de Box para manejar los tamaños del contenedor principal
export const sxBoxSettings = {
  width: {
    xs: "95%", // Móviles
    sm: "90%", // Tablets
    md: "80%", // Laptops pequeñas
    lg: "75%", // Escritorio estándar
    xl: "75%", // Escritorios grandes
  },
  margin: "0 auto",
  paddingTop: "10px",
};

// Creo otra variable con los valores flex para manejar la distribución en columna en móvil y en fila en escritorio
export const sxFlexBoxSettings = {
  display: "flex",
  flexDirection: { xs: "column", lg: "row" },
  justifyContent: { xs: "space-around", lg: "space-between" },
  alignItems: "center",
  minHeight: { xs: "auto", lg: "65vh" },
  padding: "3rem",
};
