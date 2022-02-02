import { addons } from '@storybook/addons';
import ovTheme from './theme/index';

window.STORYBOOK_GA_ID = process.env.NEXT_PUBLIC_GA_ID;

addons.setConfig({
  theme: ovTheme,
});
