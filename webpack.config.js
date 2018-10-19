const path = require('path')

module.exports = {
  entry: './main.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use:['vue-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          //让tsconfig将vue文件当成TS模块去处理，以解决module not found的问题，tsconfig本身不会处理.vue结尾的文件
          appendTsSuffixTo: [/\.vue$/],
        }
      }
    ]
  },
  devtool: 'source-map'
}