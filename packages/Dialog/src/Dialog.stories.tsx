import React from 'react';
import isChromatic from 'chromatic/isChromatic';

import { Meta, StoryFn } from '@storybook/react';

import Button from '@igloo-ui/button';
import ChromaticWrapper from '@components/chromaticWrapper';

import readme from '../README.md';

import Dialog from './Dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    },
    chromatic: { pauseAnimationAtEnd: true },
  },
} as Meta<typeof Dialog>;

const Template: StoryFn<typeof Dialog> = (args) => {
  const [open, setOpen] = React.useState(args.isOpen);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ChromaticWrapper>
      <Button appearance="secondary" onClick={handleOpen}>
        open
      </Button>
      <Dialog {...args} isOpen={open} onDismiss={handleClose} />
    </ChromaticWrapper>
  );
};

export const Overview = {
  render: Template,

  args: {
    subTitle: 'This is a sub title',
    title: 'Dialog title',
    dismissText: 'Cancel',
    validateText: 'Confirm',
    isOpen: isChromatic(),
  },
};

export const LongText = () => {
  const [open, setOpen] = React.useState(isChromatic());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleValidate = () => {
    alert('You said yes');
    setOpen(false);
  };

  return (
    <ChromaticWrapper>
      <Button appearance="secondary" onClick={handleOpen}>
        open
      </Button>
      <Dialog
        title="Please read the question below and answer accordingly"
        subTitle="Do you agree with the terms set by this company?"
        dismissText="No"
        validateText="Yes"
        isOpen={open}
        onDismiss={handleClose}
        onValidate={handleValidate}
      />
    </ChromaticWrapper>
  );
};

export const FewestNumberOfProps = () => {
  const [open, setOpen] = React.useState(isChromatic());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleValidate = () => {
    alert('You said yes');
    setOpen(false);
  };

  return (
    <ChromaticWrapper>
      <Button appearance="secondary" onClick={handleOpen}>
        open
      </Button>
      <Dialog
        title="I only have a title, a validate action and an X to close this dialog"
        validateText="Confirm"
        isOpen={open}
        onDismiss={handleClose}
        onValidate={handleValidate}
      />
    </ChromaticWrapper>
  );
};

export const Danger = () => {
  const [open, setOpen] = React.useState(isChromatic());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleValidate = () => {
    alert('You said yes');
    setOpen(false);
  };

  return (
    <ChromaticWrapper>
      <Button appearance="secondary" onClick={handleOpen}>
        Remove user
      </Button>
      <Dialog
        danger
        title="Are you about to delete this user?"
        validateText="Confirm"
        dismissText="Cancel"
        isOpen={open}
        onDismiss={handleClose}
        onValidate={handleValidate}
      />
    </ChromaticWrapper>
  );
};

export const CustomSubTitle = () => {
  const [open, setOpen] = React.useState(isChromatic());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleValidate = () => {
    setOpen(false);
  };

  return (
    <ChromaticWrapper>
      <Button appearance="secondary" onClick={handleOpen}>
        open
      </Button>
      <Dialog
        title="I only have a title, a validate action and an X to close this dialog"
        subTitle={
          <div>
            <p>
              I am a custom subtitle, I can be a <strong>JSX</strong> element
            </p>
            <p>
              I can also be a <strong>string</strong>
            </p>
          </div>
        }
        validateText="Confirm"
        isOpen={open}
        onDismiss={handleClose}
        onValidate={handleValidate}
      />
    </ChromaticWrapper>
  );
};
