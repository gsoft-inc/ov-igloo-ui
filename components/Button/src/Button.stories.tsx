import React from 'react';

import { Meta } from '@storybook/react';

import Plus from '@igloo-ui/icons/dist/Plus';

import Button, { Props } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

interface TemplateProps {
  appearance?: string;
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
    iconLeading: <Plus size="small" />,
    children: 'New feedback',
  },
  {
    size: 'small',
    iconTrailing: <Plus size="small" />,
    children: 'New feedback',
  },
  { size: 'medium' },
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
];

export const Primary = (): React.ReactElement => (
  <Template payload={{ base: buttonState, disabled: buttonState }} />
);

export const Secondary = (): React.ReactElement => (
  <Template
    appearance="secondary"
    payload={{ base: buttonState, disabled: buttonState, active: buttonState }}
  />
);

export const Premium = (): React.ReactElement => (
  <Template
    appearance="premium"
    payload={{ base: buttonState, disabled: buttonState }}
  />
);

export const Danger = (): React.ReactElement => (
  <Template
    appearance="danger"
    payload={{ base: buttonState, disabled: buttonState }}
  />
);

export const Ghost = (): React.ReactElement => (
  <Template
    appearance="ghost"
    payload={{ base: buttonState, disabled: buttonState }}
  />
);

// export const Primary: React.VFC<Props> = () => <Button>Button</Button>;
