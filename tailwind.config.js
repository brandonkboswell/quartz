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
  content: [
    "./content/*.md",
    "./layouts/**/*.html",
  ],
  theme: {
    extend: {},
  },
}

