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
        component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
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

const mockDataWL = [
  { id: 'positive', percentage: 25, color: "var(--hop-status-positive-surface-strong)" },
  { id: 'negative', percentage: 10, color: "var(--hop-status-negative-surface-strong)" },
  { id: 'skipped', percentage: 40, color: "var(--hop-upsell-surface-active)" },
  { id: 'unanswered', percentage: 25, color: "var(--hop-neutral-surface-disabled)" },
];

const getMockData = (brand: string) => {
  const data = brand === 'workleap' ? mockDataWL : mockData;
  return data;
}

export const Overview: Story = {
  render: (args, { globals: { brand } }) => {
    return (
      <Section> 
        <PieChart
          {...args}
          data={getMockData(brand)}
        />
      </Section>
    );
  },
  args: {
    label: 'Poll Completion',
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
  render: (_args, { globals: { brand } }) => {
    return (
      <Section>
        <PieChart
          data={getMockData(brand)}
          label="Poll Completion"
          size="regular"
          rate={35}
        />
        <PieChart
          data={getMockData(brand)}
          label="Poll Completion"
          size="large"
          rate={35}
        />
      </Section>
    );
  },
};
