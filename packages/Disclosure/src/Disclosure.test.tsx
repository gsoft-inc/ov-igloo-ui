/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Substract from '@igloo-ui/icons/dist/Substract';

import Disclosure from './Disclosure';

const setup = (props = {}) => {
  return render(
    <Disclosure
      title="Diversity"
      icon={<Substract size="large" className="ids-disclosure__icon" />}
      description="0.8pt in the last 30 days"
      dataTest="ids-disclosure"
      {...props}
    >
      Our organization values diversity.
    </Disclosure>
  );
};

describe('Disclosure', () => {
  test('It should render without errors', () => {
    setup();
    const wrapper = screen.getByTestId('ids-disclosure');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should be expanded by default', () => {
    const { container } = setup({ isExpanded: true });
    const button = screen.getByRole('button');
    const content = container.querySelector('.ids-disclosure__content');
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(content).toBeInTheDocument();
  });

  test('It should be expanded on button click', () => {
    const { container } = setup();
    const button = screen.getByRole('button');

    fireEvent.click(button);

    const content = container.querySelector('.ids-disclosure__content');

    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(content).toBeInTheDocument();
  });

  test('Check if props are displayed', () => {
    const { container } = setup({ isExpanded: true });
    const title = screen.getByText('Diversity');
    const desc = screen.getByText('0.8pt in the last 30 days');
    const icon = container.querySelector('.ids-disclosure__icon');
    expect(title).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
