/**
 * @jest-environment jsdom
 */
import React from 'react';
import { act, render } from '@testing-library/react';

import Radio from './Radio';
import userEvent from '@testing-library/user-event';

describe('Radio', () => {
  it('should render without error', () => {
    const { getByText } = render(<Radio htmlFor="radio-test">Label</Radio>);

    expect(getByText('Label')).toBeInTheDocument();
  });

  it('should render without label', () => {
    render(<Radio htmlFor="radio-test" />);
    const label = document.getElementsByTagName('label');

    expect(label.length).toBe(0);
  });

  it('should render a checked state', () => {
    const { getByRole } = render(
      <Radio htmlFor="radio-test-2" checked onChange={() => {}}>
        Label
      </Radio>
    );
    const radio = getByRole('radio');

    expect(radio).toBeChecked();
  });

  it('should render a disabled state', () => {
    const { getByRole } = render(
      <Radio htmlFor="radio-test-3" disabled>
        Label
      </Radio>
    );
    const radio = getByRole('radio');

    expect(radio).toBeDisabled();
  });

  describe('when clicked', () => {
    it('should call onChange', () => {
      const mockOnChange = jest.fn();
      const { getByRole } = render(
        <Radio htmlFor="radio-test-4" onChange={mockOnChange}>
          Label
        </Radio>
      );
      const radio = getByRole('radio');

      act(() => {
        userEvent.click(radio);
      });

      expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    describe('when disabled', () => {
      it('should not call onChange', () => {
        const mockOnChange = jest.fn();
        const { getByRole } = render(
          <Radio htmlFor="radio-test-4" onChange={mockOnChange} disabled>
            Label
          </Radio>
        );
        const radio = getByRole('radio');

        act(() => {
          userEvent.click(radio);
        });

        expect(mockOnChange).toHaveBeenCalledTimes(0);
      });
    });
  });
});
