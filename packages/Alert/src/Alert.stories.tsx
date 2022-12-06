import React from 'react';

import { withDesign } from 'storybook-addon-designs';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  decorators: [withDesign],
  parameters: {
    description: readme,
  },
  argTypes: {
    title: {
      control: 'text',
    },
    message: {
      control: 'text',
    },
    appearance: { table: { defaultValue: { summary: 'card' } } },
    closable: { table: { defaultValue: { summary: true } } },
  },
} as ComponentMeta<typeof Alert>;

const mockContent = {
  title: 'Title of the alert',
  message: 'Alert message goes here',
};

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  title: mockContent.title,
  message: mockContent.message,
  button: { label: 'Button', onClick: () => {} },
  type: 'info',
  onClose: () => {},
};

Overview.parameters = {
  design: [
    {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/KXrVZlFqD8mmlxJJhL5Jhn/Igloo-Design-System-%E2%9D%84%EF%B8%8F?node-id=13531%3A54088&t=wgeXmfPntrPh6yYD-4',
    },
    {
      type: 'link',
      label: 'Open design in new tab',
      url: 'https://www.figma.com/file/KXrVZlFqD8mmlxJJhL5Jhn/Igloo-Design-System-%E2%9D%84%EF%B8%8F?node-id=13531%3A54088&t=wgeXmfPntrPh6yYD-4',
    },
  ],
};

export const Types = () => (
  <Section column>
    <Alert
      type="announcement"
      title="Announcement"
      message={mockContent.message}
    />
    <Alert type="info" title="Info" message={mockContent.message} />
    <Alert type="premium" title="Premium" message={mockContent.message} />
    <Alert type="success" title="Success" message={mockContent.message} />
    <Alert type="warning" title="Warning" message={mockContent.message} />
  </Section>
);

export const Appearances = () => (
  <Section column>
    <Alert
      type="announcement"
      appearance="card"
      title="Card"
      message={mockContent.message}
    />
    <Alert
      type="announcement"
      appearance="inline"
      title="Inline"
      message={mockContent.message}
    />
    <Alert type="announcement" appearance="horizontal" title="Horizontal" />
  </Section>
);

export const WithButton = () => (
  <Section column>
    <Alert
      button={{ label: 'Button', onClick: () => {} }}
      type="info"
      appearance="card"
      title={mockContent.title}
      message={mockContent.message}
    />
    <Alert
      button={{ label: 'Button', onClick: () => {} }}
      type="info"
      appearance="inline"
      title={mockContent.title}
      message={mockContent.message}
    />
    <Alert
      button={{ label: 'Button', onClick: () => {} }}
      type="info"
      appearance="horizontal"
      title={mockContent.title}
    />
  </Section>
);

export const Closable = () => (
  <Section column>
    <Alert
      closable={false}
      button={{ label: 'Button', onClick: () => {} }}
      type="premium"
      title={mockContent.title}
      message={mockContent.message}
    />
  </Section>
);
