import { Box, Typography } from "@mui/material";
import { useState } from "react";

import "../css/animations.css";

// Componente reutilizable para crear cards
export const Card = ({ title, image, description }) => {
  // Creo el UseState isHovered para manejar el estado de hover en la imagen
  const [isHovered, setIsHovered] = useState(false);
  //Funcion para cambiar el estado
  const changeHoverState = () => {
    isHovered ? setIsHovered(false) : setIsHovered(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Columna en pantallas pequeñas, fila en pantallas medianas y grandes
        alignItems: "center",
        padding: 2,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 1,
        margin: 2,
        maxWidth: 600,
        width: "90%",
        overflow: "hidden",
      }}>
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: { xs: "100%", sm: "40%" }, // 100% en pantallas pequeñas, 40% en resto
          height: "auto",
          borderRadius: 1,
          marginBottom: { xs: 2, sm: 0 },
          marginRight: { sm: 2 },
          transition: "transform 1.5s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
        onMouseEnter={changeHoverState}
        onMouseLeave={changeHoverState}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "flex-start" },
          textAlign: { xs: "center", sm: "left" },
          transition: "filter 0.6s ease",
        }}>
        {/* gutterBottom para dejar un ligero espaciado y body 2 para cuerpo de descripcion ligeramente más pequeño, textScondary color más suave*/}
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            animation: isHovered
              ? "blurOut 1.5s ease-in forwards"
              : "blurIn 2.5s ease forwards",
          }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
