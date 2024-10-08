import "./index.css";
import { Footer } from "./components/Footer";

import { NavMenu } from "./components/NavMenu";

// Importo el componente BrowseRouter para poder navegar entre componentes sin recargar toda la página
//Para ello he instalado la biblioteca react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Reservations } from "./components/pages/Reservations";

import { GroupMenu } from "./components/pages/GroupMenu";
import { HouseSpecialties } from "./components/pages/HouseSpecialties";
import { OurRestaurant } from "./components/pages/OurRestaurant";
import { OurMenu } from "./components/pages/OurMenu";
import { OurLocation } from "./components/pages/OurLocation";
//Rutas legal
import { PrivacyPolicy } from "./components/pages/legal/PrivacyPolicy";
import { LegalNotice } from "./components/pages/legal/LegalNotice";
import { CookiesPolicy } from "./components/pages/legal/CookiesPolicy";

//MUI
import { Box, ThemeProvider } from "@mui/material";

//importo globalmente  react-slick (que depende de las hojas de estilo de slick-carousel para funcionar correctamente), requerido para su correcto funcionamiento.

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerCookies } from "./components/BannerCookies";

//importo mi tema personalizado

import { ELElegidoTheme } from "./theme/theme";

function ElElegidoApp() {
  return (
    <ThemeProvider theme={ELElegidoTheme}>
      {/* dvh para excluir barra de direcciones en el navegador */}

      <Box
        id="app-box"
        sx={{
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
        }}>
        {/* Componente snackbar de aceptacion de cookies */}
        <BannerCookies />
        {/* Voy a encapsular cada componente en un Box para poder aplicar estilos de MUI */}
        <Router>
          {" "}
          <Box sx={{ flexShrink: 0 }}>
            {" "}
            <NavMenu />
          </Box>
          <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
            <Routes>
              {/*Cargo por defecto la ruta OurRestaurant  */}
              <Route index element={<OurRestaurant />} />
              <Route path="/group-menu" element={<GroupMenu />} />
              <Route path="/house-specialties" element={<HouseSpecialties />} />
              <Route path="/our-restaurant" element={<OurRestaurant />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/our-menu" element={<OurMenu />} />
              <Route path="/OurLocation" element={<OurLocation />} />

              {/*  rutas para la sección legal */}
              <Route path="/legal/PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/legal/LegalNotice" element={<LegalNotice />} />
              <Route path="/legal/CookiesPolicy" element={<CookiesPolicy />} />
            </Routes>
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <Footer />
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default ElElegidoApp;
