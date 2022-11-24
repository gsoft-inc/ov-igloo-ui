import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Avatar from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    description: readme,
  },
  args: {
    size: 'medium',
  },
  argTypes: {
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEB3tCC4oJsa4ZZsiEDIhWi06EyN3iHYMoOg&usqp=CAU',
};

export const Sizes = () => (
  <Section>
    <Avatar
      size="xsmall"
      src="https://cdn-icons-png.flaticon.com/512/168/168724.png"
    />
    <Avatar
      size="small"
      src="https://cdn-icons-png.flaticon.com/512/168/168724.png"
    />
    <Avatar
      size="medium"
      src="https://cdn-icons-png.flaticon.com/512/168/168724.png"
    />
    <Avatar
      size="large"
      src="https://cdn-icons-png.flaticon.com/512/168/168724.png"
    />
    <Avatar
      size="xlarge"
      src="https://cdn-icons-png.flaticon.com/512/168/168724.png"
    />
  </Section>
);
