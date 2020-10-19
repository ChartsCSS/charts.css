module.exports = {
  map: false,
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    })
  ]
};
