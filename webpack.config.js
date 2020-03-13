const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // productionを指定すると実行効率の良いコードを生成する
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader",
            options: {
              pretty: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: __dirname + "/src/pug/index.pug"
    })
  ]
};
