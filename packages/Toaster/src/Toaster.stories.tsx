import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Button from '@igloo-ui/button';

import Toaster, { useToaster } from './Toaster';
import Toast from './Toast';

import readme from '../README.md';

export default {
  title: 'Components/Toaster',
  component: Toast,
  subcomponents: { Toaster },
  parameters: {
    description: readme,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          padding: '2.4rem',
          gap: '1.6rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Toast>;

export const Overview = () => {
  const { toast, toastList } = useToaster();
  return (
    <>
      <Button onClick={() => toast.success('Successfully toasted!')}>
        Success
      </Button>
      <Button
        appearance="secondary"
        onClick={() => toast.error("This didn't work!")}
      >
        Error
      </Button>

      <Toaster toasts={toastList} />
    </>
  );
};

export const SuccessToast = () => {
  const [showToast, setShowToast] = React.useState(false);
  return (
    <>
      <Button appearance="secondary" onClick={() => setShowToast(true)}>
        Remove profile
      </Button>
      {showToast && (
        <Toast
          message="Andrew's profile has been deleted "
          onDissmiss={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export const ErrorToast = () => {
  const [showToast, setShowToast] = React.useState(false);
  return (
    <>
      <Button appearance="secondary" onClick={() => setShowToast(true)}>
        Validate inscription
      </Button>
      {showToast && (
        <Toast
          message="Sorry Andrew, your account could not be activated"
          error
          onDissmiss={() => setShowToast(false)}
        />
      )}
    </>
  );
};
