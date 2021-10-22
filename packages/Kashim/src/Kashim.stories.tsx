import React from 'react';

import { Meta } from '@storybook/react';

import Kashim from './Kashim';

export default {
  title: 'Components/Kashim',
  component: Kashim,
} as Meta;

export const Standard: React.VFC<unknown> = () => (
  <Kashim>Dummy starter component</Kashim>
);
