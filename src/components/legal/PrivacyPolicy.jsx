import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export const PrivacyPolicy = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom color="primary.main">
        Política de Privacidad
      </Typography>

      <Typography variant="body1" paragraph>
        En{" "}
        <Typography
          component="strong"
          sx={{ fontWeight: "bold", color: "primary.main" }}>
          El Elegido
        </Typography>
        , nos tomamos muy en serio la privacidad de nuestros usuarios. En esta
        Política de Privacidad, te informamos sobre los datos personales que
        recopilamos, cómo los tratamos y cuáles son tus derechos conforme al
        Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de
        Protección de Datos Personales y garantía de los derechos digitales
        (LOPDGDD).
      </Typography>

      <Typography variant="h5" gutterBottom color="primary.main">
        Responsable del Tratamiento de Datos
      </Typography>
      <Typography variant="body1" paragraph>
        El responsable del tratamiento de los datos personales es:
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography component="span" sx={{ color: "primary.main" }}>
                  Nombre:
                </Typography>
                {" El Elegido S.L.F.J."}
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography component="span" sx={{ color: "primary.main" }}>
                  CIF:
                </Typography>
                {" B12345678"}
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography component="span" sx={{ color: "primary.main" }}>
                  Dirección:
                </Typography>
                {" Calle Falsa 123, 28080 Madrid, España"}
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography component="span" sx={{ color: "primary.main" }}>
                  Correo electrónico:
                </Typography>
                {" contacto@elegido.com"}
              </>
            }
          />
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom color="primary.main">
        Datos que Recopilamos
      </Typography>
      <Typography variant="body1" paragraph>
        Recopilamos datos personales cuando utilizas nuestro sitio web, como al
        rellenar formularios de contacto o realizar reservas. Los datos
        personales que recopilamos incluyen:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Nombre y apellidos" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Dirección de correo electrónico" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Número de teléfono" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Datos de navegación (cookies, IP, etc.)" />
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom color="primary.main">
        Finalidades del Tratamiento de Datos
      </Typography>
      <Typography variant="body1" paragraph>
        Utilizamos tus datos personales para las siguientes finalidades:
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Gestión de reservas"
            secondary="Recopilamos datos para gestionar tus reservas y garantizar el mejor servicio posible."
            primaryTypographyProps={{ sx: { color: "primary.main" } }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Comunicación"
            secondary="Nos ponemos en contacto contigo para confirmar tus reservas o responder a tus consultas."
            primaryTypographyProps={{ sx: { color: "primary.main" } }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Mejora del servicio"
            secondary="Analizamos datos de navegación para mejorar la experiencia del usuario en nuestra web."
            primaryTypographyProps={{ sx: { color: "primary.main" } }}
          />
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom color="primary.main">
        Derechos de los Usuarios
      </Typography>
      <Typography variant="body1" paragraph>
        Tienes derecho a acceder, rectificar, suprimir y oponerte al tratamiento
        de tus datos personales. También puedes solicitar la limitación del
        tratamiento de tus datos o ejercer tu derecho a la portabilidad.
      </Typography>

      <Typography variant="h5" gutterBottom color="primary.main">
        ¿Cómo ejercitar tus derechos?
      </Typography>
      <Typography variant="body1" paragraph>
        Puedes ejercer tus derechos enviando una solicitud a nuestro correo
        electrónico:
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

      <Typography variant="h5" gutterBottom color="primary.main">
        Seguridad de los Datos
      </Typography>
      <Typography variant="body1" paragraph>
        Nos comprometemos a proteger tus datos personales adoptando las medidas
        de seguridad técnicas y organizativas necesarias para evitar su pérdida,
        mal uso o acceso no autorizado.
      </Typography>

      <Typography variant="h5" gutterBottom color="primary.main">
        Cambios en la Política de Privacidad
      </Typography>
      <Typography variant="body1" paragraph>
        Nos reservamos el derecho a actualizar esta Política de Privacidad en
        cualquier momento. Las modificaciones se publicarán en esta página para
        que siempre estés informado sobre el tratamiento de tus datos.
      </Typography>

      <Typography variant="h5" gutterBottom color="primary.main">
        Contacto
      </Typography>
      <Typography variant="body1" paragraph>
        Si tienes alguna duda o consulta sobre esta Política de Privacidad,
        puedes ponerte en contacto con nosotros a través de nuestro correo
        electrónico:
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
