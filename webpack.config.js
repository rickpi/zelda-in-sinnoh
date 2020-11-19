const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
})

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
            {
              loader :'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            },
            {loader :'eslint-loader',
              options: {
                failOnError: true,
              }
            }
          ]
      }, {
        test: /\.(sc|sa|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      }, {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
            }
          },
        ],
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    publicPath: '/'
  },
  plugins: [
    htmlWebpackPlugin,
    miniCssExtractPlugin,
  ]
}
