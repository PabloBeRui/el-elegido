// Importo creatrTheme para definir un tema personalizado
import { createTheme } from "@mui/material";

export const ELElegidoTheme = createTheme({
  // Colores personalizados
  palette: {
    primary: {
      main: "#f0f0f0",
    },
    secondary: {
      main: "#4F5B69",
    },
    custom: {
      mainphrase: "#c89f77", // Color cobre para el texto principal
    },
  },
  // Puedes personalizar otros aspectos del tema aquí, como tipografía, espaciados, etc.
});
