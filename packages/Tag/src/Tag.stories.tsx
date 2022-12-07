import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Tag from './Tag';
import LabelSolid from '@igloo-ui/icons/dist/LabelSolid';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    description: readme,
  },
  argTypes: {
    size: {
      options: ['medium', 'small', 'xsmall', 'micro'],
    },
    icon: { control: { type: null } },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  children: 'Tag content',
  dismissible: true,
  color: '#FCD35A',
  appearance: 'secondary',
};

export const Appearances = () => (
  <Section style={{ flexWrap: 'wrap', gap: 'var(--space-3) 0' }}>
    <Tag appearance="default">Default Tag</Tag>
    <Tag appearance="info">Info Tag</Tag>
    <Tag appearance="success">Success Tag</Tag>
    <Tag appearance="warning">Warning Tag</Tag>
    <Tag appearance="error">Error Tag</Tag>
    <Tag appearance="primary">Primary Tag</Tag>
    <Tag appearance="secondary">Secondary Tag</Tag>
    <Tag appearance="grey">Grey Tag</Tag>
  </Section>
);

export const Dismissible = () => (
  <Section>
    <Tag appearance="secondary" dismissible>
      Dismissible Tag
    </Tag>
  </Section>
);

export const Icons = () => (
  <Section
    style={{ alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-3) 0' }}
  >
    <Tag icon={<LabelSolid size="small" />}>Tag with Icon</Tag>
    <Tag color="#9A3842" appearance="secondary">
      Tag with a color icon from color
    </Tag>
    <Tag
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEB3tCC4oJsa4ZZsiEDIhWi06EyN3iHYMoOg&usqp=CAU"
      appearance="secondary"
    >
      Tag with an image icon
    </Tag>
  </Section>
);

export const Rounded = () => (
  <Section style={{ alignItems: 'center' }}>
    <Tag rounded>Rounded Tag</Tag>
    <Tag rounded size="small">
      Rounded Small Tag
    </Tag>
  </Section>
);

export const Sizes = () => (
  <Section style={{ alignItems: 'center' }}>
    <Tag size="medium">Medium Tag</Tag>
    <Tag size="small">Small Tag</Tag>
    <Tag size="xsmall">Xsmall Tag</Tag>
    <Tag size="micro">Micro Tag</Tag>
  </Section>
);

export const Ellipsis = () => (
  <Section>
    <Tag color="#00A587" appearance="secondary">
      Really long text so that the ellipsis will show
    </Tag>
  </Section>
);

export const Error = () => (
  <Section>
    <Tag color="#00A587" appearance="secondary" hasError>
      Really long text so that the ellipsis will show
    </Tag>
  </Section>
);
