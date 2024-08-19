import "./App.css";
import { Footer } from "./components/Footer";

import { NavMenu } from "./components/NavMenu";

// Importo el componente BrowseRouter para poder navegar entre componentes sin recargar toda la página
//Para ello he instalado la biblioteca react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Reservations } from "./components/Reservations";

import { GroupMenu } from "./components/GroupMenu";
import { HouseSpecialties } from "./components/HouseSpecialties";
import { OurRestaurant } from "./components/OurRestaurant";
import { OurMenu } from "./components/OurMenu";

//importo globalmente  react-slick (que depende de las hojas de estilo de slick-carousel para funcionar correctamente), requerido para su correcto funcionamiento.

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ElElegidoApp() {
  return (
    <div>
      <Router>
        <NavMenu />
        <Routes>
          {/*Cargo por defecto la ruta OurRestaurant  */}
          <Route index element={<OurRestaurant />} />
          <Route path="/group-menu" element={<GroupMenu />} />
          <Route path="/house-specialties" element={<HouseSpecialties />} />
          <Route path="/our-restaurant" element={<OurRestaurant />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/our-menu" element={<OurMenu />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default ElElegidoApp;
