import { Box, Typography } from "@mui/material";

//Componente reutilizable para crear cards

export const Card = ({ title, image, description }) => {
  return (
    <Box>
      <img src={image} alt={title} />

      <Box>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
};
