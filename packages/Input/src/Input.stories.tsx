import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Search from '@igloo-ui/icons/dist/Search';
import Percentage from '@igloo-ui/icons/dist/Percentage';

import Input from './Input';

import Section from '@components/section';
import readme from '../README.md';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof Input>;

const inputPlacehoder = 'ex: Lorem ipsum dolor';

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  placeholder: inputPlacehoder,
};

export const Types = () => (
  <Section column>
    <Input type="text" placeholder="input type text" />
    <Input type="password" value="this is a good password!" />
    <Input type="number" value="0123456789" />
  </Section>
);

export const Sizes = () => (
  <Section column>
    <Input placeholder="Default" />
    <Input isCompact placeholder="Compact" />
  </Section>
);
export const States = () => (
  <Section column>
    <Input disabled placeholder="Disabled" />
    <Input className="focus" placeholder="Active / Focus" />
    <Input error placeholder="Error" />
  </Section>
);
export const WithPrefix = () => (
  <Section column>
    <Input prefixIcon={<Search />} placeholder="Default" />
    <Input
      prefixIcon={<Search size="small" />}
      isCompact
      placeholder="Compact"
    />
  </Section>
);
export const WithSuffix = () => (
  <Section column>
    <Input
      suffixIcon={<Percentage />}
      type="number"
      max="100"
      min="0"
      placeholder="Default"
    />
    <Input
      suffixIcon={<Percentage size="small" />}
      type="number"
      max="100"
      min="0"
      isCompact
      placeholder="Compact"
    />
  </Section>
);
