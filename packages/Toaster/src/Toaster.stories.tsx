import React from 'react';

import { Meta } from '@storybook/react';

import Toaster from './Toaster';

export default {
  title: 'Components/Toaster',
  component: Toaster,
} as Meta;

export const Standard: React.VFC<unknown> = () => (
  <Toaster>Dummy starter component</Toaster>
);
