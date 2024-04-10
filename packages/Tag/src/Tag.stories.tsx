import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Tag from './Tag';
import LabelSolid from '@igloo-ui/icons/dist/LabelSolid';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
      }
    }
  },
  argTypes: {
    size: {
      options: ['medium', 'small', 'xsmall', 'micro'],
    },
    icon: { control: { type: null } },
    appearance: {
      table: {
        type: {
          summary:
            'default | primary | inactive | progress | positive | caution | negative | option1 | option2 | option3 | option4 | option5 | option6 | neutral | select',
        },
      },
      options: [
        'default',
        'primary',
        'inactive',
        'progress',
        'positive',
        'caution',
        'negative',
        'option1',
        'option2',
        'option3',
        'option4',
        'option5',
        'option6',
        'neutral',
        'select'
      ],
    },
  },
} as Meta<typeof Tag>;

export const Overview = {
  args: {
    children: 'Tag content',
    dismissible: true,
    color: '#FCD35A',
    appearance: 'default',
  },
};

export const Appearances = () => (
  <Section style={{ flexWrap: 'wrap', gap: 'var(--space-3) 0' }}>
    <Tag appearance="default">Default Tag</Tag>
    <Tag appearance="progress">Progress Tag</Tag>
    <Tag appearance="inactive">Inactive Tag</Tag>
    <Tag appearance="positive">Positive Tag</Tag>
    <Tag appearance="caution">Caution Tag</Tag>
    <Tag appearance="negative">Negative Tag</Tag>
    <Tag appearance="option1">Option 1 Tag</Tag>
    <Tag appearance="option2">Option 2 Tag</Tag>
    <Tag appearance="option3">Option 3 Tag</Tag>
    <Tag appearance="option4">Option 4 Tag</Tag>
    <Tag appearance="option5">Option 5 Tag</Tag>
    <Tag appearance="option6">Option 6 Tag</Tag>
    <Tag appearance="primary">Primary Tag</Tag>
    <Tag appearance="neutral">Neutral Tag</Tag>
    <Tag appearance="select" color="#9A3842" dismissible>Select Tag</Tag>
  </Section>
);

export const Dismissible = () => (
  <Section>
    <Tag dismissible>
      Dismissible Tag
    </Tag>
  </Section>
);

export const Disabled = () => (
    <Section style={{ flexWrap: 'wrap', gap: 'var(--space-3) 0' }}>
        <Tag disabled>Default Tag</Tag>
        <Tag disabled appearance="progress">Progress Tag</Tag>
        <Tag disabled appearance="inactive">Inactive Tag</Tag>
        <Tag disabled appearance="positive">Positive Tag</Tag>
        <Tag disabled appearance="caution">Caution Tag</Tag>
        <Tag disabled appearance="negative">Negative Tag</Tag>
        <Tag disabled appearance="option1">Option 1 Tag</Tag>
        <Tag disabled appearance="option2">Option 2 Tag</Tag>
        <Tag disabled appearance="option3">Option 3 Tag</Tag>
        <Tag disabled appearance="option4">Option 4 Tag</Tag>
        <Tag disabled appearance="option5">Option 5 Tag</Tag>
        <Tag disabled appearance="option6">Option 6 Tag</Tag>
        <Tag disabled appearance="primary">Primary Tag</Tag>
        <Tag disabled appearance="neutral">Neutral Tag</Tag>
        <Tag disabled appearance="select" color="#9A3842" dismissible>Select Tag</Tag>
        <Tag disabled icon={<LabelSolid size="small" />}>Tag with Icon</Tag>
        <Tag
            disabled
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEB3tCC4oJsa4ZZsiEDIhWi06EyN3iHYMoOg&usqp=CAU"
        >
            Tag with an image icon
        </Tag>
    </Section>
);

export const Icons = () => (
  <Section
    style={{ alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-3) 0' }}
  >
    <Tag icon={<LabelSolid size="small" />}>Tag with Icon</Tag>
    <Tag color="#9A3842">
      Tag with a color icon from color
    </Tag>
    <Tag
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEB3tCC4oJsa4ZZsiEDIhWi06EyN3iHYMoOg&usqp=CAU"
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
  <Section column>
      <Section style={{ alignItems: 'center' }}>
        <Tag size="medium">Medium Tag</Tag>
        <Tag size="small">Small Tag</Tag>
        <Tag size="xsmall">Xsmall Tag</Tag>
        <Tag size="micro">Micro Tag</Tag>
      </Section>
      <Section style={{ alignItems: 'center' }}>
        <Tag appearance="progress" size="medium">Medium Tag</Tag>
        <Tag appearance="progress" size="small">Small Tag</Tag>
        <Tag appearance="progress" size="xsmall">Xsmall Tag</Tag>
        <Tag appearance="progress" size="micro">Micro Tag</Tag>
      </Section>
      <Section style={{ alignItems: 'center' }}>
        <Tag appearance="select" color="#9A3842" dismissible size="medium">Medium Tag</Tag>
        <Tag appearance="select" color="#9A3842" dismissible size="small">Small Tag</Tag>
        <Tag appearance="select" color="#9A3842" dismissible size="xsmall">Xsmall Tag</Tag>
        <Tag appearance="select" color="#9A3842" dismissible size="micro">Micro Tag</Tag>
      </Section>
  </Section>
);

export const Ellipsis = () => (
  <Section>
    <Tag color="#00A587" appearance="neutral">
      Really long text so that the ellipsis will show
    </Tag>
  </Section>
);

export const Error = () => (
  <Section>
    <Tag color="#00A587" hasError>
      Really long text so that the ellipsis will show
    </Tag>
    <Tag appearance="select" color="#9A3842" dismissible hasError>Select Tag</Tag>
  </Section>
);
