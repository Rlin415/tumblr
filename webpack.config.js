global.Promise = require("bluebird");

module.exports = {
    entry  : './client/js/tumblr.module.js',
    output : {
        path     : __dirname + '/dist',
        filename : 'bundle.js'
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader" }
      ]
    }
};