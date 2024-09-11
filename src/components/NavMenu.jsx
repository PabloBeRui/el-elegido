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

// Importo el icono del tiempo
import { WeatherIcon } from "./helpers/WeatherIcon";

export const NavMenu = () => {
  // Hook para controlar si el menú está abierto o cerrado.
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Accedo al tema de Material-UI para los breakpoints
  const theme = useTheme();

  // Detecto si el tamaño de pantalla es mobile o tablet
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("lg"));

  // Función para abrir o cerrar el menú hamburguesa
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Menú para dispositivos móviles y tablets

  //hago referencia al selector principal de mui con & para poder modificar el fondo del drawer cuando está abierto
  const mobileMenu = (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "rgba(79, 91, 105, 0.9)", // secondary.main con transparencia
          color: theme.palette.primary.main, // Texto en color primary.main
        },
      }}>
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

  // Menú para pantallas grandes (Desktop)
  const desktopMenu = (
    <Toolbar>
      <Button
        color="inherit"
        component={Link}
        to="/our-restaurant"
        sx={{
          fontSize: {
            xs: "0.8rem",
            sm: "1rem",
            md: "1rem",
          },
        }}>
        Nuestro Restaurante
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/group-menu"
        sx={{
          fontSize: {
            xs: "0.8rem",
            sm: "1rem",
            md: "1rem",
          },
        }}>
        Menús de Grupo
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/house-specialties"
        sx={{
          fontSize: {
            xs: "0.8rem",
            sm: "1rem",
            md: "1rem",
          },
        }}>
        Especialidades de la Casa
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/reservations"
        sx={{
          fontSize: {
            xs: "0.8rem",
            sm: "1rem",
            md: "1rem",
          },
        }}>
        Reservas
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/our-menu"
        sx={{
          fontSize: {
            xs: "0.8rem",
            sm: "1rem",
            md: "1rem",
          },
        }}>
        Nuestra Carta
      </Button>
    </Toolbar>
  );

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "rgba(44, 44, 44, 0.1)", color: "#f0f0f0" }}>
      <Toolbar>
        {isMobileOrTablet ? (
          <Box
            sx={{
              width: "100vw",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            {/* IconButton con menú hamburguesa */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ transform: "rotate(90deg)" }} // Giro el icono 90 grados para darle más aspecto de menu hamburguesa
            >
              <FlatwareIcon />
            </IconButton>
            {/* Nombre del restaurante */}
            <Typography
              variant="h6"
              component="div"
              sx={{ fontFamily: "Cinzel, serif" }}>
              El Elegido Restaurant
            </Typography>
            {/* Icono del tiempo */}
            <WeatherIcon />
            {/* Renderizo el menú hamburguesa */}
            {mobileMenu}
          </Box>
        ) : (
          <Box
            sx={{
              width: "100vw",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            {/* Icono del tiempo */}
            <WeatherIcon />
            {/* Nombre del restaurante */}
            <Typography
              variant="h2"
              sx={{ fontSize: "2.5rem", fontFamily: "Cinzel, serif" }}
              component="div">
              El Elegido Restaurant
            </Typography>
            {/* Menú de escritorio */}
            {desktopMenu}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
