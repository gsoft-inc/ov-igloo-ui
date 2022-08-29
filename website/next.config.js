const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
});

const withTM = require('next-transpile-modules')([
  '@igloo-ui/icons',
  '@igloo-ui/tokens',
  '@igloo-ui/alert',
  '@igloo-ui/button',
  '@igloo-ui/button-group',
  '@igloo-ui/card',
  '@igloo-ui/checkbox',
  '@igloo-ui/ellipsis',
  '@igloo-ui/helper-text',
  '@igloo-ui/hyperlink',
  '@igloo-ui/icon-button',
  '@igloo-ui/input',
  '@igloo-ui/radio',
  '@igloo-ui/toaster',
  '@igloo-ui/toggle',
  '@igloo-ui/tooltip',
  '@igloo-ui/tag',
  '@igloo-ui/popover',
  '@igloo-ui/modal',
]);

const path = require('path');

module.exports = withTM(
  withMDX({
    reactStrictMode: true,
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  })
);
