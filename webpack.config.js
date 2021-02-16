'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // extract css to files
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer'); // help tailwindcss to work
const HtmlWebpackInlineSourcePlugin = require('./config/InlineChunkHtmlPlugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  return {
    mode: 'development',
    
    // This is necessary because Figma's 'eval' works differently than normal eval
    devtool: isProduction ? false : 'inline-source-map',

    entry: {
      ui: './src/index.tsx',
      code: './index.ts',
    },
    
    externals: {
      codemirror: 'CodeMirror',
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }, 
        {
          test: /\.(css|scss|sass)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            {
              loader: 'postcss-loader', // postcss loader needed for tailwindcss
              options: {
                postcssOptions: {
                  ident: 'postcss',
                  plugins: [tailwindcss, autoprefixer],
                },
              },
            },
          ],
        },
      ],
    },

    resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },

    plugins: [
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        'global': {} // Fix missing symbol error when running in developer VM
      }),
      // Generates an `index.html` file with the <script> injected.
      new HtmlWebpackPlugin({
        template: './src/ui.html',
        filename: 'ui.html',
        inlineSource: '.(js)$',
        chunks: ['ui'],
        inject: 'body',
        cache: false,
      }),
      // Inlines chunks with `runtime` in the name
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin, [/ui/]),
    ],
  };
}
