/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.bold') },
        'h2': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold') },
        'h3': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.bold')},
        'h4': { fontSize: theme('fontSize.md'), fontWeight: theme('fontWeight.bold') },
        'h5': { fontSize: theme('fontSize.md'), fontWeight: theme('fontWeight.bold') },
      })
    }),
    require('@tailwindcss/typography'),
  ],
  content: {
    relative: true,
    files: [
      "./content/*.md",
      "./layouts/**/*.html",
      "./static/**/*.html",
    ],
  },
  safelist: [
  ],
  theme: {
    extend: {
      colors: {
        'contessa': {
          '50': '#fbf6f5',
          '100': '#f6ecea',
          '200': '#f0dcd8',
          '300': '#e4c3bd',
          '400': '#d3a096',
          '500': '#ba7264',
          '600': '#aa6558',
          '700': '#8e5347',
          '800': '#77463d',
          '900': '#643f38',
          '950': '#351e1a',
        },
      }
    },
  },
}

