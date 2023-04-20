import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import readme from '../README.md';

import Ellipsis from './Ellipsis';

const ellipsisContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum ex vel felis commodo auctor. Nulla pulvinar velit eget scelerisque mattis. Curabitur augue leo, gravida non quam at, viverra varius metus. Mauris convallis, justo et fringilla rhoncus, nisi est tristique dui, ac consequat mauris erat sed lacus. Pellentesque interdum vel nibh non mattis. Donec vitae nulla massa. Vestibulum facilisis, lorem in egestas interdum, nibh ligula gravida nisl, nec interdum massa orci sit amet nisi. Sed fringilla vestibulum metus id auctor. Ut mollis auctor odio, eu consequat dui bibendum vitae. Sed aliquet luctus vestibulum.';

export default {
  title: 'Components/Ellipsis',
  component: Ellipsis,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  decorators: [
    (Story) => <span style={{ fontSize: '1.6rem' }}>{Story()}</span>,
  ],
} as Meta<typeof Ellipsis>;

export const Overview = {
  args: {
    children: ellipsisContent,
  },
};

export const WithTitle = () => (
  <Ellipsis title="This is a title">{ellipsisContent}</Ellipsis>
);
