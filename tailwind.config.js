/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyprus: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        sand: {
          50: "#fbfaf7",
          100: "#f7f3eb",
          200: "#f0ede4",
          300: "#e5ddce",
          400: "#d6cfc0",
          500: "#b9ad9d",
          600: "#8f8271",
          700: "#665a4d",
          800: "#3f372f",
          900: "#211d19",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, rgba(6, 8, 16, 0.98) 0%, rgba(9, 17, 34, 0.92) 45%, rgba(6, 8, 16, 0.98) 100%)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.7",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.05)",
          },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
