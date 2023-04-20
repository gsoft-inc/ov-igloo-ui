import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

import Section from '@components/section';
import readme from '../README.md';

import Radio from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    disabled: { table: { defaultValue: { summary: false } } },
    checked: { table: { defaultValue: { summary: false } } },
    small: { table: { defaultValue: { summary: false } } },
  },
} as Meta<typeof Radio>;

const Template: StoryFn<typeof Radio> = (args) => {
  const [_, updateArgs] = useArgs();

  const handleRadioChange = () => {
    updateArgs({checked: !args.checked});
  };
  
  return (
    <Radio {...args} onChange={() => handleRadioChange()} checked={args.checked} />
  );
};

export const Overview = {
  render: Template,

  args: {
    htmlFor: 'ids-radio',
    children: 'Label',
    checked: false
  },
};

export const Checked: React.FC<unknown> = () => (
  <Radio htmlFor="ids-radio-active" checked onChange={() => {}}>
    Label
  </Radio>
);

export const Disabled: React.FC<unknown> = () => (
  <Section>
    <Radio htmlFor="ids-radio-disabled" disabled>
      Disabled
    </Radio>
    <Radio htmlFor="ids-radio-disabled-active" checked disabled>
      Checked and disabled
    </Radio>
  </Section>
);

export const Small: React.FC<unknown> = () => (
  <Radio htmlFor="ids-radio-small" small>
    Small
  </Radio>
);

export const WithHelperText: React.FC<unknown> = () => (
  <Radio htmlFor="ids-radio-description" helperText="Helper text">
    Label
  </Radio>
);

export const Group: React.FC<unknown> = () => {
  const [selected, setSelected] = React.useState("");
  return (
    <Section>
      <Radio
        name="group-exemple"
        onChange={(event) => setSelected(event.currentTarget.id)}
        checked={selected === 'ids-radio-group-1'}
        htmlFor="ids-radio-group-1"
      >
        Option a
      </Radio>
      <Radio
        name="group-exemple"
        onChange={(event) => setSelected(event.currentTarget.id)}
        checked={selected === 'ids-radio-group-2'}
        htmlFor="ids-radio-group-2"
      >
        Option b
      </Radio>
      <Radio
        name="group-exemple"
        onChange={(event) => setSelected(event.currentTarget.id)}
        checked={selected === 'ids-radio-group-3'}
        htmlFor="ids-radio-group-3"
      >
        Option c
      </Radio>
    </Section>
  );
};
