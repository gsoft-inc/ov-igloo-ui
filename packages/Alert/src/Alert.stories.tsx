import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    description: readme,
  },
  argTypes: {
    message: {
      control: 'text',
    },
    appearance: { table: { defaultValue: { summary: 'card' } } },
    closable: { table: { defaultValue: { summary: true } } },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  message: 'Overview alert',
  onClose: () => {},
};

const mockContent = {
  title: 'Lorem ipsum dolor sit amet',
  message:
    'Praesent fringilla, magna in scelerisque tristique, turpis mi pharetra lectus, blandit varius sapien dolor nec arcu. Praesent tempus, purus vel rutrum vestibulum, metus nisl vestibulum purus, vel feugiat augue diam vel eros.',
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
