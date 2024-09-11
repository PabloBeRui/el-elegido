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
// Importo una biblioteca para manejar las fechas en el calendario
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// Importo la localización en español desde `date-fns`
import { es } from "date-fns/locale";

// Importo las restricciones de DateTimePicker
import {
  shouldDisableDate,
  shouldDisableTime,
} from "./helpers/dateTimePickerRestrictions.js";
import { sendEmail } from "./helpers/sendEmail.js";
import { useTheme } from "@emotion/react";

export const Reservations = () => {
  // Tema personalizado
  const theme = useTheme();

  // Voy a crear un useState para controlar la solicitud del día y la hora
  const [selectDate, setSelectDate] = useState(new Date());

  // Función para manejar el cambio de fecha
  const handleDateChange = (updatedValue) => {
    setSelectDate(updatedValue);
  };

  // Voy a crear un useState para controlar el Snackbar
  // Snackbar -> componente para mensajes temporales (al dar a submit)
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Función para abrir el Snackbar al presionar el botón de reserva
  // TODO: Agrego dentro la función sendEmail para enviar el formulario con EmailJS
  const handleSubmitSnackbar = async (event) => {
    // Evito el reinicio automático del formulario al hacer submit
    event.preventDefault();
    setOpenSnackbar(true);

    // Llamo a la función sendEmail y le paso el formulario
    const result = await sendEmail(event.target);
    console.log("Correo enviado exitosamente:", result);

    // Reinicio el formulario después de mostrar el mensaje
    event.target.reset();
  };

  // Voy a crear un useState para manejar el cambio de selección del radio
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
          padding: 2,
          border: `1px solid ${theme.palette.secondary.main}`, // Borde secundario
          borderRadius: 2,
          boxShadow: 1,
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Fondo blanco con transparencia
        }}>
        <Typography
          sx={{
            textAlign: "center",
            mt: 2,
            mb: 3,
          }} color="secondary">
          ¿Quieres reservar una experiencia culinaria con nosotros? Solicítala
          Aquí
        </Typography>

        {/* Formulario */}
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
          }} >
          {/* inputProps -> propiedad de MUI para uso de expresiones regulares */}
          <TextField
            name="name"
            label="Nombre"
            type="text"
            sx={{ mb: 2, display: "block" }}
            required
            inputProps={{ pattern: "^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,}$" }} // Al menos 2 letras
            helperText="Use al menos 2 letras"
            color="secondary"
          />
          <TextField
            name="phone"
            label="Teléfono"
            type="tel"
            sx={{ mb: 2, display: "block" }}
            required
            color="secondary"
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            sx={{ mb: 2, display: "block" }}
            color="secondary"
          />
          {/* Creo un grupo de inputs de tipo radio */}
          <RadioGroup
            name="reservationType"
            value={selectedRadius}
            onChange={handleRadius}>
            <FormLabel>Elija una opción</FormLabel>
            <FormControlLabel
              value={1}
              control={<Radio color="secondary" />}
              label="1 a 10 personas"
            />
            <FormControlLabel
              value={10}
              control={<Radio color="secondary" />}
              label="Grupo (+10 personas)"
            />
            <FormControlLabel
              value={20}
              control={<Radio color="secondary" />}
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
            )}
            color="secondary"
          />

          {/* Agrego un campo oculto en el formulario para incluir el valor de fecha y hora */}
          <input
            type="hidden"
            name="dateTime"
            value={selectDate.toLocaleString()}
          />

          {/* Añado margen y relleno al botón */}
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ mb: 6, display: "block" }}>
            Reservar
          </Button>
        </Box>

        <Typography sx={{ textAlign: "center" }}>
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
