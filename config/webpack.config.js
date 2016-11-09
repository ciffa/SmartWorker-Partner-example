var webpack = require('webpack');
var path = require('path');
const nodeExternals = require('webpack-node-externals');

var serverConfig = {
  name: 'server',
  target: 'node',
  devtool: 'sourcemap',
  externals: [nodeExternals()],
  entry: [
    './server.js'
  ],
  output: {
    path: path.join(__dirname, '../build/'), // Dont put the build folder in the config dir
    filename: 'backend.bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: ["node_modules"],
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015'],
          plugins: ["transform-decorators-legacy"]
        }
      }
    ]
  },
  plugins: [
    // sourcemaps stack traces from node/io.js
    new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
  ],
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: __dirname
  }
};




module.exports = serverConfig