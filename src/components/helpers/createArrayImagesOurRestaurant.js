export const createArrayImagesOurRestaurant = (img) => {
  // creo un array con las fotos que se mostrarán en el carrusel. voy a emplear un bucle para futuras modeificaciones de número de fotos
  const arrayImg = [];
  // Creo una variable con la ruta de las imagenes
  const route = "/media/images/OurRestaurantGallery/";

  for (let i = 1; i <= img; i++) {
    arrayImg.push(`${route}${i}.webp`);
  }

  return arrayImg;
};
