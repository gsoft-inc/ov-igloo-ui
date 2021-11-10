import React from 'react';

import { Meta } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const cardContent = 'Lorem ipsum dolor';

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
  </>
);
