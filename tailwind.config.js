/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0D0F',
        surface: '#141719',
        border: '#23272B',
        accent: {
          DEFAULT: '#A3E635',
          hover: '#8FD128',
          dim: 'rgba(163, 230, 53, 0.1)',
        },
        typography: {
          primary: '#F2F4F3',
          secondary: '#969DA3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
