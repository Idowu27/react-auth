const path = require('path');

module.exports = {
  //the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app.jsx'),

  //the bundle file we wll get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

  module: {
    //apply loaders to files that match the regular expression
    //that expression is set in test
    //for those files we will use Babel with presets 'react' and 'es2015'
    //this will make Babel complie the es2015 code to es5 so the appication works across browser
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'babel-loader',
      query: {
       presets: ["react", "es2015"]
     }
   }],
 },
 // this sets webpack in watch mode so it will rebuild when there are changes
  watch: true
}
