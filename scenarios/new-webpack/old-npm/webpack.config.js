const { resolve } = require("path");

module.exports = {
  mode: "development",
  devtool: false,
  context: resolve(__dirname, ".."),
  entry: {
    bundle: resolve(__dirname, "index.js")
  },
  output: {
    path: resolve(__dirname, "dist"),
    pathinfo: true,
    filename: "[name].js"
  }
};
