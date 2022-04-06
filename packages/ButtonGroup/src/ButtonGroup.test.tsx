/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import ButtonGroup, { ButtonItem } from './ButtonGroup';

describe('ButtonGroup', () => {
  const { getByTestId } = render(
    <ButtonGroup dataTest="button-group">
      <ButtonItem active dataTest="button-group-1">
        Label 1
      </ButtonItem>
      <ButtonItem dataTest="button-group-2">Label 2</ButtonItem>
    </ButtonGroup>
  );

  test('It should render without errors', () => {
    expect(getByTestId('button-group')).toBeInTheDocument();
  });

  test('It should render active button item', (): void => {
    render(
      <ButtonGroup dataTest="button-group">
        <ButtonItem active dataTest="button-group-1">
          Label 1
        </ButtonItem>
        <ButtonItem dataTest="button-group-2">Label 2</ButtonItem>
      </ButtonGroup>
    );

    const activeItem = screen.getByTestId('button-group-1');
    expect(activeItem.classList.contains('is-selected')).toBe(true);
  });

  test('It should render a disabled state', () => {
    render(
      <ButtonGroup dataTest="button-group">
        <ButtonItem disabled dataTest="button-group-1">
          Label 1
        </ButtonItem>
        <ButtonItem dataTest="button-group-2">Label 2</ButtonItem>
      </ButtonGroup>
    );
    const disabledItem = screen.getByTestId('button-group-1');
    expect(disabledItem.classList.contains('is-disabled')).toBe(true);
  });
});
