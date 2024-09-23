/**
 * @jest-environment jsdom
 */
import React from 'react';

import { render, screen } from '@testing-library/react';
import Plus from '@igloo-ui/icons/dist/Plus';

import IconButton from './IconButton';

const setUp = (props = {}) => {
    return render(
    <IconButton
      icon={<Plus size="small" />}
      dataTest="ids-icon-btn"
      {...props}
    />
  );
};

describe('IconButton Component', (): void => {
  test('It should render without errors', (): void => {
    setUp();
    const wrapper = screen.getByTestId('ids-icon-btn');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render with xsmall size class', (): void => {
    setUp({ size: 'xsmall' });
    const wrapper = screen.getByTestId('ids-icon-btn');
    expect(wrapper).toHaveClass('ids-icon-btn--xsmall');
  });

  test('It should render with small size class', (): void => {
    setUp({ size: 'small' });
    const wrapper = screen.getByTestId('ids-icon-btn');
    expect(wrapper).toHaveClass('ids-icon-btn--small');
  });

  test('It should render with large size class', (): void => {
    setUp({ size: 'large' });
    const wrapper = screen.getByTestId('ids-icon-btn');
    expect(wrapper).toHaveClass('ids-icon-btn--large');
  });

  test('It should render a button with icon', (): void => {
    const { container } = setUp();
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

  test('It should render a default theme', (): void => {
    const { asFragment } = setUp({ theme: 'default' });
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a round theme', (): void => {
    const { asFragment } = setUp({ theme: 'round' });
    expect(asFragment()).toMatchSnapshot();
  });
});
