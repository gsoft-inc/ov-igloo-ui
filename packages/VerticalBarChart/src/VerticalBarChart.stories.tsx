import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import tokens from '@igloo-ui/tokens/dist/base10/tokens.json';
import readme from '../README.md';

import VerticalBarChart from './VerticalBarChart';

export default {
  title: 'Components/VerticalBarChart',
  component: VerticalBarChart,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof VerticalBarChart>;

type Story = StoryObj<typeof VerticalBarChart>;

const getColorFromScore = (score: number) => {
  if (score >= 0 && score < 2) return tokens.coral400;
  if (score >= 2 && score < 4) return tokens.coral200;
  if (score >= 4 && score < 6) return tokens.creamsicle100;
  if (score >= 6 && score < 9) return tokens.seaweed200;
  return tokens.seaweed400;
};

const values = [12, 20, 35, 18, 3, 42, 60, 0, 16, 43, 15];
const chartData = values.map((value, index) => {
  return {
    score: index,
    value,
    color: getColorFromScore(index),
  };
});

export const Overview: Story = {
  args: {
    data: chartData,
  },
};

export const CustomHeightAndLabels: Story = {
  args: {
    data: chartData,
    height: 400,
    maxLabel: 'Positive Label',
    minLabel: 'Negative Label',
  },
};
