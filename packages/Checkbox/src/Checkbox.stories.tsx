import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
      }
    }
  },
  argTypes: {
    children: { control: { type: 'text' } },
  },
} as Meta<typeof Checkbox>;


type Story = StoryObj<typeof Checkbox>;

export const Overview: Story = {
  args: {
    htmlFor: 'ids-checkbox',
    children: 'Label'
  }
};

export const Checked: Story = {
  render: () => {
    return (
      <Section>
        <Checkbox htmlFor="ids-checkbox-active" checked>
          Label
        </Checkbox>
      </Section>
    )
  }
};

export const Indeterminate: Story = {
  render: () => {
    return (
      <Section>
        <Checkbox htmlFor="ids-checkbox-indeterminate" indeterminate>
          Label
        </Checkbox>
      </Section>
    )
  }
};

export const Disabled: Story = {
  render: () => {
    return (
      <Section>
        <Checkbox htmlFor="ids-checkbox-disabled" disabled>
          Label
        </Checkbox>
    
        <Checkbox htmlFor="ids-checkbox-disabled-active" checked disabled>
          Label
        </Checkbox>
    
        <Checkbox
          htmlFor="ids-checkbox-disabled-indeterminate"
          indeterminate
          disabled
        >
          Label
        </Checkbox>
      </Section>
    )
  }
};

export const CompletionCheckbox: Story = {
  render: () => {
    return (
      <Section>
        <Checkbox htmlFor="ids-checkbox-completion-default" appearance="completion">
          Label
        </Checkbox>
        <Checkbox htmlFor="ids-checkbox-completion-active" checked appearance="completion">
          Label
        </Checkbox>
        <Checkbox htmlFor="ids-checkbox-completion-disabled" disabled appearance="completion">
          Label
        </Checkbox>
        <Checkbox htmlFor="ids-checkbox-completion-disabled-active" checked disabled appearance="completion">
          Label
        </Checkbox>
      </Section>
    )
  }
};
