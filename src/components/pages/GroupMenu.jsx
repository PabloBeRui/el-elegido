import { Box, Typography } from "@mui/material";

import { Card } from "../Card";
import { menus } from "../helpers/backInformation";



export const GroupMenu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Typography
        variant="h4"
        align="center"
        color="#FFFFFF"
        gutterBottom
        sx={{ mt: 2, fontFamily: "GreatVibes" }}>
        Menús de Grupo
      </Typography>
      ;
      {menus.map((menu, index) => (
        <Card
          key={index}
          title={menu.title}
          description={menu.description}
          image={menu.image}
        />
      ))}
    </Box>
  );
};
