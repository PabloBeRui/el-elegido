import Slider from "react-slick"; // Importo el componente de carrusel

// Creo un componente para crear un carrusel, con 2 parámetros, uno el array de imagenes y el otro la configuracion del carrusel
export const Carrusel = ({ images, sliderSettings }) => {
  //   renderizo el componente Slider de react-slick para crear el carrusel.
  //    Le paso la configuración del carrusel (sliderSettings) con un spread operator

  return (
    <Slider {...sliderSettings}>
      {/*
         Recorro el array de imágenes y renderizo cada imagen dentro del div, añadiendo un key, en este caso usaré el index pues no se va a modificar ninguna imagen
         
         */}
      {images.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            alt={`Foto ${index + 1}`}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "30% 70% 87% 13% / 26% 25% 75% 74%", // Mantiene el borde personalizado
              filter: "opacity(0.9)", //pequeña  transparencia para integrar la imagen
            }}
          />
        </div>
      ))}
    </Slider>
  );
};
