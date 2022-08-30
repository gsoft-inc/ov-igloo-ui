import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Textarea from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
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
export const Overview = Template.bind({});
Overview.args = {
  placeholder: 'Enter text here',
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
