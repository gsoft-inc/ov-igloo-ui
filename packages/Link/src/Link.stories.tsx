import React from 'react';

import { Meta } from '@storybook/react';

import readme from '../README.md';

import Link, { LinkProps, Appearance } from './Link';
import Plus from '@igloo-ui/icons/dist/Plus';

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    description: readme,
  },
} as Meta;

interface TemplateProperties {
  appearance?: Appearance;
  payload: {
    base: LinkProps[];
    active: LinkProps[];
    focus: LinkProps[];
  };
}

const Template = ({
  appearance,
  payload,
}: TemplateProperties): React.ReactElement => {
  const componentState = Object.keys(payload);
  const { base, active, focus } = payload;

  const component = componentState.map((state, index) => {
    const isFocus = state === 'focus';
    const datas =
      state === 'focus' ? focus : state === 'active' ? active : base;

    const list = datas.map((p, i) => {
      const label = p.children !== undefined ? p.children : 'Link';

      return (
        <Link
          appearance={appearance}
          key={i.toString()}
          {...p}
          className={isFocus ? 'focus ' + p.className : p.className}
        >
          {label}
        </Link>
      );
    });

    const title =
      state === 'base'
        ? 'Default'
        : state.charAt(0).toUpperCase() + state.slice(1);

    return (
      <section className="isb-section" key={index.toString()}>
        <h2>{title}</h2>
        <div className="isb-section__content">{list}</div>
      </section>
    );
  });

  return <>{component}</>;
};

const linkFakeDestination = '#';

const linkState: LinkProps[] = [
  {
    size: 'small',
    to: linkFakeDestination,
  },
  {
    size: 'small',
    children: 'Overflowing text',
    className: 'isb-element__thin',
    to: linkFakeDestination,
  },
  {
    size: 'small',
    iconLeading: <Plus size="small" />,
    children: 'New feedback',
    to: linkFakeDestination,
  },
  {
    size: 'small',
    iconTrailing: <Plus size="small" />,
    children: 'New feedback',
    to: linkFakeDestination,
  },
  {
    size: 'medium',
    to: linkFakeDestination,
  },
  {
    size: 'medium',
    children: 'Overflowing text',
    className: 'isb-element__thin',
    to: linkFakeDestination,
  },
  {
    size: 'medium',
    iconLeading: <Plus size="small" />,
    children: 'New feedback',
    to: linkFakeDestination,
  },
  {
    size: 'medium',
    iconTrailing: <Plus size="small" />,
    children: 'New feedback',
    to: linkFakeDestination,
  },
];

export const Playground: React.VFC<LinkProps> = (args) => (
  <Link {...args}>Playground link</Link>
);

export const Primary = (): React.ReactElement => (
  <Template
    payload={{
      base: linkState,
      active: linkState,
      focus: linkState,
    }}
  />
);

export const Secondary = (): React.ReactElement => (
  <Template
    appearance="secondary"
    payload={{
      base: linkState,
      active: linkState,
      focus: linkState,
    }}
  />
);

export const Premium = (): React.ReactElement => (
  <Template
    appearance="premium"
    payload={{
      base: linkState,
      active: linkState,
      focus: linkState,
    }}
  />
);

export const Danger = (): React.ReactElement => (
  <Template
    appearance="danger"
    payload={{
      base: linkState,
      active: linkState,
      focus: linkState,
    }}
  />
);

export const Ghost = (): React.ReactElement => (
  <Template
    appearance="ghost"
    payload={{
      base: linkState,
      active: linkState,
      focus: linkState,
    }}
  />
);
