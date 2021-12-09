import React from 'react';

import { Meta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const inputPlacehoder = 'ex: Lorem ipsum dolor';

export const Standard: React.VFC<unknown> = () => (
  <>
    <section className="isb-section">
      <h2>Default</h2>
      <Input placeholder={inputPlacehoder} />
    </section>
    <section className="isb-section">
      <h2>Compact</h2>
      <Input placeholder={inputPlacehoder} isCompact={true} />
    </section>
    <section className="isb-section">
      <h2>Disabled</h2>
      <Input placeholder={inputPlacehoder} disabled={true} />
    </section>
    <section className="isb-section">
      <h2>Readonly</h2>
      <Input placeholder={inputPlacehoder} readOnly={true} />
    </section>
    <section className="isb-section">
      <h2>Active</h2>
      <Input placeholder={inputPlacehoder} className="active" />
    </section>
    <section className="isb-section">
      <h2>Focus</h2>
      <Input placeholder={inputPlacehoder} className="focus" />
    </section>
    <section className="isb-section">
      <h2>Error</h2>
      <Input placeholder={inputPlacehoder} error={true} />
    </section>
    <section className="isb-section">
      <h2>Error Focus</h2>
      <Input placeholder={inputPlacehoder} error={true} className="focus" />
    </section>
    <section className="isb-section">
      <h2>Text</h2>
      <Input placeholder={inputPlacehoder} value={'John Doe'} />
    </section>
    <section className="isb-section">
      <h2>Password</h2>
      <Input
        type="password"
        placeholder="Password"
        value={'this is a good password!'}
      />
    </section>
    <section className="isb-section">
      <h2>Number</h2>
      <Input type="number" placeholder="123" value={123456789} />
    </section>
  </>
);
