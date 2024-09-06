import { Box } from "@mui/material";

//CSS necesario para una buena visualizacion del mapa
import "leaflet/dist/leaflet.css";

// importaciones de  MapContainer para construir el mapa con un marcador y una ventana emergente.
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Importo los iconos de Leaflet manualmente debido a que no se visualiza correctamente
import L from "leaflet";

// Configuración manual por defecto del icono del marcador
const markerIcon = new L.Icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto de anclaje (el marcador se coloca aquí)
  popupAnchor: [1, -34], // Donde se colocará el popup respecto al icono
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"), // Sombra del marcador
  shadowSize: [41, 41],
});

export const OurLocation = () => {
  // Ubicación del restaurante
  const position = [43.3685, -8.4181];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80dvh",
        width: "90dvw",
        maxWidth: "800px",
        margin: "auto",
        borderRadius: "1000px",
      }}>
      {/* Box adicional para borderRadius */}
      <Box
        sx={{
          height: { xs: "40dvh", md: "50dvh" },
          width: "100%",
          borderRadius: "30px", // Aplica un borde redondeado
          overflow: "hidden", // Evita que el contenido sobresalga del borde redondeado
          margin: "auto",
        }}>
        {/* // MapContainer crea el contenedor del mapa. La propiedad center define la posición inicial del mapa */}
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "100%", width: "100%" }}>
          {/* TileLayer es el proveedor de imágenes del mapa, en este caso OpenStreetMap */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {/* Marker coloca un marcador en la ubicación especificada */}
          <Marker position={position} icon={markerIcon}>
            {/* Popup es un cuadro emergente que aparece al hacer clic en el marcador */}
            <Popup>Aquí está el restaurante El Elegido.</Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Box>
  );
};
