//Funcion para enviar con emailJs los datos del formulario de Reservations a un mail

import emailjs from "emailjs-com";

export const sendEmail = async (form) => {
  try {
    //Envio los datos del formulario a través de EmailJS

    const formSendData = await emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form,
      process.env.REACT_APP_EMAILJS_USER_ID
    );

    console.log("Datos del formulario enviados con éxito:", formSendData);

    return formSendData;
  } catch (error) {
    // Error: muestra el error en la consola
    console.error(
      `Error en el proceso de envío de los datos del formulario: ${error}`
    );

    throw error;
  }
};
