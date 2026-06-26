/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#0B1220", // Dark Navy
        surface: "#111827", // Slightly lighter for cards
        primary: "#2563EB", // Electric Blue
        accent: "#FACC15", // Accent Yellow
        success: "#22C55E", // Health Green
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #3B82F6 0deg, rgba(59, 130, 246, 0) 180deg, #3B82F6 360deg)',
      }
    },
  },
  plugins: [],
}
