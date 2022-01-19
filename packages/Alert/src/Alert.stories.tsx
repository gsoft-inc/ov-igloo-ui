import React from 'react';

import { Meta } from '@storybook/react';

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

  const component = componentStyle.map((style, index) => {
    const list = payload[style as Style].map((preview, previewIndex) => {
      const displayContainerStyle = {
        order: previewIndex,
        width: '100%',
      };

      return (
        <div className="isb-section__content">
          <div style={displayContainerStyle} key={previewIndex.toString()}>
            <Alert
              key={previewIndex.toString()}
              alertStyle={style as Style}
              {...preview}
            />
          </div>
        </div>
      );
    });

    const title = style.charAt(0).toUpperCase() + style.slice(1);

    return (
      <section className="isb-section" key={index.toString()}>
        <h2>{title}</h2>
        {list}
      </section>
    );
  });

  return <>{component}</>;
};

const demoAlertWithTitle: React.ReactNode = (
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
      children: demoAlertWithTitle,
      type,
      iconStyle: 'medium-centered',
      onAlertActionClick: () => alert('Action!'),
      alertActionText: 'Vivamus id elit',
    },
    {
      children: demoAlertWithTitle,
      type,
      iconStyle: 'medium-centered',
    },
    {
      children: demoAlertWithTitle,
      type,
      iconStyle: 'small-top',
      onAlertActionClick: () => alert('Action!'),
      alertActionText: 'Vivamus id elit',
    },
    {
      children: demoAlertWithTitle,
      type,
      iconStyle: 'small-top',
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
