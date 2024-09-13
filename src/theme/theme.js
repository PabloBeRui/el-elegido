// Importo creatrTheme para definir un tema personalizado
import { createTheme } from "@mui/material";

import "../index.css"

export const ELElegidoTheme = createTheme({

  //Colores personalizados
  palette: {
    primary: {
      main: "#f0f0f0",
    },
    secondary: {
      main: "#4F5B69",
    },
  },
  typography: {
    fontFamily: 'OpenSans, Arial, sans-serif',
  },
});

