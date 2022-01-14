import React from 'react';

import { Meta } from '@storybook/react';
import Button from '@igloo-ui/button';
import Icon from '@igloo-ui/icons/dist/Plus';

import Alert, { AlertProps, Type, Style } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

interface TemplateProps {
  payload: {
    [key in Style]: AlertProps[];
  };
}

const Template = ({ payload }: TemplateProps): React.ReactElement => {
  const componentStyle = Object.keys(payload);
  const { card, inline, horizontal } = payload;

  const component = componentStyle.map((type, index) => {
    const list = component.map((preview, previewIndex) => {
      const displayContainerStyle = {
        order: previewIndex,
      };

      return (
        <div style={displayContainerStyle} key={previewIndex.toString()}>
          <Alert key={previewIndex.toString()} {...preview} />
        </div>
      );
    });

    const title = type.charAt(0).toUpperCase() + type.slice(1);

    return (
      <section className="isb-section" key={index.toString()}>
        <h2>{title}</h2>
        <div className="isb-section__content">{list}</div>
      </section>
    );
  });

  return <>{component}</>;
};

const demoWithCallToActionReactComponent: React.ReactNode = (
  <>
    <p className="alert-title">Lorem ipsum dolor sit amet</p>
    <p>
      Praesent fringilla, magna in scelerisque tristique, turpis mi pharetra
      lectus, blandit varius sapien dolor nec arcu. Praesent tempus, purus vel
      rutrum vestibulum, metus nisl vestibulum purus, vel feugiat augue diam vel
      eros.
    </p>
    <Button appearance="secondary">Vivamus id elit</Button>
  </>
);

const demoWithoutCallToActionReactComponent: React.ReactNode = (
  <>
    <p className="alert-title">Lorem ipsum dolor sit amet</p>
    <p>
      Praesent fringilla, magna in scelerisque tristique, turpis mi pharetra
      lectus, blandit varius sapien dolor nec arcu. Praesent tempus, purus vel
      rutrum vestibulum, metus nisl vestibulum purus, vel feugiat augue diam vel
      eros.
    </p>
  </>
);

const alertProps = (type: Type): AlertProps[] => {
  return [
    {
      children: demoWithCallToActionReactComponent,
      type,
    },
    {
      children: demoWithoutCallToActionReactComponent,
      type,
    },
  ];
};

const alertStyles = (type: Type): { [key in Style]: AlertProps[] } => {
  return {
    card: alertProps(type),
    inline: alertProps(type),
    horizontal: alertProps(type),
  };
};

export const Announcement = (): React.ReactElement => (
  <Template payload={alertStyles('announcement')} />
);

export const Info = (): React.ReactElement => (
  <Template payload={alertStyles('info')} />
);

export const Premium = (): React.ReactElement => (
  <Template payload={alertStyles('premium')} />
);

export const Promo = (): React.ReactElement => (
  <Template payload={alertStyles('promo')} />
);

export const Success = (): React.ReactElement => (
  <Template payload={alertStyles('success')} />
);

export const Warning = (): React.ReactElement => (
  <Template payload={alertStyles('warning')} />
);

export const None = (): React.ReactElement => (
  <Template payload={alertStyles('none')} />
);
