import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Tooltip from './Tooltip';

import Section from '@components/section';
import readme from '../README.md';

const tooltipContent = 'Lorem ipsum dolor';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    description: readme,
  },
  argTypes: {
    content: {
      control: 'text',
      defaultValue: tooltipContent,
    },
    position: { table: { defaultValue: { summary: 'top' } } },
    appearance: { table: { defaultValue: { summary: 'dark' } } },
    maxWidth: { table: { defaultValue: { summary: 200 } } },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          fontSize: '1.6rem',
          paddingTop: 40,
          paddingBottom: 40,
          paddingRight: 50,
          paddingLeft: 60,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Tooltip>;

export const Overview = () => (
  <Tooltip content={tooltipContent}>Playground tooltip</Tooltip>
);

export const Appearances = () => (
  <Section>
    <Tooltip content={tooltipContent} appearance="dark">
      Dark
    </Tooltip>
    <Tooltip content={tooltipContent} appearance="light">
      Light
    </Tooltip>
  </Section>
);

export const Position = () => (
  <Section>
    <Tooltip content={tooltipContent} position="top">
      Top
    </Tooltip>
    <Tooltip content={tooltipContent} position="right">
      Right
    </Tooltip>
    <Tooltip content={tooltipContent} position="bottom">
      Bottom
    </Tooltip>
    <Tooltip content={tooltipContent} position="left">
      Left
    </Tooltip>
  </Section>
);
