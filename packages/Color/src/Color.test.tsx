/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';

import Color, { Size } from './Color';

const setup = (props = {}) => {
  return render(<Color dataTest="ids-color" {...props} />);
};

describe('Color', () => {
  const expectToBeOfSize = (component: RenderResult, size: Size) => {
    const color = component.container.firstChild;
    const expectedClass = 'ids-color--' + size;
    expect(color).toHaveClass(expectedClass);
  };

  test('It should render without errors', () => {
    setup();
    const wrapper = screen.getByTestId('ids-color');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a small color', () => {
    const color = setup({ size: 'small' });

    expectToBeOfSize(color, 'small');
  });

  test('It should render a medium color', () => {
    const color = setup({ size: 'medium' });

    expectToBeOfSize(color, 'medium');
  });

  test('It should render a large color', () => {
    const color = setup({ size: 'large' });

    expectToBeOfSize(color, 'large');
  });

  test('It should render a xlarge color', () => {
    const color = setup({ size: 'xlarge' });

    expectToBeOfSize(color, 'xlarge');
  });
});
