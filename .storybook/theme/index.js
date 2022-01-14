import { create } from '@storybook/theming';
import logo from './brand.svg';

export default create({
  base: 'light',

  colorSecondary: '#1053FF',

  // UI
  appBg: '#FFFFFF',

  // Text colors
  textColor: '#233043',

  // Toolbar default and active colors
  barTextColor: '#838B95',
  barSelectedColor: '#1053FF',

  brandTitle: 'Officevibe',
  brandUrl: 'https://officevibe.com/',
  brandImage: logo,
});
