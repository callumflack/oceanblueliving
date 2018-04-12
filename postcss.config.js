/* eslint-disable */

module.exports = {
  plugins: [
    require("postcss-easy-import")(),
    require("postcss-mixins")(),
    require("postcss-custom-selectors"),
    // https://github.com/MoOx/postcss-cssnext/blob/master/src/features.js
    require('postcss-cssnext')({
      features: {
        customProperties: false
      }
    }),
    // require("postcss-discard-comments"), // can use cssnano instead…
    // http://cssnano.co/optimisations/
    // require('cssnano')({
    //   preset: 'default',
    // }),
  ]
};
