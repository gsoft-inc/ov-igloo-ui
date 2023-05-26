import React from 'react';
import Button from '@igloo-ui/button';

import { Meta } from '@storybook/react';

import ChromaticWrapper from '@components/chromaticWrapper';

import Toaster, { toast } from './Toaster';
import Toast from './Toast';

import readme from '../README.md';

export default {
  title: 'Components/Toaster',
  component: Toast,
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

        <Toaster />
      </>
    );
  },

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Closable = {
  render: () => {
    return (
      <>
        <Button onClick={() => toast.success("I will not close until I'm told", 'infinite', true)}>
          Closable
        </Button>
        <Toaster />
      </>
    );
  },

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const SuccessToast = () => {

  return (
    <ChromaticWrapper>
      <Button appearance="secondary" onClick={() => toast.success("Andrew's profile has been deleted")}>
        Remove profile
      </Button>
        <Toaster />
    </ChromaticWrapper>
  );
};

export const ErrorToast = () => {

  return (
    <ChromaticWrapper>
      <Button appearance="secondary" onClick={() => toast.error("Sorry Andrew, your account could not be activated")}>
        Validate inscription
      </Button>
        <Toaster />
    </ChromaticWrapper>
  );
};