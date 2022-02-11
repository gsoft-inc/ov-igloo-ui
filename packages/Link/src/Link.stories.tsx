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
  },
} as Meta;

export const Overview: React.VFC = (args) => (
  <Link {...args}>
    <a href="#">Read more</a>
  </Link>
);

export const Appearances: React.VFC = () => (
  <>
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
  </>
);

export const Disabled: React.VFC = () => (
  <>
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
  </>
);

export const States: React.VFC = () => (
  <>
    <Link appearance="secondary">
      <a href="#">Regular</a>
    </Link>
    <Link appearance="secondary" className="ids-link--active">
      <a href="#">Active</a>
    </Link>
    <Link appearance="secondary" className="focus">
      <a href="#">Focus</a>
    </Link>
  </>
);

export const Sizes: React.VFC = () => (
  <>
    <Link size="medium">
      <a href="#">Medium</a>
    </Link>
    <Link size="small">
      <a href="#">Small</a>
    </Link>
  </>
);

export const Icons: React.VFC = () => (
  <>
    <Link iconLeading={<Plus size="small" />}>
      <a href="#">Left icon</a>
    </Link>
    <Link iconTrailing={<Plus size="small" />}>
      <a href="#">Right icon</a>
    </Link>
  </>
);
