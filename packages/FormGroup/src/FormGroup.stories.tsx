import React from 'react';
import Input from '@igloo-ui/input';
import Textarea from '@igloo-ui/textarea';
import Select, { SelectOption } from '@igloo-ui/select';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Section from '@components/section';

import readme from '../README.md';
import FormGroup from './FormGroup';

export default {
  title: 'Components/FormGroup',
  component: FormGroup,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof FormGroup>;

const Template: ComponentStory<typeof FormGroup> = (args) => (
  <FormGroup {...args}>
    <Input type="text" placeholder="John" error={args.showMessage} />
  </FormGroup>
);

export const Overview = Template.bind({});
Overview.args = {
  label: 'First name',
  message: 'This field is required',
  showMessage: true,
};

export const Label = () => (
  <Section column>
    <FormGroup label="Last Name">
      <Input type="text" placeholder="Doe" />
    </FormGroup>
  </Section>
);

export const Error = () => {
  const [hasError, setHasError] = React.useState(true);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setHasError(!event?.target?.value);
  };

  return (
    <Section column>
      <FormGroup message="Name is required" showMessage={hasError}>
        <Input
          type="text"
          placeholder="Enter your full name"
          error={hasError}
          onChange={handleOnChange}
        />
      </FormGroup>
    </Section>
  );
};

export const info = () => {
  const [hasMessage, setHasMessage] = React.useState(false);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setHasMessage(event?.target?.value.length >= 20);
  };

  return (
    <Section column>
      <FormGroup
        message="You've reached your limit"
        messageType="info"
        showMessage={hasMessage}
      >
        <Input
          type="text"
          placeholder="Enter your full name"
          onChange={handleOnChange}
          maxLength={20}
        />
      </FormGroup>
    </Section>
  );
};

export const OtherFormElements = () => {
  const smallOptionList = [
    {
      label: 'Text option',
      value: 'text',
    },
    {
      label: 'Disabled option',
      value: 'disabled',
      disabled: true,
    },
    {
      label: 'Text option 3',
      value: 'icon',
    },
  ];

  const [hasSelectError, setHasSelectError] = React.useState(true);
  const [hasTextareaError, setHasTextareaError] = React.useState(true);

  const handleSelectOnChange = (option: SelectOption | undefined): void => {
    setHasSelectError(!option?.value);
  };

  const handleTextareaOnChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setHasTextareaError(!event?.target?.value);
  };

  return (
    <Section column>
      <FormGroup
        label="Error Select"
        message="You must select an option"
        showMessage={hasSelectError}
      >
        <Select
          options={smallOptionList}
          error={hasSelectError}
          onChange={handleSelectOnChange}
        >
          Error
        </Select>
      </FormGroup>

      <FormGroup
        label="Error Textarea"
        message="You must enter text"
        showMessage={hasTextareaError}
      >
        <Textarea
          placeholder="Enter text here"
          error={hasTextareaError}
          onChange={handleTextareaOnChange}
        />
      </FormGroup>
    </Section>
  );
};
