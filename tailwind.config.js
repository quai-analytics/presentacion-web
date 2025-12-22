/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        quai: {
          // Colores principales de la paleta QuAI
          // Actualiza estos valores según la paleta de colores oficial
          navy: "#082038",    // Azul marino oscuro "#061729"- fondo principal
          blue: "#256E3B",    // Azul medio "#0E3D91" - acentos secundarios
          teal: "#2563EB",    // Turquesa - color de acento principal (CTAs, links)
          sand: "#DBCDC6"     // Beige/arena #F6E7D8 - color claro para contraste
          
          // Para agregar más colores, sigue este formato:
          // nombreColor: "#HEXCODE",
          
          // También puedes agregar variantes con opacidad usando:
          // nombreColor: {
          //   DEFAULT: "#HEXCODE",
          //   50: "#HEXCODE",
          //   100: "#HEXCODE",
          //   ...
          // }
        }
      }
    }
  },
  plugins: []
};


