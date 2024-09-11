import { Box, Typography } from "@mui/material";

import { Card } from "./helpers/Card";

const route = "/media/images/HouseSpecialties/";

//Array de objetos con cada especialidad
const specialties = [
  {
    title: "Foie Gras con Reducción de Vino de Oporto",
    description:
      "Este es un plato clásico de la alta cocina francesa. El foie gras, un hígado de pato o ganso, es cocinado suavemente para mantener su textura cremosa y servido con una reducción de vino de Oporto, que agrega una dulzura equilibrada.",
    image: `${route}solomillo_con_foie_al_oporto.png`,
  },
  {
    title: "Pato a la Naranja con Puré de Zanahoria y Jengibre",
    description:
      "El Pato a la Naranja es un clásico de la cocina francesa que combina sabores dulces y ácidos. El pato se cocina lentamente para lograr una piel crujiente y una carne jugosa. Se sirve con una salsa de naranja caramelizada que aporta un equilibrio perfecto entre el dulzor y la acidez. Acompañado de un puré de zanahoria y jengibre, que añade un toque de frescura y un ligero picor al plato, completando así una experiencia de sabor compleja y sofisticada.",
    image: `${route}pato_naranja.png`,
  },
  {
    title: "Langosta Thermidor",
    description:
      "La Langosta Thermidor es un plato elegante y sofisticado, perfecto para una experiencia de alta cocina. La carne de la langosta es extraída de su caparazón y mezclada con una salsa cremosa a base de yema de huevo, vino blanco, mostaza y queso Gruyère. Luego, la mezcla se vuelve a colocar en el caparazón y se gratina hasta que la parte superior quede dorada y crujiente.",
    image: `${route}langosta_thermidor.png`,
  },
];

export const HouseSpecialties = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {/* mt:2 -> 2*8 px */}
      <Typography
        variant="h4"
        align="center"
        color="#FFFFFF"
        gutterBottom
        sx={{ mt: 2, fontFamily: "GreatVibes" }}>
        Especialidades de la Casa
      </Typography>
      {
        //mapeo las especialidades
        specialties.map((specialtie, index) => (
          <Card
            key={index}
            title={specialtie.title}
            description={specialtie.description}
            image={specialtie.image}
          />
        ))
      }
    </Box>
  );
};
