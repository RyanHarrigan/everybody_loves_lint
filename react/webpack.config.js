const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// build React. Webpack doesn't inherently run linting operations
module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path:  path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|tsx)?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
  }
};