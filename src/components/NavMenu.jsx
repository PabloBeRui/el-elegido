import { useState } from "react";
import { Link } from "react-router-dom";

// Importo los componentes de Material-UI que voy a usar.
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
// Importo el ícono de menú de hamburguesa (MenuIcon) de Material-UI.
import FlatwareIcon from "@mui/icons-material/Flatware";

// Importo los hooks useMediaQuery y useTheme para detectar el tamaño de pantalla y para configurar el tema,tambien de Material-UI
import { useMediaQuery, useTheme } from "@mui/material";

//Componente para inmportar el icono del tiempo

import { WeatherIcon } from "./helpers/WeatherIcon";

export const NavMenu = () => {
  // Creo el hook drawerOpen para controlar si el menú está abierto o cerrado.

  const [drawerOpen, setDrawerOpen] = useState(false);

  // Accedo con useTheme nos al tema de Material-UI y sus breakpoints
  const theme = useTheme();

  //compruebo directamente en el componente a través de los breakpoints si su tamaño se adapta a mobile , el caso "sm" un máximo de 600px
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  //Aqui compruebo que esté entre sm y lg
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  // creo una función de orden superior que actualiza el estado de drawerOpen a través de setDrawerOpen. Su parámetro "open" será true o false para abrir o cerrar el menú deslizante.

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Creo el menú  para dispositivos móviles.
  //Drawer es un componente de MUI que crea un menu deslizante, con anchor elijo su situación
  // La propiedad open controla la visibilidad del Drawer (true para mostrarlo, false para ocultarlo).
  // La propiedad onClose define qué acción debe realizarse cuando el Drawer se cierra (por ejemplo, cuando el usuario hace clic fuera del menú). En este caso, cambia el estado drawerOpen a false para cerrar el menú.
  //He añadido la propiedad onClick={toggleDrawer(false)} para que el menu se cierre automaticamente al seleccionar un enlace
  const mobileMenu = (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      <List>
        <ListItem
          button
          component={Link}
          to="/our-restaurant"
          onClick={toggleDrawer(false)}>
          <ListItemText primary="Nuestro Restaurante" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/group-menu"
          onClick={toggleDrawer(false)}>
          <ListItemText primary="Menús de Grupo" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/house-specialties"
          onClick={toggleDrawer(false)}>
          <ListItemText primary="Especialidades de la Casa" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/reservations"
          onClick={toggleDrawer(false)}>
          <ListItemText primary="Reservas" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/our-menu"
          onClick={toggleDrawer(false)}>
          <ListItemText primary="Nuestra Carta" />
        </ListItem>
      </List>
    </Drawer>
  );

  // Menu para pantallas grandes. En lugar de  Drawer, Toolbar muestra botones horizontales en la barra de navegación. Comprobaré también con isTablet el tamaño de la ventana de visualizzacion para corregir el tamaño de los componentes

  // dont repeat yourself
  // Asigno el ternario a una variable

  const buttonTextSize = {
    fontSize: isTablet ? { xs: "0.5rem", md: "0.65rem" } : "1.25rem",
    padding: { xs: "2px 4px" },
    margin: { xs: "0px" }, // Reducir margen en xs
  };

  const desktopMenu = (
    <Toolbar>
      <Button
        color="inherit"
        component={Link}
        to="/our-restaurant"
        sx={buttonTextSize}>
        Nuestro Restaurante
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/group-menu"
        sx={buttonTextSize}>
        Menús de Grupo
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/house-specialties"
        sx={buttonTextSize}>
        Especialidades de la Casa
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/reservations"
        sx={buttonTextSize}>
        Reservas
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/our-menu"
        sx={buttonTextSize}>
        Nuestra Carta
      </Button>
    </Toolbar>
  );

  // AppBar representa la barra de navegación principal de la aplicación.

  return (
    // AppBar representa la barra de navegación principal de la aplicación.
    // Toolbar es un contenedor que organiza y alinea los elementos dentro del AppBar.
    <AppBar position="static">
      <Toolbar>
        {/*Compruebo el tamaño de la pantalla. Si es móvil, se muestra el menú de hamburguesa, en caso contrario , el desktopMenu */}
        {isMobile ? (
          <Box
            sx={{
              width: "100vw",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}>
            {/* IconButton es el botón de hamburguesa que abre el menú deslizante en dispositivos móviles */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}>
              {/* MenuIcon es el ícono de las tres líneas (hamburguesa) */}
              <FlatwareIcon />
            </IconButton>

            {/* -Typography se usa para mostrar el nombre del restaurante en la barra de navegación 
            -La propiedad variant define el estilo tipográfico que se aplicará al texto
            -Con el component="div" el h6 se renderizará como un div
            
            */}
            <Typography
              variant="h6"
              component="div"
              sx={{ fontFamily: "Cinzel, serif" }}>
              El Elegido Restaurant
            </Typography>
            {/* Añado el componente WeatherIcon */}
            <WeatherIcon />
            {/* Renderizo mobileMenu */}
            {mobileMenu}
          </Box>
        ) : (
          // Pantallas grandes - comprobaré con isTablet si el tamaño es intermedio para reducir el tamaño de los componentes
          <Box
            sx={{
              width: "100vw",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            {/* Añado el componente WeatherIcon */}
            <WeatherIcon />
            <Typography
              variant="h2"
              sx={{
                fontSize: isTablet ? "1rem" : "2.5rem",
                fontFamily: "Cinzel, serif",
              }}
              component="div">
              {/* display={isTablet && "none"} */}
              El Elegido Restaurant
            </Typography>
            {/* Renderizo DesktopMenu */}
            {desktopMenu}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
