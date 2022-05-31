import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Plus from '@igloo-ui/icons/dist/Plus';

import Section from '@components/section';
import readme from '../README.md';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    description: readme,
  },
  argTypes: {
    disabled: { table: { defaultValue: { summary: false } } },
    active: { table: { defaultValue: { summary: false } } },
    loading: { table: { defaultValue: { summary: false } } },
    size: { table: { defaultValue: { summary: 'medium' } } },
    appearance: { table: { defaultValue: { summary: 'primary' } } },
    type: { table: { defaultValue: { summary: 'button' } } },
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
