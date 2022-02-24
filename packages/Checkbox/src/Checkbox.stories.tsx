import React from 'react';

import { Meta } from '@storybook/react';

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
} as Meta<typeof Checkbox>;

export const Overview = (args: typeof Checkbox) => (
  <Checkbox htmlFor="ids-checkbox" {...args} />
);

Overview.args = {
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
  <section className="isb-section__content">
    <Checkbox htmlFor="ids-checkbox-disabled" disabled>
      Label
    </Checkbox>

    <Checkbox htmlFor="ids-checkbox-active" checked disabled>
      Label
    </Checkbox>

    <Checkbox htmlFor="ids-checkbox-active" indeterminate disabled>
      Label
    </Checkbox>
  </section>
);
