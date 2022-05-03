const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map', // codigo legible
  output: {
    filename: 'bundle.[contenthash].js',// [contenthash] esta sentencia me permite crear un numero con el que se general el paquete, esto limpia cache y permite que los despliegues no se queden pegados.
    clean: true // limpia la carpeta dist
  },
  plugins: [new HtmlWebpackPlugin({  //cada vez que compila crea un hash
    template: 'src/index.html'//el hash lo toma de este modelo
  })],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'] //loader para react
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ], 
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],// this was necesary to read jsx
  },
  devServer: {
    port: 3000,
  },
  }
 

