const path = require('path');
module.exports = {
    devtool: 'source-map',
    //define entry point
    entry: './src/script-1.js',

    //define output point
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
  
     module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['es2015']
                    }
                  }

            },
            {
              test    : /\.scss$|.css$/,
              use     : [
                "style-loader",
                "css-loader",
                "sass-loader"
              ]
            },
            {
                test: /\.(?:png|jpg|svg)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true
                        }
                    }
                ]
            }
        ] //loaders
    }
}
