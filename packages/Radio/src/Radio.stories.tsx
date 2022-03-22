import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Radio from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  htmlFor: 'ids-radio',
  children: 'Label',
};

export const Checked: React.VFC<unknown> = () => (
  <Radio htmlFor="ids-radio-active" checked>
    Label
  </Radio>
);

export const Disabled: React.VFC<unknown> = () => (
  <Section>
    <Radio htmlFor="ids-radio-disabled" disabled>
      Disabled
    </Radio>
    <Radio htmlFor="ids-radio-disabled-active" checked disabled>
      Checked and disabled
    </Radio>
  </Section>
);

export const Small: React.VFC<unknown> = () => (
  <Radio htmlFor="ids-radio-small" small>
    Small
  </Radio>
);

export const WithDescription: React.VFC<unknown> = () => (
  <Radio htmlFor="ids-radio-description" description="Description">
    Small
  </Radio>
);
