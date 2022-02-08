import React from 'react';

import { Meta } from '@storybook/react';

import readme from '../README.md';

import Alert, { AlertButton, AlertProps, Type } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    description: readme,
  },
  argTypes: {
    message: {
      control: 'text',
      defaultValue: 'Lorem ipsum dolor sit amet',
    },
  },
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
    };

    return (
      <section className="isb-section" key={index.toString()}>
        <h2>{title}</h2>
        <div className="isb-section__content">
          <Alert
            style={displayContainerStyle}
            key={index.toString()}
            {...alertProperties}
          />
        </div>
      </section>
    );
  });

  return <>{components}</>;
};

const demoTitleText: string = 'Lorem ipsum dolor sit amet';

const demoText: string =
  'Praesent fringilla, magna in scelerisque tristique, turpis mi pharetra lectus, blandit varius sapien dolor nec arcu. Praesent tempus, purus vel rutrum vestibulum, metus nisl vestibulum purus, vel feugiat augue diam vel eros.';

const demoButton: AlertButton = {
  label: 'Vivamus id elit',
  onClick: () => alert('Action!'),
};

const demoAlertMessage: React.ReactNode = <p>{demoText}</p>;

const alertStyles = (type: Type): TemplateProperties[] => {
  return [
    {
      title: 'Card',
      alertProperties: {
        title: demoTitleText,
        message: demoAlertMessage,
        type,
      },
    },
    {
      title: 'Card + Button',
      alertProperties: {
        title: demoTitleText,
        message: demoAlertMessage,
        type,
        button: demoButton,
      },
    },
    {
      title: 'Inline',
      alertProperties: {
        title: demoTitleText,
        message: demoAlertMessage,
        type,
        appearance: 'inline',
      },
    },
    {
      title: 'Inline + Button',
      alertProperties: {
        title: demoTitleText,
        message: demoAlertMessage,
        type,
        appearance: 'inline',
        button: demoButton,
      },
    },
    {
      title: 'Horizontal',
      alertProperties: {
        title: demoTitleText,
        type,
        appearance: 'horizontal',
      },
    },
    {
      title: 'Horizontal + Button',
      alertProperties: {
        title: demoTitleText,
        type,
        appearance: 'horizontal',
        button: demoButton,
      },
    },
    {
      title: 'Not Closable',
      alertProperties: {
        title: demoTitleText,
        message: demoAlertMessage,
        type,
        closable: false,
      },
    },
  ];
};

export const Playground: React.VFC<AlertProps> = (args) => (
  <section className="isb-section" key={'1'}>
    <div className="isb-section__content">
      <Alert {...args}>Playground</Alert>
    </div>
  </section>
);

export const Announcement = (): React.ReactElement => (
  <Template payload={alertStyles('announcement')} />
);

export const Info = (): React.ReactElement => (
  <Template payload={alertStyles('info')} />
);

export const Premium = (): React.ReactElement => (
  <Template payload={alertStyles('premium')} />
);

export const Success = (): React.ReactElement => (
  <Template payload={alertStyles('success')} />
);

export const Warning = (): React.ReactElement => (
  <Template payload={alertStyles('warning')} />
);
