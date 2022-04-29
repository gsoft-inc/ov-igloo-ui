import React from 'react';

import useState from 'storybook-addon-state';
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
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState('default', false);

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
      {open && (
        <Modal
          {...args}
          isOpen={open}
          onClose={handleClose}
          children={args.children}
        />
      )}
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
  const [show, setShow] = useState('sizes', '');

  // @ts-ignore
  const showModal = show !== '' && show !== false;

  return (
    <Section>
      <Button appearance="secondary" onClick={() => setShow('small')}>
        small
      </Button>
      <Button appearance="secondary" onClick={() => setShow('medium')}>
        medium
      </Button>
      <Button appearance="secondary" onClick={() => setShow('large')}>
        large
      </Button>
      <Button appearance="secondary" onClick={() => setShow('xlarge')}>
        xlarge
      </Button>
      {showModal && (
        <Modal
          title={`Modal size: ${show}`}
          isDismissable
          isClosable
          isOpen={showModal}
          // @ts-ignore
          size={show}
          closeButtonLabel={`Close`}
          onClose={() => setShow('')}
        >
          Modal content
        </Modal>
      )}
    </Section>
  );
};

export const removeClose = () => {
  const [show, setShow] = useState('isClosable', false);

  return (
    <Section>
      <Button appearance="secondary" onClick={() => setShow(true)}>
        open
      </Button>
      {show && (
        <Modal isDismissable isOpen={show} onClose={() => setShow(false)}>
          Modal content
        </Modal>
      )}
    </Section>
  );
};

export const Exemple = () => {
  const [show, setShow] = useState('exemple', false);

  return (
    <Section>
      <Button appearance="secondary" onClick={() => setShow(true)}>
        open
      </Button>
      {show && (
        <Modal
          isClosable
          isDismissable
          withSpace
          title="I'm a modal"
          size="xlarge"
          isOpen={show}
          onClose={() => setShow(false)}
        >
          <Mockup />
        </Modal>
      )}
    </Section>
  );
};
