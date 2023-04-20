import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  args: {
    size: 'large',
  },
  argTypes: {
    size: {
      options: ['xsmall', 'small', 'medium', 'large'],
    },
  },
} as Meta<typeof Card>;

export const Overview = {
  args: {
    children: 'Overview card',
  },
};

export const Sizes = () => (
  <Section column>
    <Card size="xsmall">xsmall card</Card>
    <Card size="small">Small card</Card>
    <Card size="medium">Medium card</Card>
    <Card size="large">Large card</Card>
  </Section>
);
