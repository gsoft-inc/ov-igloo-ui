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
        component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <style>
          {`
            :root {
              --ids-vertical-bar-chart-bar-1: ${tokens.coral400};
              --ids-vertical-bar-chart-bar-2: ${tokens.coral200};
              --ids-vertical-bar-chart-bar-3: ${tokens.creamsicle100};
              --ids-vertical-bar-chart-bar-4: ${tokens.seaweed200};
              --ids-vertical-bar-chart-bar-5: ${tokens.seaweed400};
            }

            [data-brand="workleap"] {
              --ids-vertical-bar-chart-bar-1: #FF8E8E;
              --ids-vertical-bar-chart-bar-2: #FFD8BE;
              --ids-vertical-bar-chart-bar-3: #FFF2B8;
              --ids-vertical-bar-chart-bar-4: #CDE8AC;
              --ids-vertical-bar-chart-bar-5: #7DC291;
            }
          `}
        </style>
        <Story />
      </>
    ),
  ],
} as Meta<typeof VerticalBarChart>;

type Story = StoryObj<typeof VerticalBarChart>;

const getColorFromScore = (score: number) => {
  if (score >= 0 && score < 2) return "var(--ids-vertical-bar-chart-bar-1)";
  if (score >= 2 && score < 4) return "var(--ids-vertical-bar-chart-bar-2)";
  if (score >= 4 && score < 6) return "var(--ids-vertical-bar-chart-bar-3)";
  if (score >= 6 && score < 9) return "var(--ids-vertical-bar-chart-bar-4)";
  return "var(--ids-vertical-bar-chart-bar-5)";
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
