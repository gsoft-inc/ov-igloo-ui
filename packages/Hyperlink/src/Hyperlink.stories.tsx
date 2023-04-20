import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import readme from '../README.md';

import Hyperlink from './Hyperlink';
import Plus from '@igloo-ui/icons/dist/Plus';

import Section from '@components/section';

export default {
  title: 'Components/Hyperlink',
  component: Hyperlink,
  parameters: {
    controls: {
      exclude: ['onClick'],
    },
    docs: {
      source: {
        type: 'auto',
      },
      description: {
        component: readme,
      }
    },
  },
  argTypes: {
    onClick: {
      action: 'dynamic',
    },
  },
} as Meta<typeof Hyperlink>;

export const Overview = {
  args: {
    children: <a href="#">Read more</a>,
  },
};


type Story = StoryObj<typeof Hyperlink>;

export const Appearances: React.FC = () => (
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

export const Underline: React.FC = () => (
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

export const Sizes: React.FC = () => (
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

export const Icons: React.FC = () => (
  <Section>
    <Hyperlink iconLeading={<Plus size="small" />}>
      <a href="#">Left icon</a>
    </Hyperlink>

    <Hyperlink iconTrailing={<Plus size="small" />}>
      <a href="#">Right icon</a>
    </Hyperlink>
  </Section>
);

export const FocusInteraction: Story = {
  args: {
    children: <a href="#">Read more</a>,
  },

  play: async ({ canvasElement }) => {
    const body = canvasElement.ownerDocument.body;
    const canvas = within(body);
    const link = await canvas.findByText(/Read more/);

    userEvent.tab();

    await expect(link).toHaveFocus();
  },
};
