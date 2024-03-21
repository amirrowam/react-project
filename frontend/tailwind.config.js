/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding : {
          DEFAULT : "1rem",
          lg: "0.625rem"
        }
      },
      colors: {
        'brown': {
          100: "#ECE0D1",
          300: "#DBC1AC ",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        "costume-shadow": "0 1px 10px rgba(0,0,0,0.05)"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    },
    screens:{
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px'
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '&>*');
      addVariant('child-hover', '&>*:hover')
    }
  ],
}