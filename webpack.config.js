const webpack = require("webpack");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const remoteComponentConfig = require("./remote-component.config").resolve;

const externals = Object.keys(remoteComponentConfig).reduce((obj, key) => ({...obj, [key]: key}), {});

module.exports = {
 plugins: [
  new webpack.EnvironmentPlugin({
   "process.env.NODE_ENV": process.env.NODE_ENV,
  }),
  new WebpackAssetsManifest(),
 ],
 entry: {
  main: "./src/Index.tsx",
 },
 output: {
  libraryTarget: "commonjs",
 },
 externals: {
  ...externals,
  "remote-component.config.js": "remote-component.config.js",
 },
 resolve: {
  extensions: [".ts", ".tsx", ".js"],
 },
 module: {
  rules: [
   {
    test: /\.tsx?$/,
    exclude: /(node_modules|bower_components)/,
    use: {
     loader: "ts-loader",
    },
   },
   {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
     loader: "babel-loader",
    },
   },
  ],
 },
};
