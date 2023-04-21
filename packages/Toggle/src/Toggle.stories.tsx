import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Toggle from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
} as Meta<typeof Toggle>;

export const Overview = {
  args: {
    htmlFor: 'toggle-1',
    children: 'Label',
  },
};

export const Checked = {
  args: {
    htmlFor: 'toggle-2',
    checked: true,
    children: 'Toggle Checked',
  },
};

export const Disabled = () => (
  <Section>
    <Toggle htmlFor="toggle-3" disabled />
    <Toggle htmlFor="toggle-4" checked disabled />
  </Section>
);

export const WithHelperText = {
  args: {
    htmlFor: 'toggle-5',
    children: 'Label',
    helperText: 'This is a helper text',
  },
};
