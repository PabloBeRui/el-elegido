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
import { useMediaQuery, useTheme } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import PolicyIcon from "@mui/icons-material/Policy";

//REACT
import { useState } from "react";
import { Link } from "react-router-dom";

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
          {/* component={Link} to="/legal/PrivacyPolicy.jsx" */}
          <ListItemText primary="Política de Privacidad" />{" "}
          {/* Texto que indica la Política de Privacidad */}
        </ListItem>
        <ListItem button>
          <ListItemText primary="Aviso Legal" />{" "}
          {/* Texto que indica el Aviso Legal */}
        </ListItem>
        <ListItem button>
          <ListItemText primary="Política de Cookies" />{" "}
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
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px",
        }}>
        {/* Seccion 1 - Menu*/}
        <Box>
          {isMobile ? (
            <>
              {/* IconButton que abre el menú de */}
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <PolicyIcon />
              </IconButton>
              {/* Renderizo el menú deslizante*/}
              {mobileMenu}
            </>
          ) : (
            // En dispositivos más grandes, se muestran tres botones
            <>
              <Button color="inherit"> Link Política de Privacidad</Button>
              <Button color="inherit">Aviso Legal</Button>
              <Button color="inherit">Política de Cookies</Button>
            </>
          )}
        </Box>
        {/* Seccion 2 - Nombre y copyright*/}
        <Box
          sx={{
            mr: { xs: 2, sm: 4, md: 10 },
          }}>
          {/* camio el estilo y formato del texto con Typography */}
          {/* rel="noopener noreferrer" para mejorar seguridad y privacidad al target _blank */}
          <Typography variant="body2" align="center">
            © 2024 El Elegido by &nbsp;
            <Box
              component="a"
              href="https://github.com/PabloBeRui/el-elegido"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
                color: "primary",
                fontWeight: "bold",
              }}>
              PabloBeRui
            </Box>
          </Typography>
        </Box>
        {/* Seccion  - Contacto*/}
        {/* rel="noopener noreferrer" para mejorar seguridad y privacidad al target _blank */}
        <Box>
          <IconButton
            color="inherit"
            component="a"
            href="mailto:pablo.bellon.ruibal@hotmail.com">
            <MailIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component="a"
            href="https://wa.me/+34670025720"
            target="_blank"
            rel="noopener noreferrer">
            <WhatsAppIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component="a"
            href="https://www.instagram.com/instagram"
            target="_blank"
            rel="noopener noreferrer">
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
};
