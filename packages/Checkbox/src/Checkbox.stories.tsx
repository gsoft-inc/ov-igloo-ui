import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    children: { control: { type: 'text' } },
  },
} as Meta<typeof Checkbox>;

export const Overview = {
  args: {
    htmlFor: 'ids-checkbox',
    children: 'Label',
  },
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
