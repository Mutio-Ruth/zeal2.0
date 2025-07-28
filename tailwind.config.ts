import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f97316', // orange-500
          light: '#fb923c',   // orange-400
          dark: '#ea580c',    // orange-600
        },
      },
    },
  },
  plugins: [],
}

export default config
