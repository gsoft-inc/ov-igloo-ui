/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Popover, { PopoverProps } from './Popover';

const setUp = (props: PopoverProps) => {
  return render(<Popover {...props}>popover trigger</Popover>);
};

describe('Popover', () => {
  let component: any;
  const defaultComponentSetUp = {
    children: 'trigger',
    content: 'Popover copy',
    dataTest: 'ids-popover-id',
  };

  test('It should render a snapshot', (): void => {
    component = setUp(defaultComponentSetUp);
    expect(component).toMatchSnapshot();
  });

  test('It should render without errors', (): void => {
    const { getByTestId } = setUp(defaultComponentSetUp);

    fireEvent.click(screen.getByText(/trigger/));
    expect(getByTestId('ids-popover-id')).toBeInTheDocument();
  });

  test('It should render a title', (): void => {
    component = setUp({ ...defaultComponentSetUp, title: 'Date' });
    const { getByText } = component;

    fireEvent.click(screen.getByText(/trigger/));
    expect(getByText(/Date/)).toBeInTheDocument();
  });

  test('It should render a action', (): void => {
    component = setUp({
      ...defaultComponentSetUp,
      action: 'learn more',
    });
    const { getByText } = component;

    fireEvent.click(screen.getByText(/trigger/));
    expect(getByText(/learn more/)).toBeInTheDocument();
  });
});
