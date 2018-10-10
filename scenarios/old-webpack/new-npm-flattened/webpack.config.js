const { resolve } = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: false,
  context: resolve(__dirname, ".."),
  entry: {
    bundle: resolve(__dirname, "index.js")
  },
  output: {
    path: resolve(__dirname, "dist"),
    pathinfo: true,
    filename: "[name].js"
  },
  plugins: [
    new webpack.optimize.DedupePlugin()
  ]
};
