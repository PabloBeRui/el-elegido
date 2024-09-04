import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export const LegalNotice = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom color="primary.main">
        Aviso Legal
      </Typography>

      <Typography variant="body1" paragraph>
        En{" "}
        <Typography
          component="strong"
          sx={{ fontWeight: "bold", color: "primary.main" }}>
          El Elegido
        </Typography>
        , nos comprometemos a cumplir con las disposiciones legales vigentes en
        materia de protección de datos y privacidad, conforme a la Ley Orgánica
        3/2018, de Protección de Datos Personales y garantía de los derechos
        digitales (LOPDGDD), y el Reglamento General de Protección de Datos
        (RGPD).
      </Typography>

      <Typography variant="h5" gutterBottom color="primary.main">
        Responsable del Sitio Web
      </Typography>
      <Typography variant="body1" paragraph>
        El responsable de la gestión y mantenimiento de este sitio web es:
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
                {" Calle Fake 123, 15011 A Coruña"}
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
        Condiciones de Uso
      </Typography>
      <Typography variant="body1" paragraph>
        Al acceder y utilizar esta página web, aceptas las siguientes
        condiciones de uso:
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Propiedad Intelectual"
            secondary="Todos los contenidos, incluidos textos, imágenes, logotipos y otros materiales, son propiedad de El Elegido S.L.F.J. o de terceros que han autorizado su uso en esta web. Está prohibida su reproducción, distribución o modificación sin autorización previa."
            primaryTypographyProps={{ sx: { color: "primary.main" } }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Responsabilidad del Usuario"
            secondary="El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos en esta web, y a no utilizarlos para actividades ilícitas o contrarias a la buena fe."
            primaryTypographyProps={{ sx: { color: "primary.main" } }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Enlaces Externos"
            secondary="Este sitio web puede contener enlaces a otros sitios web gestionados por terceros. No nos hacemos responsables del contenido o la política de privacidad de dichos sitios."
            primaryTypographyProps={{ sx: { color: "primary.main" } }}
          />
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom color="primary.main">
        Protección de Datos
      </Typography>
      <Typography variant="body1" paragraph>
        De acuerdo con lo establecido en el RGPD y la LOPDGDD, informamos a los
        usuarios que los datos personales facilitados a través de los
        formularios de contacto serán tratados con la máxima confidencialidad, y
        se utilizarán únicamente para la finalidad especificada en cada
        formulario.
      </Typography>

      <Typography variant="h5" gutterBottom color="primary.main">
        Legislación Aplicable y Jurisdicción
      </Typography>
      <Typography variant="body1" paragraph>
        Este aviso legal se rige por la legislación española. Cualquier
        controversia derivada del acceso o uso de este sitio web será sometida a
        los tribunales de Madrid, España.
      </Typography>

      <Typography variant="h5" gutterBottom color="primary.main">
        Contacto
      </Typography>
      <Typography variant="body1" paragraph>
        Si tienes alguna duda o consulta sobre este Aviso Legal, puedes ponerte
        en contacto con nosotros a través de nuestro correo electrónico:
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
