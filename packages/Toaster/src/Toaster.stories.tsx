import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Toast as HotToast } from 'react-hot-toast';

import Button from '@igloo-ui/button';
import Toaster, { toaster } from './Toaster';
import Toast from './Toast';

import readme from '../README.md';

export default {
  title: 'Components/Toaster',
  component: Toaster,
  parameters: {
    description: readme,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          padding: '2.4rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Toaster>;

const mockToast = {
  createdAt: 1639075944871,
  visible: true,
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  },
  message: 'Successfully toasted!',
  pauseDuration: 0,
  position: 'top-center',
  duration: 5000,
  id: '1',
  style: {},
} as HotToast;

export const Overview = () => {
  return (
    <>
      <Button
        size="small"
        onClick={() => toaster.success('Successfully toasted!')}
      >
        Success
      </Button>
      <Button
        style={{ marginLeft: '1.6rem' }}
        size="small"
        appearance="secondary"
        onClick={() => toaster.error("This didn't work.")}
      >
        Error
      </Button>
      <Toaster iconDescription="describes the close button" />
    </>
  );
};

export const Standard = () => (
  <Toast
    iconDescription="describes the close button"
    toast={{ ...mockToast, type: 'success' }}
  />
);

export const Error = () => (
  <Toast
    iconDescription="describes the close button"
    toast={{ ...mockToast, type: 'error' }}
  />
);

export const LongDescription = () => (
  <Toast
    iconDescription="describes the close button"
    toast={{
      ...mockToast,
      type: 'success',
      message:
        'Aenean ultrices sapien vitae dolor mollis, a ullamcorper est commodo',
    }}
  />
);
