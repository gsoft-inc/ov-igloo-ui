import React from 'react';

import { Meta } from '@storybook/react';

import Alert, { AlertProps, Type } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

interface Templates {
  payload: TemplateProperties[];
}

interface TemplateProperties {
  title: string;
  alertProperties: AlertProps;
}

const Template = ({ payload }: Templates): React.ReactElement => {
  const components = payload.map(({ title, alertProperties }, index) => {
    console.log(
      `Title: ${title}; Properties: ${alertProperties}; Index ${index}`
    );

    const displayContainerStyle = {
      order: index,
      width: '100%',
      maxWidth: 900,
    };

    return (
      <section className="isb-section" key={index.toString()}>
        <h2>{title}</h2>
        <div className="isb-section__content">
          <div style={displayContainerStyle} key={index.toString()}>
            <Alert key={index.toString()} {...alertProperties} />
          </div>
        </div>
      </section>
    );
  });

  return <>{components}</>;
};

const demoTitleText: string = 'Lorem ipsum dolor sit amet';

const demoText: string =
  'Praesent fringilla, magna in scelerisque tristique, turpis mi pharetra lectus, blandit varius sapien dolor nec arcu. Praesent tempus, purus vel rutrum vestibulum, metus nisl vestibulum purus, vel feugiat augue diam vel eros.';

const demoButtonText: string = 'Vivamus id elit';

const demoAlertWithTitle: React.ReactNode = (
  <>
    <p className="alert-title">{demoTitleText}</p>
    <p>{demoText}</p>
  </>
);

const demoAlertWithoutTitle: React.ReactNode = <p>{demoText}</p>;

const alertStyles = (type: Type): TemplateProperties[] => {
  return [
    {
      title: 'Card',
      alertProperties: {
        children: demoAlertWithTitle,
        type,
      },
    },
    {
      title: 'Card + Button',
      alertProperties: {
        children: demoAlertWithTitle,
        type,
        onAlertActionClick: () => alert('Action!'),
        alertActionText: demoButtonText,
      },
    },
    {
      title: 'Inline',
      alertProperties: {
        children: demoAlertWithTitle,
        type,
        alertStyle: 'inline',
      },
    },
    {
      title: 'Inline + Button',
      alertProperties: {
        children: demoAlertWithTitle,
        type,
        alertStyle: 'inline',
        onAlertActionClick: () => alert('Action!'),
        alertActionText: demoButtonText,
      },
    },
    {
      title: 'Horizontal',
      alertProperties: {
        children: demoAlertWithoutTitle,
        type,
        alertStyle: 'horizontal',
      },
    },
    {
      title: 'Horizontal + Button',
      alertProperties: {
        children: demoAlertWithoutTitle,
        type,
        alertStyle: 'horizontal',
        onAlertActionClick: () => alert('Action!'),
        alertActionText: demoButtonText,
      },
    },
    {
      title: 'Not Dismissible',
      alertProperties: {
        children: demoAlertWithTitle,
        type,
        isDismissible: false,
      },
    },
    {
      title: 'Small-Top Icon',
      alertProperties: {
        children: demoAlertWithTitle,
        type,
        iconStyle: 'small-top',
      },
    },
  ];
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
