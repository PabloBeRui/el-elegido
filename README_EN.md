# El Elegido 🍽️

**El Elegido** is a restaurant project that presents a modern and responsive web interface, designed to enhance the user experience. It includes custom components using **React** and **Material-UI**, integrations with **OpenStreetMap** and **EmailJS** for reservations, and a carousel system to highlight main dishes.

## Demo

You can access the project at the following link: [El Elegido on GitHub](https://github.com/PabloBeRui/el-elegido).

## Main Features

- **Dynamic Navigation**: Implementation of dynamic routes with `react-router-dom`.
- **Responsive Design**: Adapted to different devices with the help of **Material-UI** and its breakpoints.
- **Image Carousel**: Implementation of an interactive image carousel using `react-slick` and `slick-carousel`.
- **Reservation Form**: Includes a functional reservation form that connects to **EmailJS** to send email notifications whenever a reservation is made.
- **Date and Time Picker**: Use of `DateTimePicker` from `@mui/x-date-pickers` to manage date and time selection.
- **Integration with OpenStreetMap**: Use of **React-Leaflet** to show the restaurant's location via OpenStreetMap.
- **Snackbar for Notifications**: Implementation of temporary notifications with Material-UI's `Snackbar`.
- **Weather API**: Displays the current weather using custom icons through a free API, with a fallback icon in case of connection issues.

- **API Key Protection**: Use of enviroment variables in Netlify to protect the project's API keys.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Material-UI**: Customizable and highly stylized UI components.
- **React-Router-Dom**: To handle navigation within the application.
- **React-Slick and Slick-Carousel**: Library to create image carousels.
- **Date-fns**: Efficient date management.
- **React-Leaflet**: Integration of maps via OpenStreetMap.
- **EmailJS**: Service to send emails from the client.
- **Netlify**: Hosting with serverless support.

## Installation

### Prerequisites

- Node.js and npm installed.

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/PabloBeRui/el-elegido.git
   ```
2. Navigate to the project directory:
   ```bash
   cd el-elegido
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```

### Installed Dependencies

#### Material-UI

- For UI components:
  ```bash
  npm install @mui/material @emotion/react @emotion/styled
  ```
- Icons:
  ```bash
  npm install @mui/icons-material
  ```

#### Image Carousel

- To implement an interactive carousel:
  ```bash
  npm install react-slick slick-carousel
  ```

#### DateTimePicker and date handling

```bash
npm install @mui/x-date-pickers @mui/lab @mui/material @emotion/react @emotion/styled
npm install @mui/x-date-pickers/AdapterDateFns
npm install date-fns
```

#### React-Leaflet (OpenStreetMap)

```bash
npm install react-leaflet leaflet
```

#### EmailJS to send confirmation emails

```bash
npm install emailjs-com
```

## Usage

1. Run the application in development mode:
   ```bash
   npm start
   ```
2. Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

## Production Deployment

This project is ready to be deployed on **Netlify**. You can use the following command to create an optimized build for production:

```bash
npm run build
```

## Images

The images used in the project are sourced from **Unsplash** and **Pexels**.

## Demo

You can access the live site here: [El Elegido on Netlify](https://elelegido.netlify.app/)


## Author

**Pablo Bellón Ruibal** [GitHub](https://github.com/PabloBeRui) 👷
