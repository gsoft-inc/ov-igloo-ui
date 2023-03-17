import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    description: readme,
  },
  args: {
    size: 'large',
  },
  argTypes: {
    size: {
      options: ['xsmall', 'small', 'medium', 'large'],
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  children: 'Overview card',
};

export const Sizes = () => (
  <Section column>
    <Card size="xsmall">xsmall card</Card>
    <Card size="small">Small card</Card>
    <Card size="medium">Medium card</Card>
    <Card size="large">Large card</Card>
  </Section>
);
