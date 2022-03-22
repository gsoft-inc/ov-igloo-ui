import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Message from './Message';

export default {
  title: 'Components/Message',
  component: Message,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => (
  <Message {...args} />
);

export const Overview = Template.bind({});
Overview.args = {
  children: 'Information',
};

export const Error = () => <Message error>Error</Message>;
