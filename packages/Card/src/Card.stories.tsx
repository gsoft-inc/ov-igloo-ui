import React from 'react';

import { Meta } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

export const Standard: React.VFC<unknown> = () => (
  <Card>Dummy starter component</Card>
);
