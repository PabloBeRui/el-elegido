# El Elegido 🍽️

**El Elegido** es un proyecto de restaurante que presenta una interfaz web moderna y responsive, diseñada para mejorar la experiencia del usuario. Incluye componentes personalizados utilizando **React** y **Material-UI**, integraciones con **OpenStreetMap** y **EmailJS** para reservas, y un sistema de carrusel de imágenes para destacar los platos principales.

## Demo

Puedes acceder al proyecto en el siguiente enlace: [El Elegido en GitHub](https://github.com/PabloBeRui/el-elegido).

## Características Principales

- **Navegación Dinámica**: Implementación de rutas dinámicas con `react-router-dom`.
- **Diseño Responsivo**: Adaptado a diferentes dispositivos con la ayuda de **Material-UI** y sus breakpoints.
- **Carrusel de Imágenes**: Implementación de un carrusel de imágenes interactivo utilizando `react-slick` y `slick-carousel`.
- **Formulario de Reservas**: Incluye un formulario de reservas funcional que se conecta a **EmailJS** para enviar notificaciones por correo electrónico cada vez que se realiza una reserva.
- **Picker de Fechas y Horas**: Uso de `DateTimePicker` de `@mui/x-date-pickers` para gestionar la selección de fechas y horas.
- **Integración con OpenStreetMap**: Utilización de **React-Leaflet** para mostrar la ubicación del restaurante mediante OpenStreetMap.
- **Snackbar para Notificaciones**: Implementación de notificaciones temporales con `Snackbar` de Material-UI.
- **API Meteorológica**: Muestra el clima actual con iconos personalizados a través de una API gratuita (usa un fallback en caso de fallos de conexión).
- **Protección de Claves API**: Uso de variables de entorno en Netlify para proteger las claves API del proyecto.

## Tecnologías Utilizadas

- **React**: Biblioteca JavaScript para crear interfaces de usuario.
- **Material-UI**: Componentes de UI personalizables y altamente estilizados.
- **React-Router-Dom**: Para manejar la navegación dentro de la aplicación.
- **React-Slick y Slick-Carousel**: Biblioteca para crear carruseles de imágenes.
- **Date-fns**: Manejo de fechas de manera eficiente.
- **React-Leaflet**: Integración de mapas mediante OpenStreetMap.
- **EmailJS**: Servicio para enviar correos electrónicos desde el cliente.
- **Netlify**: Hosting con soporte serverless.

## Instalación

### Requisitos Previos

- Node.js y npm instalados.

### Pasos para la instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/PabloBeRui/el-elegido.git
   ```
2. Accede al directorio del proyecto:
   ```bash
   cd el-elegido
   ```
3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

### Dependencias Instaladas

#### Material-UI

- Para componentes de UI:
  ```bash
  npm install @mui/material @emotion/react @emotion/styled
  ```
- Iconos:
  ```bash
  npm install @mui/icons-material
  ```

#### Carrusel de Imágenes

- Para implementar un carrusel interactivo:
  ```bash
  npm install react-slick slick-carousel
  ```

#### DateTimePicker y manejo de fechas

```bash
npm install @mui/x-date-pickers @mui/lab @mui/material @emotion/react @emotion/styled
npm install @mui/x-date-pickers/AdapterDateFns
npm install date-fns
```

#### React-Leaflet (OpenStreetMap)

```bash
npm install react-leaflet leaflet
```

#### EmailJS para enviar correos de confirmación

```bash
npm install emailjs-com
```

## Uso

1. Ejecuta la aplicación en modo de desarrollo:
   ```bash
   npm start
   ```
2. Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en el navegador.

## Implementación en Producción

Este proyecto está preparado para ser desplegado en **Netlify**. Puedes utilizar el siguiente comando para hacer un build optimizado para producción:

```bash
npm run build
```

## Imágenes

Las imágenes utilizadas en el proyecto provienen de **Unsplash** y **Pexels**.

## Demo

Puedes acceder al sitio en producción aquí: [El Elegido en Netlify](https://elelegido.netlify.app/)

## Autor

**Pablo Bellón Ruibal** [GitHub](https://github.com/PabloBeRui) 👷
