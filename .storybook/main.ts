import { dirname, join } from "path";
import type { StorybookConfig } from '@storybook/nextjs';
const glob = require('glob');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const appDirectory = path.resolve(__dirname, '../');
const getStories = () => glob.sync(`${appDirectory}/packages/**/*.stories.@(js|jsx|ts|tsx)`);
const getSharedStories = () => glob.sync(`${appDirectory}/shared/**/*.stories.@(js|jsx|ts|tsx)`);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [...getStories(), ...getSharedStories()],
  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-essentials"), getAbsolutePath("@storybook/addon-a11y"), getAbsolutePath("storybook-addon-pseudo-states"), getAbsolutePath("@storybook/addon-interactions"), getAbsolutePath("@storybook/addon-mdx-gfm")],
  staticDirs: ['../assets'],
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
      },
    },
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin({
        extensions: config.resolve.extensions
      })];
      if (config.resolve.alias) {
        config.resolve.alias['@components'] = path.resolve(__dirname, './components');
        }
    }
    if (config.module && config.module.rules) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      });
    } 
    return config;
  },
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    autodocs: true
  }
};

export default config;