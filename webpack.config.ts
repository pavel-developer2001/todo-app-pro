import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import ESLintPlugin from "eslint-webpack-plugin"
import { CleanWebpackPlugin } from "clean-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",

          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
}
