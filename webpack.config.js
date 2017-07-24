module.exports = {
    entry: __dirname + "/app/js/app.js",
    output: {
        filename: "app.js",
        path: __dirname + "/dist",
    },
    // module: {
    //     rules: [{ test: /\.(js|jsx)$/, use: 'babel-loader' }]
    // },
    resolve: {
        alias: {
            extensions: ['', '.js', '.jsx', '.json']
        }
    },
};