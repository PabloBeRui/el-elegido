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
import MenuIcon from "@mui/icons-material/Menu";
// Importo los hooks useMediaQuery y useTheme para detectar el tamaño de pantalla y para configurar el tema,tambien de Material-UI
import { useMediaQuery, useTheme } from "@mui/material";

export const NavMenu = () => {
  // Creo el hook `drawerOpen` para controlar si el menú está abierto o cerrado.

  const [drawerOpen, setDrawerOpen] = useState(false);

  // Accedo con useTheme nos al tema de Material-UI y sus breakpoints
  const theme = useTheme();

  //compruebo directamente en el componente a través de los breakpoints si su tamaño se adapta a mobile , en este caso un máximo de 600px
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // creo una función de orden superior que actualiza el estado de drawerOpen a través de setDrawerOpen. Su parámetro "open" será true o false para abrir o cerrar el menú deslizante.

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Creo el menú  para dispositivos móviles.
  //Drawer es un componente de MUI que crea un menu deslizante, con anchor elijo su situación
  // La propiedad `open` controla la visibilidad del Drawer (true para mostrarlo, false para ocultarlo).
  // La propiedad `onClose` define qué acción debe realizarse cuando el Drawer se cierra (por ejemplo, cuando el usuario hace clic fuera del menú). En este caso, cambia el estado `drawerOpen` a false para cerrar el menú.
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

  // Menu para pantallas grandes. En lugar de  Drawer, Toolbar muestra botones horizontales en la barra de navegación.
  const desktopMenu = (
    <Toolbar>
      <Button color="inherit" component={Link} to="/our-restaurant">
        Nuestro Restaurante
      </Button>
      <Button color="inherit" component={Link} to="/group-menu">
        Menús de Grupo
      </Button>
      <Button color="inherit" component={Link} to="/house-specialties">
        Especialidades de la Casa
      </Button>
      <Button color="inherit" component={Link} to="/reservations">
        Reservas
      </Button>
      <Button color="inherit" component={Link} to="/our-menu">
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
              display: "flex",
              justifyContent: "space-between",
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
            <Typography variant="h6" component="div">
              El Elegido Restaurant
            </Typography>
            {/* Añado el logo del local, en formato box para maximizar el uso de mui */}
            <Box
              component="img"
              src="media/images/NavMenu/logo_el_elegido.png"
              alt="description"
              sx={{ width: "10%", height: "auto", borderRadius: 2 }}
            />
            {/* Renderizo mobileMenu */}
            {mobileMenu}
          </Box>
        ) : (
          // Pantallas grandes
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            {/* Añado el logo del local, en formato box para maximizar el uso de mui */}
            <Box
              component="img"
              src="media/images/NavMenu/logo_el_elegido.png"
              alt="description"
              sx={{ width: "5%", height: "auto", borderRadius: 2 }}
            />
            <Typography variant="h2" component="div">
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
