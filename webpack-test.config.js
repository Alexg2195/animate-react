module.exports = {
  entry: "./test/app.js",
  output: {
    filename: "./test/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"],
        }
      }
    ]
  },
  devtool: "eval-source-map"
};
