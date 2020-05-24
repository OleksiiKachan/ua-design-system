const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const rtlcss = require('rtlcss');
const customProperties = require('postcss-custom-properties');

const useExternalCss = false;
const useRtl = false;

module.exports = ({ config, mode }) => {
  config.devtool = 'source-map';
  config.optimization = {
    ...config.optimization,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          mangle: false,
        },
      }),
    ],
  };

  config.module.rules.push({
    test: /.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          prettierConfig: {
            parser: 'babylon',
            printWidth: 80,
            tabWidth: 2,
            bracketSpacing: true,
            trailingComma: 'es5',
            singleQuote: true,
          },
        },
      },
    ],
    enforce: 'pre',
  });

  // config.resolve.extensions.push(['.ts', '.tsx']);
  config.module.rules.push({ test: /\.tsx?$/, loaders: 'ts-loader' });

  const sassLoader = {
    loader: 'sass-loader',
    options: {
      prependData() {
        return `
          $feature-flags: (
            ui-shell: true,
            enable-css-custom-properties: true,
          );
        `;
      },
      sassOptions: {
        includePaths: [path.resolve(__dirname, '..', 'node_modules')],
      },
      sourceMap: true,
    },
  };

  const fastSassLoader = {
    loader: 'fast-sass-loader',
    options: {
      data: `
        $feature-flags: (
          ui-shell: true,
          enable-css-custom-properties: true,
        );
      `,
    },
  };

  config.module.rules.push({
    test: /\.scss$/,
    sideEffects: true,
    use: [
      {
        loader: useExternalCss ? MiniCssExtractPlugin.loader : 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          sourceMap: true,
        },
      },
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
      sassLoader,
    ],
  });

  if (useExternalCss) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      })
    );
  }

  config.resolve = {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules'],
    plugins: [],
  };

  return config;
};
