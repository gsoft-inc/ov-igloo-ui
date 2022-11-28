import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import LabelSolid from '@igloo-ui/icons/dist/LabelSolid';
import { VisualIdentifier } from './VisualIdentifier';

export default {
  title: 'Shared/visualIdentifier',
  component: VisualIdentifier,
  argTypes: {
    icon: {
      control: { type: null },
    },
  },
} as ComponentMeta<typeof VisualIdentifier>;

const Template: ComponentStory<typeof VisualIdentifier> = (args) => (
  <VisualIdentifier {...args} />
);

export const Overview = Template.bind({});
Overview.args = {
  src: 'https://cdn-icons-png.flaticon.com/512/168/168724.png',
};

export const Icon = Template.bind({});
Icon.args = {
  icon: <LabelSolid size="small" />,
};

export const Color = Template.bind({});
Color.args = {
  color: '#95B3FE',
};
