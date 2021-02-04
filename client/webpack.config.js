const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const entryPoints = [
  path.join(__dirname, "index.js"),
  path.join(__dirname, "scss/index.scss")
]

module.exports = {
  entry: entryPoints,
  output: {
    path: path.join(__dirname, "../server/public"),
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "[id].css",
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",
}
