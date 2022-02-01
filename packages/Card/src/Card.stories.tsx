import React from 'react';

import { Meta } from '@storybook/react';

import readme from '../README.md';

import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    description: readme,
  },
} as Meta;

const cardContent = 'Lorem ipsum dolor';

export const Playground: React.VFC<unknown> = (args) => (
  <Card {...args}>Playground card</Card>
);

export const Standard: React.VFC<unknown> = () => (
  <>
    <section className="isb-section">
      <h2>Large</h2>
      <Card>{cardContent}</Card>
    </section>
    <section className="isb-section">
      <h2>Medium</h2>
      <Card size="medium">{cardContent}</Card>
    </section>
    <section className="isb-section">
      <h2>Small</h2>
      <Card size="small">{cardContent}</Card>
    </section>
    <section className="isb-section">
      <h2>Xsmall</h2>
      <Card size="xsmall">{cardContent}</Card>
    </section>
  </>
);
