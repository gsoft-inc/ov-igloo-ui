import React from 'react';

import { Meta } from '@storybook/react';

import Ellipsis from './Ellipsis';

export default {
  title: 'Components/Ellipsis',
  component: Ellipsis,
} as Meta;

export const Standard: React.VFC<unknown> = () => (
  <Ellipsis>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum
    ex vel felis commodo auctor. Nulla pulvinar velit eget scelerisque mattis.
    Curabitur augue leo, gravida non quam at, viverra varius metus. Mauris
    convallis, justo et fringilla rhoncus, nisi est tristique dui, ac consequat
    mauris erat sed lacus. Pellentesque interdum vel nibh non mattis. Donec
    vitae nulla massa. Vestibulum facilisis, lorem in egestas interdum, nibh
    ligula gravida nisl, nec interdum massa orci sit amet nisi. Sed fringilla
    vestibulum metus id auctor. Ut mollis auctor odio, eu consequat dui bibendum
    vitae. Sed aliquet luctus vestibulum.
  </Ellipsis>
);
