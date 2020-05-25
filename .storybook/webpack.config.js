module.exports = async ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => {
              const autoPrefixer = require('autoprefixer')({
                overrideBrowserslist: ['last 1 version', 'ie >= 11'],
              });
              return [
                customProperties(),
                autoPrefixer,
                ...(useRtl ? [rtlcss] : []),
              ];
            },
            sourceMap: true,
          },
        },
      ],
    },
    {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
      exclude: /\/favicon.ico$/,
      loader: 'file',
    },
    { test: /\.tsx?$/, loader: 'ts-loader' },
    {
      test: /.stories\.jsx?$/,
      use: ['@storybook/source-loader'],
      enforce: 'pre',
    }
  );

  config.resolve = {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules'],
    plugins: [],
  };

  return config;
};
