import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export const CookiesPolicy = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom color="primary.main">
        Política de Cookies
      </Typography>

      <Typography variant="body1" paragraph>
        En{" "}
        <Typography
          component="strong"
          sx={{ fontWeight: "bold", color: "primary.main" }}>
          El Elegido
        </Typography>
        , utilizamos cookies y tecnologías similares para mejorar la experiencia
        de nuestros usuarios, ofrecer un mejor servicio y personalizar el
        contenido que mostramos en nuestra página web. En esta Política de
        Cookies, explicamos qué son las cookies, cómo las utilizamos y cómo
        puedes gestionarlas.
      </Typography>

      <Typography variant="h5" gutterBottom color="primary.main">
        ¿Qué son las cookies?
      </Typography>
      <Typography variant="body1" paragraph>
        Las cookies son pequeños archivos de texto que se almacenan en tu
        dispositivo (ordenador, smartphone, tablet, etc.) cuando visitas nuestra
        página web. Estos archivos contienen información sobre tu navegación, lo
        que nos permite reconocerte en futuras visitas, facilitar tu navegación
        y mejorar la funcionalidad del sitio.
      </Typography>

      <Typography variant="h5" gutterBottom color="primary.main">
        Tipos de cookies que utilizamos
      </Typography>
      <Typography variant="body1" paragraph>
        En{" "}
        <Typography
          component="strong"
          sx={{ fontWeight: "bold", color: "primary.main" }}>
          El Elegido
        </Typography>
        , utilizamos diferentes tipos de cookies:
      </Typography>

      <List>
        {/* primaryTypographyProps permite cambiar únicamente el color al primary */}
        <ListItem>
          <ListItemText
            primary="Cookies estrictamente necesarias"
            secondary="Son esenciales para que puedas navegar por nuestro sitio web y utilizar sus funciones, como acceder a áreas seguras o completar formularios."
            primaryTypographyProps={{ sx: { color: "primary.main" } }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Cookies de rendimiento"
            secondary="Nos permiten recopilar información sobre cómo los usuarios utilizan nuestra web. Toda la información es agregada y anónima."
            primaryTypographyProps={{ sx: { color: "primary.main" } }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Cookies de funcionalidad"
            secondary="Permiten que el sitio web recuerde las elecciones que realizas, como tu idioma preferido o la región en la que te encuentras."
            primaryTypographyProps={{ sx: { color: "primary.main" } }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Cookies de publicidad y marketing"
            secondary="Estas cookies se utilizan para mostrarte anuncios relevantes y personalizados basados en tus intereses."
            primaryTypographyProps={{ sx: { color: "primary.main" } }}
          />
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom color="primary.main">
        Cookies de terceros
      </Typography>
      <Typography variant="body1" paragraph>
        En algunos casos, utilizamos cookies de terceros, como servicios de
        redes sociales o análisis de datos. Estos terceros pueden establecer sus
        propias cookies cuando interactúas con nuestro sitio web.
      </Typography>

      <Typography variant="h5" gutterBottom color="primary.main">
        ¿Cómo puedes gestionar las cookies?
      </Typography>
      <Typography variant="body1" paragraph>
        Puedes permitir o rechazar las cookies mediante la configuración de tu
        navegador. Aquí te indicamos cómo gestionar las cookies en los
        navegadores más comunes:
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary="Google Chrome"
            secondary="Ve a Configuración > Privacidad y seguridad > Cookies y otros datos de sitios."
            primaryTypographyProps={{ sx: { color: "primary.main" } }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Mozilla Firefox"
            secondary="Ve a Opciones > Privacidad y seguridad > Cookies y datos del sitio."
            primaryTypographyProps={{ sx: { color: "primary.main" } }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Microsoft Edge"
            secondary="Ve a Configuración > Cookies y permisos del sitio."
            primaryTypographyProps={{ sx: { color: "primary.main" } }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Safari"
            secondary="Ve a Preferencias > Privacidad."
            primaryTypographyProps={{ sx: { color: "primary.main" } }}
          />
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom color="primary.main">
        Contacto
      </Typography>
      <Typography variant="body1" paragraph>
        Si tienes alguna duda sobre esta Política de Cookies, no dudes en
        contactarnos a través de nuestro correo electrónico:
        <Typography
          component="a"
          href="mailto:contacto@elegido.com"
          sx={{
            textDecoration: "none",
            color: "primary.main",
            "&:hover": {
              textDecoration: "underline",
            },
          }}>
          {" "}
          contacto@elegido.com
        </Typography>
        .
      </Typography>
    </Box>
  );
};
