const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FavinconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images',
          useRelativePath: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'project.html',
      template: './src/templates/project.html',
      minify: {
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'exercises/ball.html',
      template: './src/exercises/ball.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'exercises/ellipse.html',
      template: './src/exercises/ellipse.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'exercises/sky.html',
      template: './src/exercises/sky.html',
    }),
    new FavinconsWebpackPlugin({
      logo: './src/images/favicon-32x32.png',
      mode: 'light',
    }),
  ],
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new CssMinimizerPlugin(),
  //   ],
  // },
  // mode: 'production',
  mode: 'development',
};
