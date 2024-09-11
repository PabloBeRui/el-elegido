import {
  AppBar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
//iconos importados
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import PolicyIcon from "@mui/icons-material/Policy";
import LocationOnIcon from "@mui/icons-material/LocationOn";

//React
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

export const Footer = () => {
  const theme = useTheme();

  // Creo un useState para el menú deslizante, para manejar si está abierto o cerrado.
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Creo una función con un parámetro booleano que cambia el valor de setDrawerOpen a true o false.
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Defino el menú deslizante que aparecerá en todos los dispositivos.
  const policyDrawer = (
    <Drawer
      anchor="bottom" // Coloco el menú en la parte inferior de la pantalla.
      open={drawerOpen} // Controla si el menú está visible basado en el valor del estado drawerOpen.
      onClose={toggleDrawer(false)} // Al cerrar el menú, cambia el estado drawerOpen a false.
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "rgba(79, 91, 105, 0.8)", // secondary.main con transparencia
          color: theme.palette.primary.main, // Texto en color primary.main
        },
      }}>
      <List>
        {/* Cada ListItem es un botón dentro del menú deslizante */}
        <ListItem
          button
          component={Link}
          to="/legal/PrivacyPolicy"
          onClick={toggleDrawer(false)}>
          <ListItemText primary="Política de Privacidad" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/legal/LegalNotice"
          onClick={toggleDrawer(false)}>
          <ListItemText primary="Aviso Legal" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/legal/CookiesPolicy"
          onClick={toggleDrawer(false)}>
          <ListItemText primary="Política de Cookies" />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    // Uso el componente AppBar de MUI para hacer de footer, para usar sus estilos y lo convierto semánticamente en un footer con la propiedad component.
    // Con position='static', el footer estará al final de la página
    <AppBar
      position="static"
      component="footer"
      sx={{ backgroundColor: "rgba(44, 44, 44, 0.1)", color: "#f0f0f0" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between", lg: "space-around" },
          alignItems: "center",
          padding: { xs: "2px", sm: "5px" },
        }}>
        {/* Uso un Box que a la vez contiene 3 Box para separar en 3 secciones */}
        {/* Sección 1 - Menú */}
        <Box>
          {/* El icono de Policy abre el drawer*/}
          <IconButton
            color="inherit"
            onClick={toggleDrawer(true)}
            title="Información Legal">
            <PolicyIcon />
          </IconButton>
          {/* Renderizo el menú deslizante para políticas */}
          {policyDrawer}
        </Box>

        {/* Sección 2 - Nombre y copyright */}
        <Box>
          {/* rel="noopener noreferrer" para mejorar seguridad y privacidad al target _blank */}
          <Typography
            variant="body2"
            align="center"
            sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}>
            © 2024 El Elegido by &nbsp;
            <Typography
              component="a"
              href="https://github.com/PabloBeRui/el-elegido"
              target="_blank"
              rel="noopener noreferrer"
              title="Visita mi GitHub!"
              sx={{
                textDecoration: "none",
                color: "gold",
                fontWeight: "bold",
              }}>
              PabloBeRui
            </Typography>
          </Typography>
        </Box>

        {/* Sección 3 - Contacto */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: "2px", sm: "8px", md: "12px" }, // Ajusta el espacio entre íconos para pantallas pequeñas
          }}>
          <IconButton
            color="inherit"
            component="a"
            href="mailto:pablo.bellon.ruibal@hotmail.com"
            title="Contacte con nosotros por email">
            <MailIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component="a"
            href="https://wa.me/+34670025720"
            target="_blank"
            rel="noopener noreferrer"
            title="Contacte con nosotros por WhatsApp">
            <WhatsAppIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component="a"
            href="https://www.instagram.com/instagram"
            target="_blank"
            rel="noopener noreferrer"
            title="Visite Nuestro Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            to="/OurLocation"
            title="Encuentre nuestro Restaurante">
            <LocationOnIcon />
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
};
