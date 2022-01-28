import React from 'react';
import { Meta } from '@storybook/react';
import { Toast as HotToast } from 'react-hot-toast';

import Button from '@igloo-ui/button';
import Toaster, { toaster } from './Toaster';
import Toast from './Toast';

export default {
  title: 'Components/Toaster',
  component: Toaster,
} as Meta;

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

export const Playground: React.VFC<unknown> = () => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '2.4rem',
      }}
    >
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
    </div>
  );
};

export const Standard: React.VFC<unknown> = () => (
  <Toast
    iconDescription="describes the close button"
    toast={{ ...mockToast, type: 'success' }}
  />
);

export const Error: React.VFC<unknown> = () => (
  <Toast
    iconDescription="describes the close button"
    toast={{ ...mockToast, type: 'error' }}
  />
);

export const LongDescription: React.VFC<unknown> = () => (
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
