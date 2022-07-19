const glob = require('glob');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const appDirectory = path.resolve(__dirname, '../');

const getStories = () =>
  glob.sync(`${appDirectory}/packages/**/*!(Kashim).stories.@(js|jsx|ts|tsx)`, {
    ignore: `${appDirectory}/packages/**/Kashim.stories.@(js|jsx|ts|tsx)`,
  });

module.exports = {
  stories: async (list) => [...list, ...getStories()],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  staticDirs: ['../assets'],
  webpackFinal: (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];

    config.resolve.alias['@components'] = path.resolve(
      __dirname,
      './components'
    );

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sassOptions: {
              loadPaths: [appDirectory],
            },
          },
        },
      ],
      include: [appDirectory],
    });

    return config;
  },
};
