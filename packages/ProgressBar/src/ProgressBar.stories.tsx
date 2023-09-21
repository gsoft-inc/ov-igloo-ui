import React from 'react';
import HelperText from '@igloo-ui/helper-text';

import { Meta, StoryFn } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import ProgressBar from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 1, step: 0.05 },
    },
  },
} as Meta<typeof ProgressBar>;

export const Overview = {
  args: {
    value: 0.5,
    isCompact: false,
    ariaLabel: 'Play: 2.5 minutes of 5 minutes',
  },
};

export const Success = () => <ProgressBar value={1} />;

export const Sizes = () => (
  <Section column>
    <span>
      <HelperText style={{ marginBottom: '0.8rem' }}>Default</HelperText>
      <ProgressBar
        value={0.3}
        ariaLabel="Progress: 30% of objectives achieved"
      />
    </span>
    <span>
      <HelperText style={{ marginBottom: '0.8rem' }}>Compact</HelperText>
      <ProgressBar
        value={0.5}
        ariaLabel="Progress: 50% of objectives achieved"
        isCompact
      />
    </span>
  </Section>
);
