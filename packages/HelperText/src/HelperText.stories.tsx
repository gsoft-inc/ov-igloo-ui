import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import readme from '../README.md';

import HelperText from './HelperText';

export default {
  title: 'Components/HelperText',
  component: HelperText,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof HelperText>;

const Template: ComponentStory<typeof HelperText> = (args) => (
  <HelperText {...args} />
);

export const Overview = Template.bind({});
Overview.args = {
  children: 'Information',
};

export const Error = () => <HelperText error>Error</HelperText>;
