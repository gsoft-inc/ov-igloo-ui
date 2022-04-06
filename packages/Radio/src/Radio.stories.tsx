import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import useState from 'storybook-addon-state';

import Section from '@components/section';
import readme from '../README.md';

import Radio from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    description: readme,
  },
  argTypes: {
    disabled: { table: { defaultValue: { summary: false } } },
    checked: { table: { defaultValue: { summary: false } } },
    small: { table: { defaultValue: { summary: false } } },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  const [active, setActive] = useState('default', false);
  return (
    <Radio {...args} onChange={() => setActive(!active)} checked={active} />
  );
};

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

export const WithHelperText: React.VFC<unknown> = () => (
  <Radio htmlFor="ids-radio-description" helperText="Helper text">
    Label
  </Radio>
);

export const Group: React.VFC<unknown> = () => {
  const [selected, setSelected] = useState('default', '');
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
