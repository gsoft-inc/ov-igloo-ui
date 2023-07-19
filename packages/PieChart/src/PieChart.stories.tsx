import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import tokens from '@igloo-ui/tokens/dist/base10/tokens.json';

import Section from '@components/section';
import readme from '../README.md';

import PieChart from './PieChart';

export default {
  title: 'Components/PieChart',
  component: PieChart,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  }
} as Meta<typeof PieChart>;

type Story = StoryObj<typeof PieChart>;

const mockData = [
  { id: 'positive', percentage: 25, color: tokens.seaweed400 },
  { id: 'negative', percentage: 10, color: tokens.coral400 },
  { id: 'skipped', percentage: 40, color: tokens.creamsicle100 },
  { id: 'unanswered', percentage: 25, color: tokens.grey300 },
];

export const Overview: Story = {
  args: {
    label: 'Poll Completion',
    data: mockData,
    rate: 35
  },
};

export const Empty: Story = {
  args: {
    label: 'Poll Completion',
  },
  render: (args) => {
    return (
      <Section>
          <PieChart
            label={args.label}
            size="regular"
          />
          <PieChart
            label={args.label}
            size="large"
          />
      </Section>
    );
  },
};


export const Sizes: Story = {
  render: () => {
    return (
      <Section>
        <PieChart
          data={mockData}
          label="Poll Completion"
          size="regular"
          rate={35}
        />
        <PieChart
          data={mockData}
          label="Poll Completion"
          size="large"
          rate={35}
        />
      </Section>
    );
  },
};
