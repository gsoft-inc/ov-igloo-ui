import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Textarea from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    value: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = (args) => {
  const [value, setValue] = React.useState(args.value ?? '');
  return (
    <Textarea
      {...args}
      onChange={(e) => {
        if (args.onChange) {
          args.onChange(e);
        }
        setValue(e.target.value);
      }}
      value={value}
    />
  );
};

export const Overview = {
  render: Template,

  args: {
    placeholder: 'Enter text here',
  },
};

export const Autofocus = () => {
  return (
    <Section column>
      <Textarea
        autoFocus
        placeholder="Do not allow a new line using enter"
        allowNewline={false}
      />
    </Section>
  );
};

export const States = () => (
  <Section column>
    <Textarea placeholder="Focus" className="ids-textarea--focus" />
    <Textarea placeholder="Disabled" disabled />
    <Textarea placeholder="Error" error />
  </Section>
);

export const CharacterIndicator = () => (
  <Section column>
    <Textarea
      placeholder="The character count will count down to show how many characters are left. MaxLength is required"
      maxLength={1000}
      showCharactersIndicator
    />
  </Section>
);

export const AutoResize = () => (
  <Section column>
    <Textarea placeholder="Auto Resize" isAutoResize />
  </Section>
);

export const DoNotAllowNewLine = () => (
  <Section column>
    <Textarea
      placeholder="Do not allow a new line using enter"
      allowNewline={false}
    />
  </Section>
);
