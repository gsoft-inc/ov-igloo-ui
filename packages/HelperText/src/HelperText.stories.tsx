import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import readme from '../README.md';

import HelperText from './HelperText';

export default {
  title: 'Components/HelperText',
  component: HelperText,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
} as Meta<typeof HelperText>;

export const Overview = {
  args: {
    children: 'Information',
  },
};

export const Error = () => <HelperText error>Error</HelperText>;
