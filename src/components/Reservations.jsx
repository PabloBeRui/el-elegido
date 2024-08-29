import {
  Button,
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Snackbar,
} from "@mui/material";

import { useState } from "react";
//Importo una biblioteca para manejar las fechas en el calendario
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// Importo la localización en español desde `date-fns`
import { es } from "date-fns/locale";

//importo las restricciones de DateTimePicker

import {
  shouldDisableDate,
  shouldDisableTime,
} from "./helpers/dateTimePickerRestrictions.js";

export const Reservations = () => {
  //Voy a crear un useState y un useEffect para controlar la solicitud del diía y la hora

  const [selectDate, setSelectDate] = useState(new Date());

  const handleDateChange = (updatedValue) => {
    setSelectDate(updatedValue);
  };

  //Voy a crear un useState y un useEffect para controlar Snackbar
  // Snackbar-> componente para mensajes temporales (al dar a submit)

  const [openSnackbar, setOpenSnackbar] = useState(false);

  //Abrir al presionar el boton de reserva
  const handleSubmitSnackbar = (event) => {
    // Evito el reinicio automático del formulario al hacer submit
    event.preventDefault();
    setOpenSnackbar(true);

    // Reinicio el formulario después de mostrar el mensaje
    event.target.reset();
  };

  return (
    // Envuelvo el componente con `LocalizationProvider` para asegurar la correcta localización de fecha y hora.
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
      <Box>
        <Typography>
          ¿Quieres reservar una experiencia culinaria con nosotros? Solicítala
          Aqui
        </Typography>

        {/* Creo un formulario aplicando los estilos de MUI  */}
        {/* {Utilizo el formulario no controlado que me proporciona el propio miu } */}
        <form onSubmit={handleSubmitSnackbar}>
          <TextField name="name" label="Nombre" type="text" required />
          <TextField name="phone" label="Teléfono" type="tel" required />
          <TextField name="email" label="Email" type="email" />
          {/* Creo un grupo de inputs de tipo radio */}
          <RadioGroup name="reservationType">
            <FormLabel>Elija una opcion</FormLabel>
            <FormControlLabel
              value="dinner"
              control={<Radio />}
              label="Cena (1-10 personas)"
              labelPlacement="start" //Coloco el radio a la derecha del texto
            />
            <FormControlLabel
              value="groupDinner"
              control={<Radio />}
              label="Cena en grupo (10+ personas)"
              labelPlacement="start"
            />
            <FormControlLabel
              value="specialEvent"
              control={<Radio />}
              label="Evento especial (20+ personas)"
              labelPlacement="start"
            />
          </RadioGroup>
          <DateTimePicker
            label="Selecciona día y hora"
            inputFormat="dd/MM/yyyy HH:mm"
            value={selectDate}
            onChange={handleDateChange}
            shouldDisableDate={shouldDisableDate}
            shouldDisableTime={shouldDisableTime}
            renderInput={(params) => <TextField {...params} />} //Prop propia de DateTimePicker
          />{" "}
          Abierto de Martes a Domingo de 12:00 a 18:00 y de 20:00 a 3:00
          {/* añado margen y relleno al botón */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}>
            Reservar
          </Button>
        </form>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000} // Duración en milisegundos (3 segundos)
          onClose={() => setOpenSnackbar(false)}
          message="Reserva enviada con éxito"
        />
      </Box>
    </LocalizationProvider>
  );
};
