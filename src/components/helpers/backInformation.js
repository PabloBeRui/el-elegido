

//Aqui almaceno objetos como arrays con la informacion de menus, platos, etc

//Menus

const route = "/media/images/GroupMenu/";
export const menus = [
    {
      title: 'Menú Degustación "Essence"',
      description:
        "Este menú está diseñado para ofrecer una experiencia gastronómica delicada y equilibrada a través de pequeñas porciones de alta cocina. Los platos seleccionados resaltan los sabores más puros y frescos, permitiendo a los comensales disfrutar de una variedad de sabores en una sola velada.",
  
      image: `${route}/essence.webp`,
    },
    {
      title: 'Menú Gourmet "Harmonie"',
      description:
        "Este menú está pensado para aquellos que desean disfrutar de una combinación armoniosa de sabores intensos y texturas sofisticadas. Los platos seleccionados representan una experiencia gastronómica equilibrada que deleitará a los comensales.",
      image: `${route}/harmonie.webp`,
    },
    {
      title: 'Menú Celebración "Étoile"',
      description:
        "Ideal para bodas y grandes celebraciones, este menú completo ofrece una experiencia culinaria de lujo. Los platos han sido seleccionados para deleitar a los paladares más exigentes, convirtiendo cualquier evento en un recuerdo inolvidable.",
  
      image: `${route}/etoile.webp`,
    },
];
  

//Especialidades de la casa

const routeSpeci = "/media/images/HouseSpecialties/";

//Array de objetos con cada especialidad
export const specialties = [
  {
    title: "Foie Gras con Reducción de Vino de Oporto",
    description:
      "Este es un plato clásico de la alta cocina francesa. El foie gras, un hígado de pato o ganso, es cocinado suavemente para mantener su textura cremosa y servido con una reducción de vino de Oporto, que agrega una dulzura equilibrada.",
    image: `${routeSpeci}solomillo_con_foie_al_oporto.png`,
  },
  {
    title: "Pato a la Naranja con Puré de Zanahoria y Jengibre",
    description:
      "El Pato a la Naranja es un clásico de la cocina francesa que combina sabores dulces y ácidos. El pato se cocina lentamente para lograr una piel crujiente y una carne jugosa. Se sirve con una salsa de naranja caramelizada que aporta un equilibrio perfecto entre el dulzor y la acidez. Acompañado de un puré de zanahoria y jengibre, que añade un toque de frescura y un ligero picor al plato, completando así una experiencia de sabor compleja y sofisticada.",
    image: `${routeSpeci}pato_naranja.png`,
  },
  {
    title: "Langosta Thermidor",
    description:
      "La Langosta Thermidor es un plato elegante y sofisticado, perfecto para una experiencia de alta cocina. La carne de la langosta es extraída de su caparazón y mezclada con una salsa cremosa a base de yema de huevo, vino blanco, mostaza y queso Gruyère. Luego, la mezcla se vuelve a colocar en el caparazón y se gratina hasta que la parte superior quede dorada y crujiente.",
    image: `${routeSpeci}langosta_thermidor.png`,
  },
];