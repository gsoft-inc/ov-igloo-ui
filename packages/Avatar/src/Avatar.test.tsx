/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';

import axe from '../../../axe-helper.js';

import Avatar, { Size } from './Avatar';

const setup = (props = {}) => {
  return render(
    <Avatar
      dataTest="ids-avatar"
      src="https://cdn-icons-png.flaticon.com/512/168/168724.png"
      {...props}
    />
  );
};

expect.extend(toHaveNoViolations);

describe('Avatar', () => {
  const expectToBeOfSize = (component: RenderResult, size: Size) => {
    const avatar = component.container.firstChild;
    const expectedClass = 'ids-avatar--' + size;
    expect(avatar).toHaveClass(expectedClass);
  };

  test('It should render without errors', () => {
    setup();
    const wrapper = screen.getByTestId('ids-avatar');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a xsmall avatar', () => {
    const avatar = setup({ size: 'xsmall' });

    expectToBeOfSize(avatar, 'xsmall');
  });

  test('It should render a small avatar', () => {
    const avatar = setup({ size: 'small' });

    expectToBeOfSize(avatar, 'small');
  });

  test('It should render a medium avatar', () => {
    const avatar = setup({ size: 'medium' });

    expectToBeOfSize(avatar, 'medium');
  });

  test('It should render a large avatar', () => {
    const avatar = setup({ size: 'large' });

    expectToBeOfSize(avatar, 'large');
  });

  test('It should render a xlarge avatar', () => {
    const avatar = setup({ size: 'xlarge' });

    expectToBeOfSize(avatar, 'xlarge');
  });

  test('It should have no accessibility violations', async () => {
    const { container } = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
