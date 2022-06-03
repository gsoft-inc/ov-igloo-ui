import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Plus from '@igloo-ui/icons/dist/Plus';

import Section from '@components/section';
import readme from '../README.md';

import Button from './Button';

// TODO: Fix the autogenerated docs. After the rework for the `as` props the autogenerated doc is broken
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    description: readme,
  },
  argTypes: {
    children: { description: 'The content to display inside the button' },
    disabled: {
      description: 'Disabled the button, the user cannot click on them',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: { type: 'boolean' },
    },
    active: {
      description: 'Sets the button in an active state',
      table: { defaultValue: { summary: false }, type: { summary: 'boolean' } },
      control: { type: 'boolean' },
    },
    loading: {
      description:
        'Replaces button text with a spinner while a background action is being performed',
      table: { defaultValue: { summary: false }, type: { summary: 'boolean' } },
      control: { type: 'boolean' },
    },
    size: {
      description: 'Changes the size of button, giving more or less padding',
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: '"small" | "medium"' },
      },
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
    dataTest: {
      description: 'Add a data-test tag for automated tests',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    iconLeading: {
      description: 'Icon to display to the left of button content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    iconTrailing: {
      description: 'Icon to display to the right of button content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    showOnlyIconOnMobile: {
      description: 'Display only the icon in mobile',
      table: { type: { summary: 'boolean' } },
      control: { type: 'boolean' },
    },
    onClick: {
      description: 'Callback when clicked',
      table: {
        type: { summary: '() => {}' },
      },
    },
    intercomTarget: {
      description:
        'Add a data-intercom-target with unique id to link a components to a Product Tour step',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    className: {
      description: 'Add a specific class to the button',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    appearance: {
      description: 'Button appearance',
      table: {
        defaultValue: { summary: 'primary' },
        type: {
          summary: ' "primary" | "secondary" | "premium" | "ghost" | "danger"',
        },
      },
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary', 'premium', 'ghost', 'danger'],
    },
    type: {
      description: 'Optional prop to specify the type of the Button',
      table: {
        defaultValue: { summary: 'button' },
        type: { summary: ' "button" | "reset" | "submit"' },
      },
      control: { type: 'radio' },
      options: ['button', 'reset', 'submit'],
    },
    as: {
      description: 'Add ability to display a link by an `a` tag',
      table: {
        defaultValue: { summary: 'button' },
        type: { summary: '"button | "a"' },
      },
      control: { type: 'radio' },
      options: ['button', 'a'],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  children: 'Button',
};

export const Appearances = () => (
  <Section>
    <Button appearance="primary">Primary</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button appearance="premium">Premium</Button>
    <Button appearance="danger">Danger</Button>
    <Button appearance="ghost">Ghost</Button>
  </Section>
);

export const Loading = () => (
  <Section>
    <Button loading>Loading</Button>
    <Button loading appearance="secondary">
      Loading
    </Button>
    <Button loading appearance="premium">
      Premium
    </Button>
    <Button loading appearance="danger">
      Danger
    </Button>
    <Button loading appearance="ghost">
      Ghost
    </Button>
  </Section>
);

export const Sizes = () => (
  <Section>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
  </Section>
);

export const States = () => (
  <Section>
    <Button appearance="secondary">Secondary</Button>
    <Button disabled appearance="secondary">
      Secondary
    </Button>
    <Button active appearance="secondary">
      Secondary
    </Button>
    <Button className="focus" appearance="secondary">
      Secondary
    </Button>
  </Section>
);

export const Icons = () => (
  <Section>
    <Button showOnlyIconOnMobile iconLeading={<Plus />}>
      Left icon
    </Button>
    <Button showOnlyIconOnMobile iconTrailing={<Plus />}>
      Right icon
    </Button>
  </Section>
);

export const AsLink = () => {
  return (
    <Section>
      <Button as="a" href="://igloo.officevibe.design" appearance="primary">
        Primary
      </Button>
      <Button as="a" href="://igloo.officevibe.design" appearance="secondary">
        Secondary
      </Button>
      <Button as="a" href="://igloo.officevibe.design" appearance="premium">
        Premium
      </Button>
      <Button as="a" href="://igloo.officevibe.design" appearance="danger">
        Danger
      </Button>
      <Button as="a" href="://igloo.officevibe.design" appearance="ghost">
        Ghost
      </Button>
    </Section>
  );
};
