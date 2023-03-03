import React from 'react';
import Button from '@igloo-ui/button';
import Modal from '@igloo-ui/modal';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import readme from '../README.md';

import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    description: readme,
  },
  argTypes: {
    children: {
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    content: { control: 'text' },
    size: {
      table: { defaultValue: { summary: 'xsmall' } },
      options: ['xsmall', 'small', 'medium', 'large'],
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '36rem',
          padding: '1.6rem',
          fontSize: '1.6rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Dropdown>;

const List = ({ items }: { items: string[] }) => {
  const listItem = items.map((item, key) => (
    <li className="isb-list__item" key={`items_${key}`}>
      {item}
    </li>
  ));
  return <ul className="isb-list">{listItem}</ul>;
};

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const [show, setShow] = React.useState(args.isOpen);
  return (
    <Dropdown
      {...args}
      isOpen={show}
      onClose={() => setShow(false)}
      content={
        <List
          items={['Organization details', 'Billing', 'Permissions', 'Segments']}
        />
      }
    >
      <Button
        appearance="secondary"
        size="small"
        onClick={() => setShow(!show)}
      >
        Settings
      </Button>
    </Dropdown>
  );
};

export const Overview = Template.bind({});
Overview.args = {
  isOpen: false,
};

export const DropdownInAModal = () => {
  const [show, setShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>open</Button>
      <Modal isClosable isOpen={show} onClose={() => setShow(false)}>
        <Dropdown
          isOpen={open}
          onClose={() => setOpen(false)}
          content={
            <List
              items={[
                'Organization details',
                'Billing',
                'Permissions',
                'Segments',
              ]}
            />
          }
        >
          <Button
            appearance="secondary"
            size="small"
            onClick={() => setOpen(!open)}
          >
            Settings
          </Button>
        </Dropdown>
      </Modal>
    </>
  );
};
