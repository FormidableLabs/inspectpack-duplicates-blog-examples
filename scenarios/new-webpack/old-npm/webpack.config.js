const { resolve } = require("path");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const { DuplicatesPlugin } = require("inspectpack/plugin");

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
  },
  plugins: [
    // Reference existing community plugin.
    process.env.DPCP ? new DuplicatePackageCheckerPlugin({
      emitError: process.env.DPCP_EMIT_ERROR === "true",
      verbose: process.env.DPCP_VERBOSE === "true"
    }) : null,
    // Inspectpack DuplicatesPlugin
    new DuplicatesPlugin({
      emitErrors: process.env.IP_EMIT_ERROR === "true",
      verbose: process.env.IP_VERBOSE === "true"
    })
  ].filter(Boolean)
};
