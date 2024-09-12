import { Box, Typography } from "@mui/material";
import { useState } from "react";
import "../../css/animations.css";
import { useTheme } from "@emotion/react";

// Componente reutilizable para crear cards
export const Card = ({ title, image, description }) => {
  //tema personalizado

  const theme = useTheme();

  // Creo el UseState isHovered para manejar el estado de hover en la imagen
  const [isHovered, setIsHovered] = useState(false);
  //Función para cambiar el estado
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
        border: `1px solid ${theme.palette.secondary.main}`, // Borde secundario
        borderRadius: 2,
        boxShadow: 1,
        margin: 2,
        maxWidth: 800,
        width: "90%",
        overflow: "hidden",
        gap: { xs: "1rem", sm: "3rem" },
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}>
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: { xs: "100%", sm: "40%" }, // 100% en pantallas pequeñas, 40% en pantallas medianas y grandes
          height: "auto",
          borderRadius: 1,
          marginBottom: { xs: 2, sm: 0 },
          marginRight: { sm: 2 },
          transition: "transform 1.5s ease", // Animación de escala
          "&:hover": {
            transform: "scale(1.1)", // Aumentar imagen al hacer hover
          },
        }}
        onMouseEnter={changeHoverState}
        onMouseLeave={changeHoverState}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "flex-start" }, // Centrar en móvil, alinear a la izquierda en pantallas grandes
          textAlign: { xs: "center", sm: "left" }, // Alinear texto
          transition: "filter 0.6s ease",
        }}>
        {/* Título con color primario */}
        <Typography variant="h6" gutterBottom color="secondary">
          {title}
        </Typography>
        {/* Descripción con animación de blur */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            animation: isHovered
              ? "blurOut 1.5s ease-in forwards"
              : "blurIn 2.5s ease forwards", // Animación cuando el hover está activo
          }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
