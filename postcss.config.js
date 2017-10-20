module.exports = {
  plugins: {
    'postcss-cssnext': {
      browserslist: [
        '> 1%',
        'last 3 versions'
      ],
      features: {
        customProperties: false
      }
    }
  }
}
