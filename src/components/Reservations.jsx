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
import { sendEmail } from "./helpers/sendEmail.js";

export const Reservations = () => {
  //Voy a crear un useState y un useEffect para controlar la solicitud del diía y la hora

  const [selectDate, setSelectDate] = useState(new Date());

  const handleDateChange = (updatedValue) => {
    setSelectDate(updatedValue);
  };

  //Voy a crear un useState y un useEffect para controlar Snackbar
  // Snackbar-> componente para mensajes temporales (al dar a submit)

  const [openSnackbar, setOpenSnackbar] = useState(false);

  //Funcion para abrir el sanckBar al presionar el boton de reserva
  //TODO Agrego dentro el la función sendEmail para enviar el formulario con EmailJS
  const handleSubmitSnackbar = async (event) => {
    // Evito el reinicio automático del formulario al hacer submit
    event.preventDefault();
    setOpenSnackbar(true);

    // llamo a la función sendEmail y le paso el formulario

    const result = await sendEmail(event.target);
    console.log("Correo enviado exitosamente:", result);

    // Reinicio el formulario después de mostrar el mensaje
    event.target.reset();
  };

  //Voy a crear un useState y un UseEffect para manejar el cambio de selección del radius

  const [selectedRadius, setSelectedRadius] = useState(1);

  const handleRadius = (event) => {
    let value = event.target.value;

    setSelectedRadius(value);
  };

  return (
    // Envuelvo el componente con `LocalizationProvider` para asegurar la correcta localización de fecha y hora.
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          minHeight: "82vh",
          alignItems: "center",
          maxWidth: 600,
          margin: "0 auto",
        }}>
        <Typography
          sx={{
            textAlign: "center",
            mt: 2,
            mb: 4,
          }}>
          ¿Quieres reservar una experiencia culinaria con nosotros? Solicítala
          Aqui
        </Typography>
        {/* Creo un formulario aplicando los estilos de MUI  */}
        {/* {Utilizo el formulario que me proporciona el propio miu } */}
        <Box
          component="form"
          onSubmit={handleSubmitSnackbar}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            margin: "0 auto",
            gap: 0.5,
          }}>
          <TextField
            name="name"
            label="Nombre"
            type="text"
            sx={{ mb: 1, display: "block" }}
            required
          />
          <TextField
            name="phone"
            label="Teléfono"
            type="tel"
            sx={{ mb: 1, display: "block" }}
            required
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            sx={{ mb: 4, display: "block" }}
          />
          {/* Creo un grupo de inputs de tipo radio */}
          <RadioGroup
            name="reservationType"
            value={selectedRadius}
            onChange={handleRadius}>
            <FormLabel>Elija una opcion</FormLabel>
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="1-10 personas"
            />
            <FormControlLabel
              value={10}
              control={<Radio />}
              label="Grupo (10+ personas)"
            />
            <FormControlLabel
              value={20}
              control={<Radio />}
              label="Evento especial (20+ personas)"
            />
          </RadioGroup>
          <DateTimePicker
            label="Selecciona día y hora"
            inputFormat="dd/MM/yyyy HH:mm"
            value={selectDate}
            onChange={handleDateChange}
            shouldDisableDate={shouldDisableDate}
            shouldDisableTime={shouldDisableTime}
            renderInput={(params) => (
              <TextField {...params} sx={{ mt: 4, mb: 4 }} />
            )} //Prop propia de DateTimePicker
          />

          {/*Agrego un campo oculto en el formulario para incluir el valor de fecha y hora que está siendo manejado
           por el estado selectDate para intentar solucionar que DateTimePicker no permite tolocaleString() */}
          <input
            type="hidden"
            name="dateTime"
            value={selectDate.toLocaleString()}
          />

          {/* añado margen y relleno al botón */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mb: 6, display: "block" }}>
            Reservar
          </Button>
        </Box>
        <Typography
          sx={{
            textAlign: "center",
          }}>
          Martes a Domingo de 12:00 a 18:00 y de 20:00 a 3:00
        </Typography>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000} // Duración en milisegundos
          onClose={() => setOpenSnackbar(false)}
          message="Solicitud de Reserva enviada con éxito"
        />
      </Box>
    </LocalizationProvider>
  );
};
