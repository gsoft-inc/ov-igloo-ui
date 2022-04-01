/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import ButtonGroup, { Item } from './ButtonGroup';
import { debug } from 'console';

describe('ButtonGroup', () => {
  const { getByTestId } = render(
    <ButtonGroup dataTest="button-group">
      <Item active dataTest="button-group-1">
        Label 1
      </Item>
      <Item dataTest="button-group-2">Label 2</Item>
    </ButtonGroup>
  );

  test('It should render without errors', () => {
    expect(getByTestId('button-group')).toBeInTheDocument();
  });

  test('It should render active item', (): void => {
    render(
      <ButtonGroup dataTest="button-group">
        <Item active dataTest="button-group-1">
          Label 1
        </Item>
        <Item dataTest="button-group-2">Label 2</Item>
      </ButtonGroup>
    );

    const activeItem = screen.getByTestId('button-group-1');
    expect(activeItem.classList.contains('is-selected')).toBe(true);
  });

  test('It should render a disabled state', () => {
    render(
      <ButtonGroup dataTest="button-group">
        <Item disabled dataTest="button-group-1">
          Label 1
        </Item>
        <Item dataTest="button-group-2">Label 2</Item>
      </ButtonGroup>
    );
    const disabledItem = screen.getByTestId('button-group-1');
    expect(disabledItem.classList.contains('is-disabled')).toBe(true);
  });
});
