/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      brightness: {
        15: ".15",
        25: ".25",
        175: "1.75",
      },
      height: {
        "10v": "10vh",
        "15v": "15vh",
        "17v": "17vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "75v": "75vh",
        "80v": "80vh",
        "85v": "85vh",
        "90v": "90vh",
        "95v": "95vh",
        "100v": "100vh",
        "10vw": "10vw",
        "20vw": "20vw",
        "30vw": "30vw",
        "40vw": "40vw",
        "50vw": "50vw",
        "60vw": "60vw",
        "70vw": "70vw",
        "75vw": "75vw",
        "80vw": "80vw",
        "85vw": "85vw",
        "90vw": "90vw",
        "95vw": "95vw",
        "100vw": "100vw",
      },
      maxHeight: {
        "10v": "10vh",
        "15v": "15vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "75v": "75vh",
        "80v": "80vh",
        "85v": "85vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      width: {
        "10v": "10vh",
        "15v": "15vh",
        "17v": "17vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "75v": "75vh",
        "80v": "80vh",
        "85v": "85vh",
        "90v": "90vh",
        "95v": "95vh",
        "100v": "100vh",
        "10vw": "10vw",
        "20vw": "20vw",
        "30vw": "30vw",
        "40vw": "40vw",
        "50vw": "50vw",
        "60vw": "60vw",
        "70vw": "70vw",
        "75vw": "75vw",
        "80vw": "80vw",
        "85vw": "85vw",
        "90vw": "90vw",
        "95vw": "95vw",
        "100vw": "100vw",
        "110vw": "110vw",
      },
      maxWidth: {
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "60v": "60vw",
        "70v": "70vw",
        "75v": "75vw",
        "80v": "80vw",
        "90v": "90vw",
        "100v": "100vw",
      },
      translate: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "35v": "35vh",
        "40v": "40vh",
        "45v": "45vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "75v": "75vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      colors: {
        'dark-green': '#4E9F3D',
        'theme-black': '#191A19',
      },
      spacing: {
        "10v": "10vh",
        "15v": "15vh",
        "17v": "17vh",
        "20v": "20vh",
        "25v": "25vh",
        "30v": "30vh",
        "40v": "40vh",
        "43v": "43vh",
        "44v": "44vh",
        "45v": "45vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "75v": "75vh",
        "80v": "80vh",
        "85v": "85vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      inset: {
        '1/8': '12.5%',
      },
    },
    plugins: [require("tailwindcss-animate")],
  },
};
