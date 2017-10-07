const path = require('path');
module.exports = {

    //define entry point
    entry: './src/script-1.js',

    //defin output point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }

};
