module.exports = {
  syntax: require("postcss-scss"),
  plugins: [
    require("autoprefixer")({
      browsers: ["> 1%", "last 2 versions"]
    }),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
};
