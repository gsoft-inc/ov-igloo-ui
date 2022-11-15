import React from 'react';
import HelperText from '@igloo-ui/helper-text';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import ProgressBar from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    description: readme,
  },
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 1, step: 0.05 },
    },
  },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);
export const Overview = Template.bind({});
Overview.args = {
  value: 0.5,
  isCompact: false,
  ariaLabel: 'Play: 2.5 minutes of 5 minutes',
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

export const LowContrast = () => (
  <Section column>
    <ProgressBar
      value={0.5}
      ariaLabel="Progress: 50% of objectives achieved"
      isLowContrast
    />
    <ProgressBar
      value={1}
      ariaLabel="Success: 100% of objectives achieved"
      isLowContrast
    />
  </Section>
);
