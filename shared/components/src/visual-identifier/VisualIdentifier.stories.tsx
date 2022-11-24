import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { VisualIdentifier } from './VisualIdentifier';

export default {
  title: 'Shared/visualIdentifier',
  component: VisualIdentifier,
} as ComponentMeta<typeof VisualIdentifier>;

const Template: ComponentStory<typeof VisualIdentifier> = (args) => (
  <VisualIdentifier {...args} />
);

export const Overview = Template.bind({});
Overview.args = {
  children: 'content of identifier',
};
