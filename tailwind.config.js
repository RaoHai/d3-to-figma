module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [ 'Menlo', 'Consolas', 'monaco', 'monospace' ],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
