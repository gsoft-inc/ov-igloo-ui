import React from 'react';

import { Meta } from '@storybook/react';

import Toaster from './Toaster';

export default {
  title: 'Components/Toaster',
  component: Toaster,
} as Meta;

export const Standard: React.VFC<unknown> = () => (
  <Toaster>Success message</Toaster>
);

export const Error: React.VFC<unknown> = () => (
  <Toaster error>Error message</Toaster>
);

export const LongDescription: React.VFC<unknown> = () => (
  <Toaster>
    Aenean ultrices sapien vitae dolor mollis, a ullamcorper est commodo
  </Toaster>
);
