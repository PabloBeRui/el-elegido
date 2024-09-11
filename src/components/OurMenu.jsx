import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
//Listas propias de MUI
//List->ul || ol  ListItem->li ListItemText->texto del li ListSubheader-> encabezado
import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";
import { Link } from "react-router-dom";

export const OurMenu = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        padding: 2,
        border: `1px solid ${theme.palette.secondary.main}`, // Borde secundario
        borderRadius: 2,
        boxShadow: 1,
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Fondo blanco con transparencia
      }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        color="secondary"
        sx={{ fontFamily: "GreatVibes" }}>
        Nuestra Carta
      </Typography>

      {/* Aperitivos */}
      <List
        subheader={
          <ListSubheader
            sx={{
              color: "primary.main",
              backgroundColor: "secondary.main",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}>
            APERITIVOS
          </ListSubheader>
        }>
        <ListItem>
          <ListItemText
            primary="Aceitunas marinadas"
            secondary="Con hierbas mediterráneas y limón"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Almendras tostadas"
            secondary="Con sal marina y pimentón de la Vera"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Jamón ibérico"
            secondary="Cortado a mano, con pan de cristal y tomate"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Tabla de quesos"
            secondary="Selección de quesos artesanos con mermeladas y frutos secos"
          />
        </ListItem>
      </List>

      {/* Entradas */}
      <List
        subheader={
          <ListSubheader
            sx={{
              color: "primary.main",
              backgroundColor: "secondary.main",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}>
            ENTRANTES
          </ListSubheader>
        }>
        <ListItem>
          <ListItemText
            primary="Ensalada de burrata"
            secondary="Con tomates cherry, albahaca fresca y pesto"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Ceviche de corvina"
            secondary="Con leche de tigre, maíz tostado y boniato"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Carpaccio de ternera"
            secondary="Con rúcula, parmesano y aceite de trufa"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Pulpo a la parrilla"
            secondary="Con patatas confitadas y pimentón de la Vera"
          />
        </ListItem>
      </List>

      {/* Platos principales */}
      <List
        subheader={
          <ListSubheader
            sx={{
              color: "primary.main",
              backgroundColor: "secondary.main",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}>
            PLATOS PRINCIPALES
          </ListSubheader>
        }>
        <ListItem>
          <ListItemText
            primary="Solomillo de ternera"
            secondary="Con salsa de vino tinto y puré de patatas trufado"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Lubina al horno"
            secondary="Con verduras al vapor y salsa de azafrán"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Risotto de setas"
            secondary="Con parmesano y aceite de trufa blanca"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Pato confitado"
            secondary="Con puré de boniato y reducción de frutos rojos"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Raviolis de langosta"
            secondary="Con salsa de marisco y un toque de albahaca fresca"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Cordero asado"
            secondary="Con puré de apionabo y salsa de romero"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Filete de atún rojo"
            secondary="Con costra de sésamo y salsa de soja cítrica"
          />
        </ListItem>
        <ListItem>
          <Box
            component={Link}
            to="/house-specialties"
            sx={{
              textDecoration: "none",
              color: "inherit",
              transition: "all 0.5s",
              "&:hover": {
                color: "primary.main",
              },
            }}>
            <ListItemText
              primary="Especialidades de la Casa"
              secondary="Consulte nuestras especialidades"
            />
          </Box>
        </ListItem>
      </List>

      {/* Postres */}
      <List
        subheader={
          <ListSubheader
            sx={{
              color: "primary.main",
              backgroundColor: "secondary.main",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}>
            POSTRES
          </ListSubheader>
        }>
        <ListItem>
          <ListItemText
            primary="Tarta de queso"
            secondary="Con coulis de frutos rojos"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Sorbete de limón"
            secondary="Con menta fresca y ralladura de limón"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Coulant de chocolate"
            secondary="Con helado de vainilla y frutos rojos"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Crème brûlée"
            secondary="Con caramelo crujiente y vainilla de Madagascar"
          />
        </ListItem>
      </List>

      {/* Vinos */}
      <List
        subheader={
          <ListSubheader
            sx={{
              color: "primary.main",
              backgroundColor: "secondary.main",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}>
            VINOS
          </ListSubheader>
        }>
        <ListItem>
          <ListItemText
            primary="Vino tinto Gran Reserva"
            secondary="Bodega Marques de Riscal, 2012"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Vino blanco Albariño"
            secondary="Pazo Señorans, 2019"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Vino rosado Provenzal"
            secondary="Château d'Esclans, Whispering Angel, 2020"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Champagne Moët & Chandon"
            secondary="Brut Imperial"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Cava Freixenet"
            secondary="Cordon Negro Brut"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Disponemos de una amplia selección de vinos exclusivos."
            secondary="Consulte con nuestro sommelier para más opciones."
          />
        </ListItem>
      </List>

      {/* Cócteles y Combinados */}
      <List
        subheader={
          <ListSubheader
            sx={{
              color: "primary.main",
              backgroundColor: "secondary.main",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}>
            CÓCTELES Y COMBINADOS
          </ListSubheader>
        }>
        <ListItem>
          <ListItemText
            primary="Mojito clásico"
            secondary="Ron blanco, hierbabuena, lima, azúcar y soda"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Gin Tonic Premium"
            secondary="Gin Hendrick's, tónica Fever-Tree, pepino y pétalos de rosa"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Old Fashioned"
            secondary="Bourbon, azúcar, angostura y piel de naranja"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Margarita"
            secondary="Tequila, triple sec, lima y sal"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Negroni"
            secondary="Gin, vermut rojo, Campari y piel de naranja"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Nuestra carta de cócteles incluye muchas más opciones."
            secondary="Pregunte a nuestro bartender por cócteles especiales."
          />
        </ListItem>
      </List>
    </Box>
  );
};
