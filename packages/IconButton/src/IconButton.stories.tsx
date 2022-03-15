import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import IconButton from './IconButton';

import Plus from '@igloo-ui/icons/dist/Plus';
import Settings from '@igloo-ui/icons/dist/Settings';

import Section from '@components/section';
import readme from '../README.md';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    description: readme,
    controls: {
      exclude: [
        'iconTrailing',
        'iconLeading',
        'showOnlyIconOnMobile',
        'underline',
      ],
    },
  },
  argTypes: {
    size: {
      table: { defaultValue: { summary: 'medium' } },
      control: {
        options: ['xsmall', 'small', 'medium', 'large'],
      },
    },
    appearance: { table: { defaultValue: { summary: 'primary' } } },
    icon: { control: { type: null } },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Overview = Template.bind({});
Overview.args = {
  icon: <Plus />,
};

export const Appearances = () => (
  <Section>
    <IconButton appearance="primary" icon={<Plus size="small" />} />
    <IconButton appearance="secondary" icon={<Plus size="small" />} />
    <IconButton appearance="premium" icon={<Plus size="small" />} />
    <IconButton appearance="danger" icon={<Plus size="small" />} />
    <IconButton appearance="ghost" icon={<Plus size="small" />} />
  </Section>
);

export const Rounded = () => (
  <Section>
    <IconButton rounded appearance="primary" icon={<Settings size="small" />} />
    <IconButton
      rounded
      appearance="secondary"
      icon={<Settings size="small" />}
    />
    <IconButton rounded appearance="premium" icon={<Settings size="small" />} />
    <IconButton rounded appearance="danger" icon={<Settings size="small" />} />
    <IconButton rounded appearance="ghost" icon={<Settings size="small" />} />
  </Section>
);

export const Sizes = () => (
  <Section>
    <IconButton size="xsmall" icon={<Plus size="small" />} />
    <IconButton size="small" icon={<Plus size="small" />} />
    <IconButton size="medium" icon={<Plus size="small" />} />
    <IconButton size="large" icon={<Plus size="small" />} />
  </Section>
);

export const States = () => (
  <Section>
    <IconButton appearance="secondary" icon={<Plus size="small" />} />
    <IconButton disabled appearance="secondary" icon={<Plus size="small" />} />
    <IconButton active appearance="secondary" icon={<Plus size="small" />} />
    <IconButton
      className="focus"
      appearance="secondary"
      icon={<Plus size="small" />}
    />
  </Section>
);
