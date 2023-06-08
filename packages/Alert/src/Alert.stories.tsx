import React from 'react';

import { Meta } from '@storybook/react';

import Tooltip from '@igloo-ui/tooltip';
import Hyperlink from '@igloo-ui/hyperlink';
import Section from '@components/section';
import readme from '../README.md';

import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    message: {
      control: 'text',
    },
  },
} as Meta<typeof Alert>;

const mockContent = {
  title: 'Title of the alert',
  message: 'Alert message goes here',
};

export const Overview = {
  args: {
    title: mockContent.title,
    message: mockContent.message,
    button: { label: 'Button', onClick: () => {} },
    type: 'info',
    onClose: () => {},
    appearance: 'card',
    closable: true,
  },
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


export const Metadata = () => (
  <Section column>
    <Alert type="warning" title={<><Hyperlink>{'{#}'} participants</Hyperlink> missing a Direct Manager</>}
      message={
        <div>
          <p>Participants without a Direct Manager will automatically be removed from this cycle. A Direct Manager is someone a team member directly reports to. Together they will discuss, track, and evaluate performance in Officevibe.</p>
          <p>How to assign Direct Managers to participants <Hyperlink>Tell me more</Hyperlink></p>
          <ul>
            <li>Bulk assign Direct Managers using bulk provisioning</li>
            <li>Manually assign Direct Managers in members settings</li>
          </ul>
        </div>
      }
      closable={false}
      metadata={
        <Tooltip content="April 24, 2023 - 8:00 PM">
          Updated today at 8:00
        </Tooltip>
      } />
  </Section>
);
