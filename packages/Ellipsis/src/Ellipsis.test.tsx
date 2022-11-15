/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Ellipsis, { EllipsisProps } from './Ellipsis';

const defaultProps = {
  children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
  vestibulum ex vel felis commodo auctor. Nulla pulvinar velit eget
  scelerisque mattis. Curabitur augue leo, gravida non quam at, viverra
  varius metus. Mauris convallis, justo et fringilla rhoncus, nisi est
  tristique dui, ac consequat mauris erat sed lacus. Pellentesque interdum
  vel nibh non mattis. Donec vitae nulla massa. Vestibulum facilisis, lorem
  in egestas interdum, nibh ligula gravida nisl, nec interdum massa orci sit
  amet nisi. Sed fringilla vestibulum metus id auctor. Ut mollis auctor
  odio, eu consequat dui bibendum vitae. Sed aliquet luctus vestibulum.`,
};

const setUp = (props: EllipsisProps = defaultProps) => {
  return render(<Ellipsis {...props} />);
};

describe('Ellipsis', () => {
  test('It should render without errors', () => {
    setUp({ ...defaultProps, dataTest: 'ellipsis1' });
    const wrapper = screen.getByTestId('ellipsis1');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render standard', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render with a title', () => {
    const { asFragment } = setUp({ ...defaultProps, title: 'This is a title' });
    expect(asFragment()).toMatchSnapshot();
  });
});
