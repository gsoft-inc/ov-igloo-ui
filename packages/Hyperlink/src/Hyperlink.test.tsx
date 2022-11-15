/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Plus from '@igloo-ui/icons/dist/Plus';

import Hyperlink from './Hyperlink';

const setUp = (props = {}) => {
  return render(
    <Hyperlink dataTest="ids-link" {...props}>
      Click me
    </Hyperlink>
  );
};

describe('Hyperlink Component', () => {
  test('It should render without errors', () => {
    setUp();
    const wrapper = screen.getByTestId('ids-link');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a hyperlink with icon', (): void => {
    const { container } = setUp({
      iconLeading: <Plus size="small" />,
    });
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  test('It should render a primary appearance', (): void => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a secondary appearance', (): void => {
    const { asFragment } = setUp({ appearance: 'secondary' });
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a premium appearance', (): void => {
    const { asFragment } = setUp({ appearance: 'premium' });
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a danger appearance', (): void => {
    const { asFragment } = setUp({ appearance: 'danger' });
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a ghost appearance', (): void => {
    const { asFragment } = setUp({ appearance: 'ghost' });
    expect(asFragment()).toMatchSnapshot();
  });
});
