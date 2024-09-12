import { Box, Typography } from "@mui/material";

import { Card } from "../Card";
import { specialties } from "../helpers/backInformation";

export const HouseSpecialties = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {/* mt:2 -> 2*8 px */}
      <Typography
        variant="h4"
        align="center"
        color="#FFFFFF"
        gutterBottom
        sx={{ mt: 2, fontFamily: "GreatVibes" }}>
        Especialidades de la Casa
      </Typography>
      {
        //mapeo las especialidades
        specialties.map((specialtie, index) => (
          <Card
            key={index}
            title={specialtie.title}
            description={specialtie.description}
            image={specialtie.image}
          />
        ))
      }
    </Box>
  );
};
