/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'vermelho-fundo': '#7D2727',
        'gradiente': '#540606',
        'input': '#4F0000',
        'placeholder': '#860000',
        'input-add' : '#D3B3B3'
      }
    },
  },
  plugins: [],
}

