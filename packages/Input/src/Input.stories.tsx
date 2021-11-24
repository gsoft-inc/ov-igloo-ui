import React from 'react';

import { Meta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

export const Standard: React.VFC<unknown> = () => (
  <>
    <section className="isb-section">
      <h2>Default</h2>
      <Input placeholder="ex: John" />
    </section>
    <section className="isb-section">
      <h2>Small</h2>
      <Input placeholder="ex: John" inputSize="Small" />
    </section>
    <section className="isb-section">
      <h2>Disabled</h2>
      <Input placeholder="ex: John" disabled={true} />
    </section>
    <section className="isb-section">
      <h2>Readonly</h2>
      <Input placeholder="ex: John" readOnly={true} />
    </section>
    <section className="isb-section">
      <h2>Focus</h2>
      <Input placeholder="ex: John" className="focus" />
    </section>
    <section className="isb-section">
      <h2>Error</h2>
      <Input placeholder="ex: John" className="error" />
    </section>
    <section className="isb-section">
      <h2>Text</h2>
      <Input placeholder="ex: John" value={'John Doe'} />
    </section>
    <section className="isb-section">
      <h2>Password</h2>
      <Input type="password" value={'this is a good password!'} />
    </section>
    <section className="isb-section">
      <h2>Number</h2>
      <Input type="number" value={123456789} />
    </section>
  </>
);
