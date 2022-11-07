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

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="ids-toaster" style={{ width: '100%' }}>
      {children}
    </section>
  );
};

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
  return (
    <Toast message="Andrew's profile has been deleted " duration="infinite" />
  );
};

SuccessToast.decorators = [(Story: any) => <Container>{Story()}</Container>];
SuccessToast.parameters = {
  chromatic: { delay: 400 },
};

export const ErrorToast = () => {
  return (
    <Toast
      message="Sorry Andrew, your account could not be activated"
      error
      duration="infinite"
    />
  );
};

ErrorToast.decorators = [(Story: any) => <Container>{Story()}</Container>];
ErrorToast.parameters = {
  chromatic: { delay: 400 },
};
