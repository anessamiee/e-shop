module.exports = {
  variants: {},
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    backgroundImage: {
      illustration: "url('../public/illustrations.svg')",
    },
    colors: {
      white: '#fff',
      blue: '#455D7A',
      'dark-grey': '#4F4F4F',
      'light-grey': '#E5E5E5',
      'dark-blue': '#233142',
      red: '#F95959',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
