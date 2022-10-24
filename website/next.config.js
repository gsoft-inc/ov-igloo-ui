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
  '@igloo-ui/select',
  '@igloo-ui/toaster',
  '@igloo-ui/toggle',
  '@igloo-ui/tooltip',
  '@igloo-ui/tag',
  '@igloo-ui/tabs',
  '@igloo-ui/popover',
  '@igloo-ui/modal',
  '@igloo-ui/textarea',
  '@igloo-ui/option-button',
  '@igloo-ui/form-group',
  '@igloo-ui/filter',
  '@igloo-ui/breadcrumb',
  '@igloo-ui/pager',
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
