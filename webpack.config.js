const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = (mode) => {
  // Mode setup
  if (mode === undefined) {
    mode = 'development';
  }
  process.env.NODE_ENV = mode;
  return {
    mode,
    entry: ['./src/entry.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js',
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      compress: true,
      port: 1234,
      hot: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src', 'components'),
        '@common': path.resolve(__dirname, 'src', 'components', 'common'),
        '@pages': path.resolve(__dirname, 'src', 'components', 'pages'),
        '@styles': path.resolve(__dirname, 'src', 'styles'),
        'lodash-es': path.resolve(__dirname, 'node_modules', 'lodash'),
      },
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
        },
        {
          test: /\.html$/,
          use: 'html-loader',
        },
        {
          test: /\.(css|scss|sass)$/,
          use: [
            mode === 'development'
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            'postcss-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|webm)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1024,
                fallback: 'file-loader',
                name: '[name].[hash:8].[ext]',
                outputPath: './images/',
                esModule: false,
              },
            },
            {
              loader: 'image-webpack-loader',
              options: {
                disable: mode === 'development', // disables image optimization in development mode
                mozjpeg: {
                  dcScanOpt: 0, // disables grayscale steps for progrssive jpeg
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|webm)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1024,
                fallback: 'file-loader',
                name: '[name].[hash:8].[ext]',
                outputPath: './images/',
                esModule: false,
              },
            },
            {
              loader: 'image-webpack-loader',
              options: {
                disable: mode === 'development', // disables image optimization in development mode
                mozjpeg: {
                  dcScanOpt: 0, // disables grayscale steps for progrssive jpeg
                },
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                limit: 1024,
                name: '[name].[hash:8].[ext]',
                outputPath: './images/',
                esModule: false,
              },
            },
            {
              loader: 'image-webpack-loader',
              options: {
                disable: mode === 'development', // disables image optimization in development mode
              },
            },
          ],
        },
        {
          test: /\.(woff2?)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: './fonts/',
              },
            },
          ],
        },
        {
          test: /\.mp3$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: './audio/',
              },
            },
          ],
        },
        {
          test: /\.(mp4|webm)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: './video/',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        title: 'App',
        template: './src/index.html',
        inject: true,
      }),
      new VueLoaderPlugin(),
    ],
  };
};

module.exports = (env, argv) => config(argv.mode);
