/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'cyan': '#22d3ee',
        'darkblue': '#1d1b67',
        'lightblue': '#a5f3fc',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      textColor: {
        'custom': '#1d1b67',
      },
    },
  },
  plugins: [],
}
