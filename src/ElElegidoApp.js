import "./App.css";
import { Footer } from "./components/Footer";

import { NavMenu } from "./components/NavMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Reservations } from "./components/Reservations";

import { GroupMenu } from "./components/GroupMenu";
import { HouseSpecialties } from "./components/HouseSpecialties";
import { OurRestaurant } from "./components/OurRestaurant";
import { OurMenu } from "./components/OurMenu";

function ElElegidoApp() {
  return (
    <Router>
      <NavMenu />
      <h1>ElElegidoApp</h1>
      <Routes>
        {/*Cargo por defecto la ruta OurRestaurant  */}
        <Route index element={<OurRestaurant />} />
        <Route path="/GroupMenu" element={<GroupMenu />} />
        <Route path="/HouseSpecialties" element={<HouseSpecialties />} />
        <Route path="/OurRestaurant" element={<OurRestaurant />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/OurMenu" element={<OurMenu />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default ElElegidoApp;
