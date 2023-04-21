import React from 'react';

import { Meta } from '@storybook/react';

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
} as Meta<typeof VisualIdentifier>;

export const Overview = {
  args: {
    src: 'https://cdn-icons-png.flaticon.com/512/168/168724.png',
  },
};

export const Icon = {
  args: {
    icon: <LabelSolid size="small" />,
  },
};

export const Color = {
  args: {
    color: '#95B3FE',
  },
};
