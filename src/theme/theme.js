// Importo creatrTheme para definir un tema personalizado
import { createTheme } from "@mui/material";

export const ELElegidoTheme = createTheme({
  // Colores personalizados
  palette: {
    primary: {
      main: "#2C2C2C",
    },
    secondary: {
      main: "#A5B2C2",
    },
    custom: {
      mainphrase: "#c89f77", // Color cobre para el texto principal
    }
  },
  // Puedes personalizar otros aspectos del tema aquí, como tipografía, espaciados, etc.
});
