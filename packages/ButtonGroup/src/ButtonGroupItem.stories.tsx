import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { ButtonItem } from './ButtonGroup';

export default {
  component: ButtonItem,
  excludeStories: /ButtonGroupItem/,
  argTypes: {
    active: { table: { defaultValue: { summary: false } } },
    disabled: { table: { defaultValue: { summary: false } } },
  },
} as Meta<typeof ButtonItem>;

export const ButtonGroupItem: StoryFn<typeof ButtonItem> = (args) => (
  <ButtonItem {...args} />
);
ButtonGroupItem.args = {
  children: 'Button 1',
};
