const path = require('path');
module.exports = {

    //define entry point
    entry: './src/script-1.js',

    //defin output point
    output: {
        path: path.resolve(__dirname, 'dist'),
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
              test    : /\.css$/,
              use     : [
                "style-loader",
                "css-loader"
              ]
            }
        ] //loaders
    }


};
