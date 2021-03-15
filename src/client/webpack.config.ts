import "node-polyfill-webpack-plugin"

import * as path from "path"
import * as webpack from "webpack"
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")

const config: webpack.Configuration = {
  mode: "development",
  entry: path.join(__dirname, "./app.ts"),
  plugins: [new MiniCSSExtractPlugin({ filename: "app.css" })],
  devtool: "eval-source-map",
  stats: "minimal",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "import-glob-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@common": path.join(__dirname, "../common/"),
    },
  },
  output: {
    path: path.join(__dirname, "../../target/client"),
    filename: "app.js",
  },
}

export default config
