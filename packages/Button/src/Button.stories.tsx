import React from 'react';

import { Meta } from '@storybook/react';

import Plus from '@igloo-ui/icons/dist/Plus';

import Button, { ButtonProps, Appearance } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

interface TemplateProps {
  appearance?: Appearance;
  payload: {
    base: ButtonProps[];
    disabled: ButtonProps[];
    active: ButtonProps[];
    focus: ButtonProps[];
  };
}

const Template = ({
  appearance,
  payload,
}: TemplateProps): React.ReactElement => {
  const componentState = Object.keys(payload);
  const { base, disabled } = payload;

  const component = componentState.map((state, index) => {
    const isDisabled = state === 'disabled';
    const isFocus = state === 'focus';
    const datas = isDisabled ? disabled : base;

    const list = datas.map((p, i) => {
      const label = p.children !== undefined ? p.children : 'Send';
      return (
        <Button
          active={state === 'active'}
          appearance={appearance}
          disabled={isDisabled}
          key={i.toString()}
          {...p}
          className={isFocus ? 'focus ' + p.className : p.className}
        >
          {label}
        </Button>
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

const buttonState = [
  { size: 'small' },
  {
    size: 'small',
    children: 'Overflowing text',
    className: 'isb-element__thin',
  },
  {
    size: 'small',
    iconLeading: <Plus size="small" />,
    children: 'New feedback',
  },
  {
    size: 'small',
    iconTrailing: <Plus size="small" />,
    children: 'New feedback',
  },
  {
    size: 'small',
    children: 'New feedback',
    loading: true,
  },
  { size: 'medium' },
  {
    size: 'medium',
    children: 'Overflowing text',
    className: 'isb-element__thin',
  },
  {
    size: 'medium',
    iconLeading: <Plus size="small" />,
    children: 'New feedback',
  },
  {
    size: 'medium',
    iconTrailing: <Plus size="small" />,
    children: 'New feedback',
  },
  {
    size: 'medium',
    children: 'New feedback',
    loading: true,
  },
];

export const Playground: React.VFC<unknown> = (args) => (
  <Button {...args}>Playground button</Button>
);

export const Primary = (): React.ReactElement => (
  <Template
    payload={{
      base: buttonState,
      disabled: buttonState,
      active: buttonState,
      focus: buttonState,
    }}
  />
);

export const Secondary = (): React.ReactElement => (
  <Template
    appearance="secondary"
    payload={{
      base: buttonState,
      disabled: buttonState,
      active: buttonState,
      focus: buttonState,
    }}
  />
);

export const Premium = (): React.ReactElement => (
  <Template
    appearance="premium"
    payload={{ base: buttonState, disabled: buttonState, focus: buttonState }}
  />
);

export const Danger = (): React.ReactElement => (
  <Template
    appearance="danger"
    payload={{ base: buttonState, disabled: buttonState, focus: buttonState }}
  />
);

export const Ghost = (): React.ReactElement => (
  <Template
    appearance="ghost"
    payload={{ base: buttonState, disabled: buttonState, focus: buttonState }}
  />
);
