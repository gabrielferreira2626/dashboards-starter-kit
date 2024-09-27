const webpack = require("webpack");
const remoteComponentConfig = require("./remote-component.config").resolve;
const GenerateJsonPlugin = require("generate-json-webpack-plugin");

const externals = Object.keys(remoteComponentConfig).reduce((obj, key) => ({...obj, [key]: key}), {});

const ComponentTemplate = require("./src/Template.json");

module.exports = {
 plugins: [new webpack.EnvironmentPlugin({"process.env.NODE_ENV": process.env.NODE_ENV}), new GenerateJsonPlugin("template.json", ComponentTemplate)],
 entry: {
  template: "./src/Index.tsx",
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
