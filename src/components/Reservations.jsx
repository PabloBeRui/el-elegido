import React from 'react'

export const Reservations = () => {
  return (
    <div>Reservations temporal</div>
  )
}




// import {
//   Box,
//   FormControlLabel,
//   FormLabel,
//   Radio,
//   RadioGroup,
//   TextField,
//   Typography,
// } from "@mui/material";

// //Importo una biblioteca para manejar las fechas en el calendario
// import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
// import { useState } from "react";

// export const Reservations = () => {
//   //Voy a crear un useState y un useEffect para controlar la solicitud del diía y la hora

//   const [selectDate, setSelectDate] = useState(new Date());

//   const handleDateChange = (updatedValue) => {
//     setSelectDate(updatedValue);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//     <Box>
//       <Typography>
//         ¿Quieres reservar una experiencia culinaria con nosotros? Solicítala
//         Aqui
//       </Typography>

//       {/* Creo un formulario aplicando los estilos de MUI  */}
//       {/* {Utilizo el formulario no controlado que me proporciona el propio miu } */}
//       <form>
//         <TextField name="name" label="Nombre" type="text" required />
//         <TextField name="phone" label="Teléfono" type="tel" required />
//         <TextField name="email" label="Email" type="email" />
//         {/* Creo un grupo de inputs de tipo radio */}
//         <RadioGroup name="reservationType">
//           <FormLabel>Elija una opcion</FormLabel>
//           <FormControlLabel
//             value="dinner"
//             control={<Radio />}
//             label="Cena (1-10 personas)"
//             labelPlacement="start" //Coloco el radio a la derecha del texto
//           />
//           <FormControlLabel
//             value="groupDinner"
//             control={<Radio />}
//             label="Cena en grupo (10+ personas)"
//             labelPlacement="start"
//           />
//           <FormControlLabel
//             value="specialEvent"
//             control={<Radio />}
//             label="Evento especial (20+ personas)"
//             labelPlacement="start"
//           />
//         </RadioGroup>
//         <DateTimePicker
//           label="Selecciona día y hora"
//           value={selectDate}
//           onChange={handleDateChange}
//           renderInput={(params) => <TextField {...params} />} //Prop propia de DateTimePicker
//         />
//       </form>
//       </Box>
//       </LocalizationProvider>
//   );
// };

