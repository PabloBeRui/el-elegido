//Limito días y horas del dateTimePicker

//dias permitidos
const allowedDays = [0, 2, 3, 4, 5, 6];

//horas permitidas

const allowedHours = [12, 13, 14, 15, 20, 21, 22, 23];
const allowedMinutes = [0, 30];

//Función para deshabilitar los días permitidos
//Si el día no está en el array, devolverá true y se deshabilitará

export const shouldDisableDate = (date) => {
  const day = date.getDay();

  return !allowedDays.includes(day);
};

//Función para deshabilitar horas
export const shouldDisableTime = (timeValue, clockType) => {
  if (clockType === "hours") {
    return !allowedHours.includes(timeValue);
  }
  if (clockType === "minutes") {
    return !allowedMinutes.includes(timeValue);
  }
};
