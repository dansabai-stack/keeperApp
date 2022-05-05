const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watch: true,
  target: 'node',
  //This property defines where the application starts
  entry:'./src/index.js',
    
  //This property defines the file path and the file name which will be used for deploying the bundled file
  output:{
    
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  //Setup loaders
  module: {
    rules:[
      { test: /\.css$/, use: 'css-loader' },
      {test: /\.js$/, use: 'babel-loader'},       
    ]
  },
    
  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
