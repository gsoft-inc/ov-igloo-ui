import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import tokens from '@igloo-ui/tokens/dist/base10/tokens.json';

import readme from '../README.md';

import BarChart from './BarChart';

export default {
  title: 'Components/BarChart',
  component: BarChart,
  parameters: {
    description: readme,
    chromatic: { delay: 600 },
  },
} as ComponentMeta<typeof BarChart>;

const mockData = [
  {
    label: 'Good vibes',
    value: 48,
    color: tokens.dandelion400,
  },
  {
    label: 'Excellence',
    value: 46,
    color: tokens.electricBlue500,
  },
  {
    label: 'Radical candor',
    value: 24,
    color: tokens.strawberryFields200,
  },
  {
    label: 'Custom cards by members',
    value: 0,
    color: tokens.sky100,
  },
];

const Template: ComponentStory<typeof BarChart> = (args) => (
  <BarChart {...args} />
);
export const Overview = Template.bind({});
Overview.args = {
  dataSet: mockData,
};
