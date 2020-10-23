module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: { 
    preserveHtmlElements: false,
    // enabled: true,
    content: [
      './pages/**/*.html',
      './pages/**/*.js',
      './pages/**/*.jsx',
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
