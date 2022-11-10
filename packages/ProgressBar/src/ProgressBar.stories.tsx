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
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);
export const Overview = Template.bind({});
Overview.args = {
  value: 0.5,
  isCompact: false,
};

export const Success = () => <ProgressBar value={1} />;

export const Sizes = () => (
  <Section column>
    <span>
      <HelperText style={{ marginBottom: '0.8rem' }}>Default</HelperText>
      <ProgressBar value={0.3} />
    </span>
    <span>
      <HelperText style={{ marginBottom: '0.8rem' }}>Compact</HelperText>
      <ProgressBar value={0.5} isCompact />
    </span>
  </Section>
);
