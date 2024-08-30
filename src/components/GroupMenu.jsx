import { Box, Typography } from "@mui/material";

export const GroupMenu = () => {
  return (
    <Box>
      <Typography>Elige entre nuestros menus</Typography>
      <Box>
        <Box>
          <Typography>Menu 1</Typography>
          <Box>
            <Typography>degustacion platos</Typography>
          </Box>
        </Box>
        <Box>
          <Typography>Menu 2</Typography>
          <Box>
            <Typography>3 platos </Typography>
          </Box>
        </Box>
        <Box>
          <Typography>Menu 3</Typography>
          <Box>
            <Typography>
              menu especial de la casa acompañado de vino y champagne
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
