/*!
 * Copyright 2018 yangjunbao <yangjunbao@shimo.im>. All rights reserved.
 * @since 2018-11-02 20:32:35
 */

module.exports = {
  entry: {
    test: './test.js',
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
}