import React, { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '@igloo-ui/button';

import Section from '@components/section';
import Mockup from '@components/mockup';

import readme from '../README.md';

import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    description: readme,
  },
  argTypes: {
    size: { table: { defaultValue: { summary: 'small' } } },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button appearance="secondary" onClick={handleOpen}>
        show modal
      </Button>
      <Modal
        {...args}
        isOpen={open}
        onClose={handleClose}
        children={args.children}
      />
    </>
  );
};

export const Overview = Template.bind({});
Overview.args = {
  children: 'Dummy starter component',
  title: 'Modal title',
  isClosable: true,
  isDismissable: false,
};

export const Sizes = () => {
  const [show, setShow] = useState(false);
  const [size, setSize] = useState('');

  const handleOpen = (size: string) => {
    setShow(true);
    setSize(size);
  };

  return (
    <Section>
      <Button appearance="secondary" onClick={() => handleOpen('small')}>
        small
      </Button>
      <Button appearance="secondary" onClick={() => handleOpen('medium')}>
        medium
      </Button>
      <Button appearance="secondary" onClick={() => handleOpen('large')}>
        large
      </Button>
      <Button appearance="secondary" onClick={() => handleOpen('xlarge')}>
        xlarge
      </Button>
      <Modal
        title={`Modal size: ${size}`}
        isDismissable
        isClosable
        isOpen={show}
        // @ts-ignore
        size={size}
        closeBtnAriaLabel={`Close`}
        onClose={() => setShow(false)}
        onAfterClose={() => setSize('')}
      >
        Modal content
      </Modal>
    </Section>
  );
};

export const removeClose = () => {
  const [show, setShow] = useState(false);

  return (
    <Section>
      <Button appearance="secondary" onClick={() => setShow(true)}>
        open
      </Button>
      <Modal isDismissable isOpen={show} onClose={() => setShow(false)}>
        Modal content
      </Modal>
    </Section>
  );
};

export const Exemple = () => {
  const [show, setShow] = useState(false);

  return (
    <Section>
      <Button appearance="secondary" onClick={() => setShow(true)}>
        open
      </Button>
      <Modal
        isClosable
        isDismissable
        fullContent
        title="I'm a modal"
        size="xlarge"
        isOpen={show}
        onClose={() => setShow(false)}
      >
        <Mockup />
      </Modal>
    </Section>
  );
};
