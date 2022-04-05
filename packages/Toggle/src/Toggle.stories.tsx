import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Toggle from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  htmlFor: 'toggle-1',
  children: 'Label',
};

export const Checked = Template.bind({});
Checked.args = {
  htmlFor: 'toggle-2',
  checked: true,
  children: 'Toggle Checked',
};

export const Disabled = () => (
  <Section>
    <Toggle htmlFor="toggle-3" disabled />
    <Toggle htmlFor="toggle-4" checked disabled />
  </Section>
);
