import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Kashim from './Kashim';

export default {
  title: 'Components/Kashim',
  component: Kashim,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof Kashim>;

const Template: ComponentStory<typeof Kashim> = (args) => <Kashim {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  children: 'Dummy starter component',
};

// export const Appearances = () => (
//   <Section>
//     ...
//   </Section>
// );

// export const Sizes = () => (
//   <Section>
//     ...
//   </Section>
// );

// export const State = () => (
//   <Section>
//     ...
//   </Section>
// );
