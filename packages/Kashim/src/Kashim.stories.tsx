import React from 'react';

import { Meta } from '@storybook/react';

import readme from '../README.md';

import Kashim from './Kashim';

export default {
  title: 'Components/Kashim',
  component: Kashim,
  parameters: {
    description: readme,
  },
} as Meta;

export const Standard: React.VFC<unknown> = () => (
  <Kashim>Dummy starter component</Kashim>
);
