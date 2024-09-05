import { useEffect, useState } from "react";

export const ApiFetch = ( url, options ) => {
  // UseState de datos, estado de carga y estado de errores

  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Función para hacer el fetch

    const fetchData = async () => {
      setloading(true); //cambio el estado a cargando

      try {
        //Solicitud de fetch
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(response.status);
        }

        const jsonData = await response.json();
        setdata(jsonData); // almaceno los datos en data
      } catch (error) {
        setError(error.message); //almaceno el mensaje de error
      } finally {
        setloading(false); //quito el estado de carga
      }
    };
    fetchData();
  }, [url, options]);

  //Devuelvo los nuevos valores de data, loading y error

  return { data, loading, error };
};

