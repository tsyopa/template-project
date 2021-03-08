import "node-polyfill-webpack-plugin"

import * as path from "path"
import * as webpack from "webpack"

const config: webpack.Configuration = {
  mode: "development",
  entry: path.join(__dirname, "./app.ts"),
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
          "style-loader",
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
    filename: "app.bundle.js",
  },
}

export default config
