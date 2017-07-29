var path = require("path");

module.exports = {
    entry: ['./lunar-calendar.js'],
    output: {
        path: path.join(__dirname),
        filename: 'lunar-calendar.build.js'
    }
};
