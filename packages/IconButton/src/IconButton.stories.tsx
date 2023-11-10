import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import IconButton from './IconButton';

import Plus from '@igloo-ui/icons/dist/Plus';
import Settings from '@igloo-ui/icons/dist/Settings';

import Section from '@components/section';
import readme from '../README.md';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
      }
    },
    controls: {
      exclude: [
        'iconTrailing',
        'iconLeading',
        'showOnlyIconOnMobile',
        'underline',
      ],
    },
  },
  argTypes: {
    size: {
      options: ['xsmall', 'small', 'medium', 'large'],
    },
    appearance: {
      description: 'Button appearance',
      table: {
        defaultValue: { summary: 'primary' },
        type: {
          summary:
            ' "primary" | "secondary" | "premium" | "ghost" | "danger" | { type: "ghost", variant?: "secondary"} | { type: "ghost", variant?: "danger"} ',
        },
      },
      control: {
        type: 'radio',
      },
      options: [
        'primary',
        'secondary',
        'premium',
        'ghost',
        'danger',
        'ghostSecondary',
        'ghostDanger',
      ],
      mapping: {
        ghostSecondary: { type: 'ghost', variant: 'secondary' },
        ghostDanger: { type: 'ghost', variant: 'danger' },
      },
    },
    icon: { control: { type: null } },
  },
} as Meta<typeof IconButton>;

export const Overview = {
  args: {
    icon: <Plus />,
  },
};

export const Appearances = () => (
  <Section>
    <IconButton appearance="primary" icon={<Plus size="small" />} />
    <IconButton appearance="secondary" icon={<Plus size="small" />} />
    <IconButton appearance="premium" icon={<Plus size="small" />} />
    <IconButton appearance="danger" icon={<Plus size="small" />} />
    <IconButton appearance="ghost" icon={<Plus size="small" />} />
    <IconButton
      appearance={{ type: 'ghost', variant: 'secondary' }}
      icon={<Plus size="small" />}
    />
    <IconButton
      appearance={{ type: 'ghost', variant: 'danger' }}
      icon={<Plus size="small" />}
    />
  </Section>
);

export const Rounded = () => (
  <Section>
    <IconButton rounded appearance="primary" icon={<Settings size="small" />} />
    <IconButton
      rounded
      appearance="secondary"
      icon={<Settings size="small" />}
    />
    <IconButton rounded appearance="premium" icon={<Settings size="small" />} />
    <IconButton rounded appearance="danger" icon={<Settings size="small" />} />
    <IconButton rounded appearance="ghost" icon={<Settings size="small" />} />
    <IconButton
      rounded
      appearance={{ type: 'ghost', variant: 'secondary' }}
      icon={<Settings size="small" />}
    />
    <IconButton
      rounded
      appearance={{ type: 'ghost', variant: 'danger' }}
      icon={<Settings size="small" />}
    />
  </Section>
);

export const Sizes = () => (
  <Section>
    <IconButton size="xsmall" icon={<Plus size="small" />} />
    <IconButton size="small" icon={<Plus size="small" />} />
    <IconButton size="medium" icon={<Plus size="small" />} />
    <IconButton size="large" icon={<Plus size="small" />} />
  </Section>
);

export const States = () => (
  <Section column>
    <Section>
      <IconButton appearance="secondary" icon={<Plus size="small" />} />
      <IconButton
        disabled
        appearance="secondary"
        icon={<Plus size="small" />}
      />
      <IconButton active appearance="secondary" icon={<Plus size="small" />} />
      <IconButton
        className="focus"
        appearance="secondary"
        icon={<Plus size="small" />}
      />
    </Section>

    <Section>
      <IconButton
        appearance={{ type: 'ghost', variant: 'secondary' }}
        icon={<Plus size="small" />}
      />
      <IconButton
        disabled
        appearance={{ type: 'ghost', variant: 'secondary' }}
        icon={<Plus size="small" />}
      />
      <IconButton
        active
        appearance={{ type: 'ghost', variant: 'secondary' }}
        icon={<Plus size="small" />}
      />
      <IconButton
        className="focus"
        appearance={{ type: 'ghost', variant: 'secondary' }}
        icon={<Plus size="small" />}
      />
    </Section>
  </Section>
);
