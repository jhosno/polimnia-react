/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.jsx"],
  content: [],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '12': 'repeat(12, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      },
      gridRow: {
        'span-10': 'span 10 / span 10',
        'span-12': 'span 12 / span 12',
      }
    },
  },
  plugins: [],
}
