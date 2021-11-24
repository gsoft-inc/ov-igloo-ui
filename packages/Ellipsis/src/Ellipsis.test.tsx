/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Ellipsis from './Ellipsis';

const setUp = (props = {}) => {
  const component = shallow(
    <Ellipsis {...props}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
      vestibulum ex vel felis commodo auctor. Nulla pulvinar velit eget
      scelerisque mattis. Curabitur augue leo, gravida non quam at, viverra
      varius metus. Mauris convallis, justo et fringilla rhoncus, nisi est
      tristique dui, ac consequat mauris erat sed lacus. Pellentesque interdum
      vel nibh non mattis. Donec vitae nulla massa. Vestibulum facilisis, lorem
      in egestas interdum, nibh ligula gravida nisl, nec interdum massa orci sit
      amet nisi. Sed fringilla vestibulum metus id auctor. Ut mollis auctor
      odio, eu consequat dui bibendum vitae. Sed aliquet luctus vestibulum.
    </Ellipsis>
  );
  return component;
};

describe('Ellipsis', () => {
  test('It should render without errors', () => {
    const ellipsis = setUp();
    const wrapper = ellipsis.find('.ids-ellipsis');
    expect(wrapper.length).toBe(1);
  });

  test('It should render standard', () => {
    const ellipsis = setUp();
    expect(ellipsis).toMatchSnapshot();
  });

  test('It should render with a title', () => {
    const ellipsis = setUp({ title: 'This is a title' });
    expect(ellipsis).toMatchSnapshot();
  });
});
