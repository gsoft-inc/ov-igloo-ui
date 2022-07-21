/**
 * @jest-environment jsdom
 */
import React from 'react';
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Toggle from './Toggle';

describe('Toggle', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(
      <Toggle dataTest="toggle-1" htmlFor="toggle-1" />
    );

    expect(getByTestId('toggle-1')).toBeInTheDocument();
  });

  it('should render with label', () => {
    const { getByText } = render(
      <Toggle dataTest="toggle-2" htmlFor="toggle-2">
        Label
      </Toggle>
    );

    expect(getByText('Label')).toBeInTheDocument();
  });

  it('should render in a checked state', () => {
    const { getByTestId } = render(
      <Toggle
        dataTest="toggle-3"
        htmlFor="toggle-3"
        checked
        onChange={() => {}}
      />
    );

    expect(getByTestId('toggle-3')).toBeChecked();
  });

  it('should render in a disabled state', () => {
    const { getByTestId } = render(
      <Toggle dataTest="toggle-4" htmlFor="toggle-4" disabled />
    );

    expect(getByTestId('toggle-4')).toBeDisabled();
  });

  describe('when clicked', () => {
    it('should call onChange', () => {
      const mockOnChange = jest.fn();
      const { getByTestId } = render(
        <Toggle
          dataTest="toggle-5"
          htmlFor="toggle-5"
          onChange={mockOnChange}
        />
      );

      act(() => {
        userEvent.click(getByTestId('toggle-5'));
      });

      expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    describe('when disabled', () => {
      it('should not call onChange', () => {
        const mockOnChange = jest.fn();
        const { getByTestId } = render(
          <Toggle
            dataTest="toggle-5"
            htmlFor="toggle-5"
            onChange={mockOnChange}
            disabled
          />
        );

        act(() => {
          userEvent.click(getByTestId('toggle-5'));
        });

        expect(mockOnChange).toHaveBeenCalledTimes(0);
      });
    });
  });
});
