/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Tooltip, { TooltipProps } from './Tooltip';

const setUp = (props: TooltipProps) => {
  return render(<Tooltip {...props}>tooltip</Tooltip>);
};

describe('Tooltip', () => {
  let component: any;
  const defaultComponentSetup = {
    children: 'children',
    content: 'tooltip copy',
    dataTest: 'tooltip-id'
  };

  test('It should render a snapshot', (): void => {
    component = setUp(defaultComponentSetup);
    expect(component).toMatchSnapshot();
  });

  test('It should render without errors', async () => {
    component = setUp(defaultComponentSetup);
    const container = await screen.findByText(/tooltip/);

    expect(container).toHaveClass('ids-tooltip__container');
  });

  test('It should show the tooltip', async () => {
    const { getByTestId } = setUp(defaultComponentSetup);

    fireEvent.mouseEnter(screen.getByText(/tooltip/));
    expect(getByTestId('tooltip-id')).toBeInTheDocument();
  });

  test('It should render using light theme', async () => {
    component = setUp({ ...defaultComponentSetup, appearance: 'light' });
    const { getByText } = component;

    fireEvent.mouseEnter(screen.getByText(/tooltip/));
    expect(getByText(/tooltip copy/)).toHaveClass('ids-tooltip--light');
  });

  test('It should render using dark theme', (): void => {
    component = setUp({ ...defaultComponentSetup, appearance: 'dark' });
    const { getByText } = component;

    fireEvent.mouseEnter(screen.getByText(/tooltip/));
    expect(getByText(/tooltip copy/)).toHaveClass('ids-tooltip');
  });
});
