import { Box, Typography } from "@mui/material";

import { Card } from "./helpers/Card";

const route = "/media/images/GroupMenu/";

const menus = [
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

export const GroupMenu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Typography variant="h4" align="center" color="#FFFFFF" gutterBottom sx={{ mt: 2 }}>
        Menús de Grupo
      </Typography>
      ;
      {menus.map((menu, index) => (
        <Card
          key={index}
          title={menu.title}
          description={menu.description}
          image={menu.image}
        />
      ))}
    </Box>
  );
};
