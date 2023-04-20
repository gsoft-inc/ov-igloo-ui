import React from 'react';
import Button from '@igloo-ui/button';

import { Meta } from '@storybook/react';

import ChromaticWrapper from '@components/chromaticWrapper';

import Toaster, { useToaster } from './Toaster';
import Toast from './Toast';

import readme from '../README.md';

export default {
  title: 'Components/Toaster',
  component: Toast,
  subcomponents: { Toaster },
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
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
        {Story()}
      </div>
    ),
  ],
} as Meta<typeof Toast>;

export const Overview = {
  render: () => {
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
  },

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const SuccessToast = () => {
  const [showToast, setShowToast] = React.useState(false);
  return (
    <ChromaticWrapper>
      <Button appearance="secondary" onClick={() => setShowToast(true)}>
        Remove profile
      </Button>
      {showToast && (
        <Toast
          message="Andrew's profile has been deleted "
          onDissmiss={() => setShowToast(false)}
        />
      )}
    </ChromaticWrapper>
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