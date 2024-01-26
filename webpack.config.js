const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
module.exports = {
  entry: { yapidoo_styles: "./src/assets/styles/index.scss"},
  output: {
    path: path.resolve(__dirname, "public")
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({filename: "css/[name].css", chunkFilename: "[id].css"})
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
              url: false,
            },
          },
          ,
          "sass-loader",
        ],
      },
    ],
  },
};
