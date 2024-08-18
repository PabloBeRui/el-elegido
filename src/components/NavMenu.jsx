import React from "react";
import { Link } from "react-router-dom";

export const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/GroupMenu">Menús de grupo</Link>
        </li>
        <li>
          <Link to="/HouseSpecialties">Especialidades de la casa</Link>
        </li>
        <li>
          <Link to="/OurRestaurant">Nuestro Restaurante</Link>
        </li>
        <li>
          <Link to="/Reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/OurMenu">Nuestra Carta</Link>
        </li>
      </ul>
    </nav>
  );
};
