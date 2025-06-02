/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, },
          "100%": { opacity: 1,}
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "25%": {
            width: "0%",
            visibility: "hidden",
          },
          "70%": {
            width: "0%",
            visibility: "visible",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        fade: "fadeIn 3s forwards",
        gradient: "gradient 3s linear infinite",
        fadeGradient: "fadeIn 3s forwards, gradient 3s linear infinite",
        typing: "typing 3s steps(10) forwards, blink 1s infinite",
      },
    },
  },
  plugins: [],
}

