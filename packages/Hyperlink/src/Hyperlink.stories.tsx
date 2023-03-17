import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import readme from '../README.md';

import Hyperlink from './Hyperlink';
import Plus from '@igloo-ui/icons/dist/Plus';

import Section from '@components/section';

export default {
  title: 'Components/Hyperlink',
  component: Hyperlink,
  parameters: {
    description: readme,
    controls: {
      exclude: ['onClick'],
    },
    docs: {
      source: {
        type: 'auto',
      },
    },
  },
  argTypes: {
    onClick: {
      action: 'dynamic',
    },
  },
} as ComponentMeta<typeof Hyperlink>;

const Template: ComponentStory<typeof Hyperlink> = (args) => (
  <Hyperlink {...args} />
);

export const Overview = Template.bind({});
Overview.args = {
  children: <a href="#">Read more</a>,
};

export const Appearances: React.VFC = () => (
  <Section>
    <Hyperlink appearance="primary">
      <a href="#">Primary</a>
    </Hyperlink>
    <Hyperlink appearance="secondary">
      <a href="#">Secondary</a>
    </Hyperlink>
    <Hyperlink appearance="danger">
      <a href="#">Danger</a>
    </Hyperlink>
  </Section>
);

export const Underline: React.VFC = () => (
  <Section>
    <Hyperlink underline appearance="primary">
      <a href="#">Primary</a>
    </Hyperlink>
    <Hyperlink underline appearance="secondary">
      <a href="#">Secondary</a>
    </Hyperlink>
    <Hyperlink underline appearance="danger">
      <a href="#">Danger</a>
    </Hyperlink>
  </Section>
);

export const Sizes: React.VFC = () => (
  <Section>
    <Hyperlink size="medium">
      <a href="#">Medium</a>
    </Hyperlink>
    <Hyperlink size="small">
      <a href="#">Small</a>
    </Hyperlink>
    <Hyperlink size="xsmall">
      <a href="#">caption</a>
    </Hyperlink>
  </Section>
);

export const Icons: React.VFC = () => (
  <Section>
    <Hyperlink iconLeading={<Plus size="small" />}>
      <a href="#">Left icon</a>
    </Hyperlink>

    <Hyperlink iconTrailing={<Plus size="small" />}>
      <a href="#">Right icon</a>
    </Hyperlink>
  </Section>
);
