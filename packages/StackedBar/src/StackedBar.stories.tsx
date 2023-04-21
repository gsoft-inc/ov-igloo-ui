import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import StackedBar from './StackedBar';

export default {
  title: 'Components/StackedBar',
  component: StackedBar,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '20rem',
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta<typeof StackedBar>;

export const Overview = {
  args: {
    showValue: true,
    dataSet: [
      {
        key: 'stronglyUnfavorable',
        label: 'Strongly Unfavorable',
        value: 30,
        strength: -2,
      },
      {
        key: 'unfavorable',
        label: 'Unfavorable',
        value: 10,
        strength: -1,
      },
      {
        key: 'neutral',
        label: 'Neutral',
        value: 20,
        strength: 0,
      },
      {
        key: 'favorable',
        label: 'Favorable',
        value: 15,
        strength: 1,
      },
      {
        key: 'stronglyFavorable',
        label: 'Strongly Favorable',
        value: 25,
        strength: 2,
      },
    ],
  },
};

export const Sizes = () => (
  <Section column>
    <StackedBar
      dataSet={[
        {
          key: 'stronglyUnfavorable',
          label: 'Strongly Unfavorable',
          value: 30,
          strength: -2,
        },
        {
          key: 'unfavorable',
          label: 'Unfavorable',
          value: 10,
          strength: -1,
        },
        {
          key: 'neutral',
          label: 'Neutral',
          value: 20,
          strength: 0,
        },
        {
          key: 'favorable',
          label: 'Favorable',
          value: 15,
          strength: 1,
        },
        {
          key: 'stronglyFavorable',
          label: 'Strongly Favorable',
          value: 25,
          strength: 2,
        },
      ]}
      showValue
      size="small"
    />

    <StackedBar
      dataSet={[
        {
          key: 'stronglyUnfavorable',
          label: 'Strongly Unfavorable',
          value: 30,
          strength: -2,
        },
        {
          key: 'unfavorable',
          label: 'Unfavorable',
          value: 10,
          strength: -1,
        },
        {
          key: 'neutral',
          label: 'Neutral',
          value: 20,
          strength: 0,
        },
        {
          key: 'favorable',
          label: 'Favorable',
          value: 15,
          strength: 1,
        },
        {
          key: 'stronglyFavorable',
          label: 'Strongly Favorable',
          value: 25,
          strength: 2,
        },
      ]}
      showValue
      size="medium"
    />

    <StackedBar showValue size="small" />

    <StackedBar showValue size="medium" />
  </Section>
);

export const SkippedAnswers = {
  args: {
    showValue: true,
    dataSet: [
      {
        key: 'unfavorable',
        label: 'Unfavorable',
        value: 35,
        strength: -2,
      },
      {
        key: 'skipped',
        label: 'Skipped',
        value: 20,
      },
      {
        key: 'favorable',
        label: 'Favorable',
        value: 45,
        strength: 2,
      },
    ],
  },
};

export const CustomRangeAndFormat = {
  args: {
    showValue: true,
    valueRange: { min: 0, max: 'dataMax' },
    formatValue: (value: number) => {
      return `${value} units`;
    },
    dataSet: [
      {
        key: 'unfavorable',
        label: 'Unfavorable',
        value: 135,
        strength: -2,
      },
      {
        key: 'skipped',
        label: 'Skipped',
        value: 120,
      },
      {
        key: 'favorable',
        label: 'Favorable',
        value: 245,
        strength: 2,
      },
    ],
  },
};

export const Empty = {
  args: {
    noDataMessage: 'There is no data available',
  },
};
