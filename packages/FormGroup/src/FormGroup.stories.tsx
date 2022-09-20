import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import FormGroup from './FormGroup';
import Input from '@igloo-ui/input';
import Select, { SelectOption } from '@igloo-ui/select';
import Textarea from '@igloo-ui/textarea';

export default {
  title: 'Components/FormGroup',
  component: FormGroup,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof FormGroup>;

const Template: ComponentStory<typeof FormGroup> = (args) => (
  <FormGroup {...args}>
    <Input type="text" placeholder="John" error={true} />
  </FormGroup>
);

export const Overview = Template.bind({});
Overview.args = {
  label: 'First name',
  errorMsg: 'This field is required',
  showError: true,
};

export const Label = () => (
  <Section>
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
    <Section>
      <FormGroup errorMsg="Name is required" showError={hasError}>
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
        errorMsg="You must select an option"
        showError={hasSelectError}
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
        errorMsg="You must enter text"
        showError={hasTextareaError}
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
