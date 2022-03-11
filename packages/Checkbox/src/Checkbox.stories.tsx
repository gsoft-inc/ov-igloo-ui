import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    description: readme,
  },
  argTypes: {
    children: { control: { type: 'text' } },
    checked: { table: { defaultValue: { summary: false } } },
    disabled: { table: { defaultValue: { summary: false } } },
    indeterminate: { table: { defaultValue: { summary: false } } },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);
export const Overview = Template.bind({});
Overview.args = {
  htmlFor: 'ids-checkbox',
  children: 'Label',
};

export const Checked: React.VFC<unknown> = () => (
  <Checkbox htmlFor="ids-checkbox-active" checked>
    Label
  </Checkbox>
);

export const Indeterminate: React.VFC<unknown> = () => (
  <Checkbox htmlFor="ids-checkbox-indeterminate" indeterminate>
    Label
  </Checkbox>
);

export const Disabled: React.VFC<unknown> = () => (
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
);
