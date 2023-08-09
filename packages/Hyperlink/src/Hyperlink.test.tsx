/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';

import Plus from '@igloo-ui/icons/dist/Plus';

import axe from '../../../axe-helper.js';

import Hyperlink from './Hyperlink';
import { userEvent } from '@storybook/testing-library';

expect.extend(toHaveNoViolations);

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

  test('It should have no accessibility violations', async () => {
    const { container } = setUp();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('It should have appropriate ARIA attributes', () => {
    const { getByTestId } = setUp({
      'aria-label': 'Click here for more information',
    });

    const link = getByTestId('ids-link');

    expect(link).toHaveAttribute('role', 'link');
    expect(link).toHaveAttribute(
      'aria-label',
      'Click here for more information'
    );
  });

  test('It should be able to navigate to and focus on an element using the keyboard', async () => {
    const { getByRole } = setUp();
    const link = getByRole('link');

    expect(link).not.toHaveFocus();
    await userEvent.tab();
    expect(link).toHaveFocus();
  });
});
