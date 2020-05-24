module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['hover', 'focus', 'responsive', 'disabled'],
    textColor: ['hover', 'focus', 'responsive', 'disabled'],
    borderColor: ['hover', 'focus', 'responsive', 'disabled'],
    cursor: ['disabled']
  },
  plugins: [],
}