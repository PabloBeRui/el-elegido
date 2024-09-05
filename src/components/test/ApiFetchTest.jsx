import { useEffect } from "react";
import { ApiFetch } from "../helpers/ApiFetch";

export const ApiFetchTest = () => {
  // ApiFetch devuelve un objeto con los valores: data, loading, y error.
  const { data, loading, error } = ApiFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  useEffect(() => {
    //Comprobando si carga, si hay un error y si recibe datos

    loading && console.log("cargando");

    error && console.log(`Ha habido un error: ${error}`);

    data && console.log(data);

    !loading && console.log("terminado de cargar");
  }, [data, loading, error]);

  //retorno null porque únicamente voy a probar en consola
  return null;
};
