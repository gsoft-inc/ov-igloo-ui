import React from 'react';

import { Meta } from '@storybook/react';

import readme from '../README.md';

import Link from './Link';
import Plus from '@igloo-ui/icons/dist/Plus';

export default {
  title: 'Components/Link',
  component: Link,
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
} as Meta<typeof Link>;

export const Overview = (args: any) => {
  return (
    <Link {...args}>
      <a href="#">Read more</a>
    </Link>
  );
};

export const Appearances: React.VFC = () => (
  <section className="isb-section__content">
    <Link appearance="primary">
      <a href="#">Primary</a>
    </Link>
    <Link appearance="secondary">
      <a href="#">Secondary</a>
    </Link>
    <Link appearance="premium">
      <a href="#">Premium</a>
    </Link>
    <Link appearance="danger">
      <a href="#">Danger</a>
    </Link>
    <Link appearance="ghost">
      <a href="#">Gost</a>
    </Link>
  </section>
);

export const Disabled: React.VFC = () => (
  <section className="isb-section__content">
    <Link disabled appearance="primary">
      <a href="#">Primary</a>
    </Link>
    <Link disabled appearance="secondary">
      <a href="#">Secondary</a>
    </Link>
    <Link disabled appearance="premium">
      <a href="#">Premium</a>
    </Link>
    <Link disabled appearance="danger">
      <a href="#">Danger</a>
    </Link>
    <Link disabled appearance="ghost">
      <a href="#">Gost</a>
    </Link>
  </section>
);

export const States: React.VFC = () => (
  <section className="isb-section__content">
    <Link appearance="secondary">
      <a href="#">Regular</a>
    </Link>
    <Link appearance="secondary" className="ids-link--active">
      <a href="#">Active</a>
    </Link>
    <Link appearance="secondary" className="focus">
      <a href="#">Focus</a>
    </Link>
  </section>
);

export const Sizes: React.VFC = () => (
  <section className="isb-section__content">
    <Link size="medium">
      <a href="#">Medium</a>
    </Link>
    <Link size="small">
      <a href="#">Small</a>
    </Link>
  </section>
);

export const Icons: React.VFC = () => (
  <section className="isb-section__content">
    <Link iconLeading={<Plus size="small" />}>
      <a href="#">Left icon</a>
    </Link>
    <Link iconTrailing={<Plus size="small" />}>
      <a href="#">Right icon</a>
    </Link>
  </section>
);
