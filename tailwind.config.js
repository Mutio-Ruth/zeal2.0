// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',      // For files in src/app (like layout.tsx, page.js)
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // For files in src/components (like Header.js)
    // If you have any other directories with JSX/TSX/MDX files that use Tailwind, add them here.
    // If you happen to have a 'pages' directory at the root (not src/pages), you'd add:
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}