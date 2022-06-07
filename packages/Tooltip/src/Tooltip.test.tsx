/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent, screen } from '@testing-library/react';

import Tooltip, { TooltipProps } from './Tooltip';

const setUp = (props: TooltipProps) => {
  return shallow(<Tooltip {...props}>tooltip</Tooltip>);
};

describe('Tooltip', () => {
  let component: any;
  beforeEach(() => {
    component = setUp({ children: 'children' });
  });

  test('It should render without errors', (): void => {
    const container = component.find('.ids-tooltip');
    expect(container.length).toBe(1);
  });

  test('It should render a snapshot', (): void => {
    expect(component).toMatchSnapshot();
  });

  test('It should show the tooltip', async () => {
    const { getByTestId } = render(
      <Tooltip content="Tooltip content" position="top" dataTest="tooltip-id">
        Tooltip trigger
      </Tooltip>
    );

    fireEvent.mouseEnter(screen.getByText(/Tooltip content/));
    expect(getByTestId('tooltip-id')).toBeInTheDocument();
  });

  test('It should render using light theme', (): void => {
    const tooltip = setUp({ appearance: 'light', children: 'children' });
    const bubble = tooltip.find('.ids-tooltip--light');

    expect(bubble.length).toBe(1);
  });

  test('It should render using dark theme', (): void => {
    const tooltip = setUp({ appearance: 'dark', children: 'children' });
    const bubble = tooltip.find('.ids-tooltip--light');

    expect(bubble.length).toBe(0);
  });
});
