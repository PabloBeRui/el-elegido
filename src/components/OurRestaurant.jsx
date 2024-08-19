import Slider from "react-slick"; // Importo el componente de carrusel

import { Box } from "@mui/material"; // importo Box de MUI para organizar el layout

const createArrayImages = (img) => {
  // creo un array con las fotos que se mostrarán en el carrusel. voy a emplear un bucle para futuras modeificaciones de número de fotos
  const arrayImg = [];
  // Creo una variable con la ruta de las imagenes
  const route = "/media/images/OurRestaurantGallery/";

  for (let i = 1; i <= img; i++) {
    arrayImg.push(`${route}${i}.png`);
  }

  return arrayImg;
};

// Voy a configurar el carrusel de react-SliderTrack, para ello consigo una configuración predefinida y ajusto ciertos parámetros, con un comentario en cada uno para futuras modificaciones.

const sliderSettings = {
  dots: true, // Muestra los puntos de navegación en la parte inferior del carrusel
  infinite: true, // Permite que el carrusel se desplace en un bucle infinito
  speed: 500, // Velocidad de transición entre las imágenes (en milisegundos)
  slidesToShow: 1, // Número de imágenes visibles a la vez (en este caso, una imagen por vez)
  slidesToScroll: 1, // Número de imágenes que se desplazarán cuando se navegue en el carrusel
  autoplay: true, // Habilita el desplazamiento automático de las imágenes
  autoplaySpeed: 3000, // Tiempo entre cada desplazamiento automático (en milisegundos, 3 segundos)
};

export const OurRestaurant = () => {
   // Llamo a la función createArrayImages para generareln array de rutas de imágenes y lo almaceno en la variable images
   const images = createArrayImages(5);

   return (
     // Creo un Box de Material-UI y le aplico estilos con su propiedad sx para manejar el layout y centrar el carrusel en la página
     <Box sx={{ width: "80%", margin: "0 auto", paddingTop: "20px" }}>
       {/* 
      Creo el componente Slider de react-slick para crear el carrusel.
       Le pasao la configuración del carrusel (sliderSettings) con un spread operator 
       
       */}
       <Slider {...sliderSettings}>
         {/*
         Recorro el array de imágenes con un map y renderizo cada imagen dentro del div, añadiendo un key, en este caso usaré el index pues no se va a modificar ninguna imagen
         
         */}
         {images.map((src, index) => (
           <div key={index}>
             <img
               src={src} // El valor de src es la ruta de la imagen (ej: "/media/images/OurRestaurantGallery/1.png")
               alt={`Foto ${index + 1}`}
               style={{ width: "100%", height: "auto" }} // Height está en auto para mantener la proporcio´n y ajustar automáticamente la altura
             />
           </div>
         ))}
       </Slider>
     </Box>
   );
};
