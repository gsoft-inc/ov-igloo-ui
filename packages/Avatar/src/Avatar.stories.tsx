import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Avatar from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    description: readme,
  },
  args: {
    size: 'medium',
  },
  argTypes: {
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
    },
  },
} as ComponentMeta<typeof Avatar>;

const imageSrc = 'https://i.pravatar.cc/100';

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  src: imageSrc,
};

export const Sizes = () => (
  <Section>
    <Avatar size="xsmall" src={imageSrc} />
    <Avatar size="small" src={imageSrc} />
    <Avatar size="medium" src={imageSrc} />
    <Avatar size="large" src={imageSrc} />
    <Avatar size="xlarge" src={imageSrc} />
  </Section>
);
