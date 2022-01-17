import React from 'react';

import { Meta } from '@storybook/react';

import IconButton from './IconButton';
import { Props, Appearance } from '@igloo-ui/button';

import Plus from '@igloo-ui/icons/dist/Plus';
import Settings from '@igloo-ui/icons/dist/Settings';

export default {
  title: 'Components/IconButton',
  component: IconButton,
} as Meta;

interface TemplateProps {
  appearance?: Appearance;
  payload: { base: Props[]; disabled: Props[]; active: Props[] };
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
      return (
        <IconButton
          active={state === 'active'}
          appearance={appearance}
          disabled={isDisabled}
          key={i.toString()}
          icon={<Plus size="small" />}
          className={isFocus ? 'focus ' + p.className : p.className}
          {...p}
        />
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
  {
    size: 'xsmall',
  },
  {
    size: 'small',
  },
  {
    size: 'medium',
  },
  {
    size: 'large',
  },
  {
    size: 'small',
    icon: <Settings size="small" />,
    theme: 'round',
  },
  {
    size: 'medium',
    icon: <Settings size="small" />,
    theme: 'round',
  },
];

export const Primary = (): React.ReactElement => (
  <Template
    payload={{ base: buttonState, disabled: buttonState, focus: buttonState }}
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
    payload={{
      base: buttonState,
      disabled: buttonState,
      active: buttonState,
      focus: buttonState,
    }}
  />
);
