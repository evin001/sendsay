const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const prod = process.env.NODE_ENV === 'production'

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.((woff(2)?)|ttf|eot|otf)(\?[a-z0-9#=&.]+)?$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Senday console",
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({ filename: 'app.css' }),
  ],
  ...(!prod
    ? {
      devServer: {
        port: 3000,
        open: false,
        hot: true,
        compress: true,
        stats: 'errors-only',
        overlay: true,
        historyApiFallback: true
      },
    }
    : {
      optimization: {
        minimizer: [
          new TerserJSPlugin({}),
          new OptimizeCSSAssetsPlugin({}),
        ],
      },
    }),
}
