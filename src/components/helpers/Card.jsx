import { Box, Typography } from "@mui/material";

// Componente reutilizable para crear cards
export const Card = ({ title, image, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Columna en pantallas pequeñas, fila en pantallas medianas y grandes (sin punto de interrupcion desde sm)
        alignItems: "center",
        padding: 2,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 1,
        margin: 2,
        maxWidth: 700,
        width: "90%",
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
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "flex-start" },
          textAlign: { xs: "center", sm: "left" },
        }}>
        {/* gutterBottom para dejar un ligero espaciado y body 2 para cuerpo de descripcion ligeramente más pequeño, textScondary color más suave*/}
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
