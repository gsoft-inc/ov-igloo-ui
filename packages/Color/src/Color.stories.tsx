import React from 'react';

import { Meta } from '@storybook/react';

import variables from '@igloo-ui/tokens/dist/base10/tokens.json';
import Section from '@components/section';
import readme from '../README.md';

import Color from './Color';

export default {
  title: 'Components/Color',
  component: Color,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof Color>;

export const Overview = {
  args: {
    color: variables.sky100,
    size: 'large',
  },
};

export const Sizes = () => (
  <Section>
    <Color color={variables.coral800} size="small" />
    <Color color={variables.coral800} size="medium" />
    <Color color={variables.coral800} size="large" />
    <Color color={variables.coral800} size="xlarge" />
  </Section>
);

export const Initials = () => (
  <Section>
    <Color
      color={variables.coral200}
      textColor={variables.coral900}
      size="xlarge"
      name="Awesome Possum Team"
    />
  </Section>
);

export const CustomText = () => (
  <Section>
    <Color color={variables.electricBlue700} size="xlarge" name="VC" />
  </Section>
);
