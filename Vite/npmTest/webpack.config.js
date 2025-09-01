const path = require('path');
const myLoader = require('./myLoader');


module.exports = {
    mode: 'development',

    entry: {
        main: path.resolve('./app.js')
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },

    module:{
      rules:[
        {
          test:/\.js$/
        },
      ]
    }
}