/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0d1117',
        surface: '#161b22',
        primary: '#58a6ff',
        secondary: '#8b949e',
        accent: '#d2a8ff',
        border: '#30363d',
        text: {
          light: '#ffffff',
          muted: '#8b949e',
        },
      },
      boxShadow: {
        'xl-glow': '0 0 24px 2px #58a6ff, 0 2px 8px 0 #161b22',
      },
    },
  },
  plugins: [],
}

