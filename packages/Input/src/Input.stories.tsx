import React from 'react';

import { Meta } from '@storybook/react';
import Search from '@igloo-ui/icons/dist/Search';

import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const inputPlacehoder = 'ex: Lorem ipsum dolor';

export const Playground: React.VFC = (args) => <Input {...args} />;

export const Standard: React.VFC = () => (
  <>
    <section className="isb-section">
      <h2>Default</h2>
      <Input placeholder={inputPlacehoder} />
    </section>
    <section className="isb-section">
      <h2>Compact</h2>
      <Input placeholder={inputPlacehoder} isCompact />
    </section>
    <section className="isb-section">
      <h2>Disabled</h2>
      <Input placeholder={inputPlacehoder} disabled />
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
      <Input placeholder={inputPlacehoder} error />
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
      <Input type="number" placeholder="123" defaultValue={123456789} />
    </section>
  </>
);

export const WithPrefix: React.VFC = () => (
  <>
    <section className="isb-section">
      <h2>Default</h2>
      <Input placeholder={inputPlacehoder} prefixIcon={<Search />} />
    </section>
    <section className="isb-section">
      <h2>Compact</h2>
      <Input
        placeholder={inputPlacehoder}
        isCompact
        prefixIcon={<Search size="small" />}
      />
    </section>
    <section className="isb-section">
      <h2>Disabled</h2>
      <Input placeholder={inputPlacehoder} disabled prefixIcon={<Search />} />
    </section>
    <section className="isb-section">
      <h2>Active</h2>
      <Input
        placeholder={inputPlacehoder}
        className="active"
        prefixIcon={<Search />}
      />
    </section>
    <section className="isb-section">
      <h2>Focus</h2>
      <Input
        placeholder={inputPlacehoder}
        className="focus"
        prefixIcon={<Search />}
      />
    </section>
    <section className="isb-section">
      <h2>Error</h2>
      <Input placeholder={inputPlacehoder} error prefixIcon={<Search />} />
    </section>
  </>
);
