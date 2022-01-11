/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Tooltip, { TooltipProps } from './Tooltip';

const setUp = (props: TooltipProps) => {
  const component = shallow(<Tooltip {...props}>tooltip</Tooltip>);
  return component;
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

  test('It should render at Top', (): void => {
    const tooltip = setUp({ position: 'top', children: 'children' });
    const bubble = tooltip.find('.ids-tooltip--top');

    expect(bubble.length).toBe(1);
  });

  test('It should render at Right', (): void => {
    const tooltip = setUp({ position: 'right', children: 'children' });
    const bubble = tooltip.find('.ids-tooltip--right');

    expect(bubble.length).toBe(1);
  });

  test('It should render at Bottom', (): void => {
    const tooltip = setUp({ position: 'bottom', children: 'children' });
    const bubble = tooltip.find('.ids-tooltip--bottom');

    expect(bubble.length).toBe(1);
  });

  test('It should render at Left', (): void => {
    const tooltip = setUp({ position: 'left', children: 'children' });
    const bubble = tooltip.find('.ids-tooltip--left');

    expect(bubble.length).toBe(1);
  });

  test('It should render using light theme', (): void => {
    const tooltip = setUp({ appearance: 'light', children: 'children' });
    const bubble = tooltip.find('.ids-tooltip-dark');

    expect(bubble.length).toBe(0);
  });

  test('It should render using dark theme', (): void => {
    const tooltip = setUp({ appearance: 'dark', children: 'children' });
    const bubble = tooltip.find('.ids-tooltip-dark');

    expect(bubble.length).toBe(1);
  });
});
