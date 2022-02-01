import { addons } from '@storybook/addons';
import ovTheme from './theme/index';

import * as ga from '../website/lib/ga';

window.STORYBOOK_GA_ID = ga.GA_TRACKING_ID;
window.STORYBOOK_REACT_GA_OPTIONS = {};

addons.setConfig({
  theme: ovTheme,
});
