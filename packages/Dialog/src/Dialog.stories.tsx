import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '@igloo-ui/button';
import Section from '@components/section';
import readme from '../README.md';

import Dialog from './Dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button appearance="secondary" onClick={handleOpen}>
        open
      </Button>
      <Dialog {...args} isOpen={open} onDismiss={handleClose} />
    </>
  );
};
export const Overview = Template.bind({});
Overview.args = {
  subTitle: 'This is a sub title',
  title: 'Modal title',
  dismissText: 'Cancel',
  validateText: 'Confirm',
};

export const LongText = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Section>
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
      />
    </Section>
  );
};
