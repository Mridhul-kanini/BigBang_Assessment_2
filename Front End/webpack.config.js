module.exports = {
    // ...other webpack config options
    module: {
      rules: [
        // ...other rules
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
  