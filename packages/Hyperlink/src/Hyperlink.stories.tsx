import React from 'react';

import { Meta } from '@storybook/react';

import readme from '../README.md';

import Hyperlink from './Hyperlink';
import Plus from '@igloo-ui/icons/dist/Plus';

export default {
  title: 'Components/Hyperlink',
  component: Hyperlink,
  parameters: {
    description: readme,
    controls: {
      exclude: ['onClick'],
    },
    docs: {
      source: {
        type: 'auto',
      },
    },
  },
  argTypes: {
    size: { table: { defaultValue: { summary: 'medium' } } },
    appearance: {
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    onClick: {
      action: 'dynamic',
    },
  },
} as Meta<typeof Hyperlink>;

export const Overview = (args: any) => {
  return (
    <Hyperlink {...args}>
      <a href="#">Read more</a>
    </Hyperlink>
  );
};

export const Appearances: React.VFC = () => (
  <section className="isb-section__content">
    <Hyperlink appearance="primary">
      <a href="#">Primary</a>
    </Hyperlink>
    <Hyperlink appearance="secondary">
      <a href="#">Secondary</a>
    </Hyperlink>
    <Hyperlink appearance="danger">
      <a href="#">Danger</a>
    </Hyperlink>
  </section>
);

export const Underline: React.VFC = () => (
  <section className="isb-section__content">
    <Hyperlink underline appearance="primary">
      <a href="#">Primary</a>
    </Hyperlink>
    <Hyperlink underline appearance="secondary">
      <a href="#">Secondary</a>
    </Hyperlink>
    <Hyperlink underline appearance="danger">
      <a href="#">Danger</a>
    </Hyperlink>
  </section>
);

export const Sizes: React.VFC = () => (
  <section className="isb-section__content">
    <Hyperlink size="medium">
      <a href="#">Medium</a>
    </Hyperlink>
    <Hyperlink size="small">
      <a href="#">Small</a>
    </Hyperlink>
    <Hyperlink size="xsmall">
      <a href="#">caption</a>
    </Hyperlink>
  </section>
);

export const Icons: React.VFC = () => (
  <section className="isb-section__content">
    <Hyperlink iconLeading={<Plus size="small" />}>
      <a href="#">Left icon</a>
    </Hyperlink>

    <Hyperlink iconTrailing={<Plus size="small" />}>
      <a href="#">Right icon</a>
    </Hyperlink>
  </section>
);
