const path = require('path');


console.log(__dirname);

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'out.js',
    path: path.resolve(__dirname, '../../../public'),
  },
  mode: "development"
};