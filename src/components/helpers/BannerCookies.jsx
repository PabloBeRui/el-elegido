import { Button, Snackbar } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

export const BannerCookies = () => {
  // useState que controla si el Snackbar está visible o no

  const [open, setOpen] = useState(false);

  //Al iniciar el componente comppruebo el localStorage para saber si tengo mi clave valor ya asignada
  useEffect(() => {
    const elELegidoCookiesAccepted = localStorage.getItem(
      "elELegidoCookiesAccepted"
    );

    //Si no , cambio el valor de open para abrir el SnackBar

    if (!elELegidoCookiesAccepted) {
      setOpen(true);
    }
  }, []);

  //Creo 2 funciones, aceptacion y negacion de cookies

  const handleAccept = () => {
    localStorage.setItem("elELegidoCookiesAccepted", "1");
    setOpen(false);
  };

  const handleRefuse = () => {
    localStorage.setItem("elELegidoCookiesAccepted", "0");
    setOpen(false);
  };

  //Abro el Snacbar en funcion del estado de open

  return (
    <Snackbar
      open={open}
      message="La web de nuestro Restaurante usa cookies para mejorar la experiencia, ¿Acepta su uso?"
      action={
        <>
          <Button color="primary" onClick={handleAccept}>
            Aceptar
          </Button>
          <Button color="secondary" onClick={handleRefuse}>
            Rechazar
          </Button>
        </>
      }
    />
  );
};
