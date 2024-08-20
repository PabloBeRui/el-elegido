//MUI
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";

//REACT
import { useState } from "react";

export const Footer = () => {
  // Creo un useState para el menú deslizante, para manejar si está abierto o cerrado.
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Asigno a una variable el Hook propio de MUI para acceder al tema actual y manejar breakpoints.
  const theme = useTheme();

  // Asigno a una variable un hook propio de MUI que en este caso se utiliza para saber si la pantalla es pequeña(breakpoint sm).
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Creo una función con un parámetro booleano que cambia el valor de setDrawerOpen a true o false.
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Definimos el menú deslizante que aparecerá en dispositivos móviles cuando el Drawer esté abierto.
  const mobileMenu = (
    <Drawer
      anchor="bottom" // Coloco el menú en la parte inferior de la pantalla.
      open={drawerOpen} // Controla si el menú está visible basado en el valor del estado drawerOpen.
      onClose={toggleDrawer(false)} // Al cerrar el menú, cambia el estado drawerOpen a false.
    >
      <List>
        {/* Cada ListItem es un botón dentro del menú deslizante */}
        <ListItem button>
          <ListItemText primary="Privacy Policy" />{" "}
          {/* Texto que indica la Política de Privacidad */}
        </ListItem>
        <ListItem button>
          <ListItemText primary="Legal Notice" />{" "}
          {/* Texto que indica el Aviso Legal */}
        </ListItem>
        <ListItem button>
          <ListItemText primary="Cookies Policy" />{" "}
          {/* Texto que indica la Política de Cookies */}
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    // Uso el componente AppBar de MUI para hacer de footer, para usar sus estilos y lo convierto semánticamente en un footer con la propiedad `component`.
    // Con `position='static'`, el footer estará al final de la página pero no estará fijo en la ventana.
    <AppBar
      position="static"
      component="footer"
      sx={{ backgroundColor: "primary" }}>
      {/* Uso un Box que a la vez contiene 3 Box para separar en 3 secciones */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
        }}>
        {/* Seccion 1 - Menu*/}
        <Box>
          {isMobile ? (
            <>
              {/* IconButton que abre el menú de */}
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon /> {/* !TODO CAMBIAR ICONO  */}
              </IconButton>
              {/* Renderizo el menú deslizante*/}
              {mobileMenu}
            </>
          ) : (
            // En dispositivos más grandes, se muestran tres botones
            <>
              <Button color="inherit">Política de Privacidad</Button>
              <Button color="inherit">Aviso Legal</Button>
              <Button color="inherit">Pol´tica de Cookies</Button>
            </>
          )}
        </Box>
        {/* Seccion 2 - Nombre y copyright*/}
        <Box>
          {/* camio el estilo y formato del texto con Typography */}
          <Typography variant="body2" align="center">
            © 2024 El Elegido
          </Typography>
        </Box>
        {/* Seccion  - Contacto*/}
        <Box>
          <IconButton color="inherit">
            <MailIcon />
          </IconButton>
          <IconButton color="inherit">
            <WhatsAppIcon />
          </IconButton>
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
};
