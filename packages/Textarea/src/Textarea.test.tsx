/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Textarea from './Textarea';

const setUp = (props = {}) => {
  return render(<Textarea dataTest="ids-textarea" {...props} />);
};

describe('Textarea', () => {
  test('It should render without errors', () => {
    setUp();
    const textarea = screen.getByTestId('ids-textarea');
    expect(textarea).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render disabled', (): void => {
    const { container } = setUp({ disabled: true });
    const textareaField = container.querySelector('.ids-textarea__field');
    expect(textareaField).toHaveClass('ids-textarea__field--disabled');
  });

  test('It should render an error look', (): void => {
    const { container } = setUp({ error: true });
    const textareaField = container.querySelector('.ids-textarea__field');
    expect(textareaField).toHaveClass('ids-textarea__field--error');
  });

  test('It should render a character count', (): void => {
    const { container } = setUp({
      showCharactersIndicator: true,
      maxLength: 100,
    });
    const charIndicator = container.querySelector(
      '.ids-textarea__char-indicator'
    );
    expect(charIndicator).toBeInTheDocument();
  });

  test('It should not render a character count without max length', (): void => {
    const { container } = setUp({ showCharactersIndicator: true });
    const charIndicator = container.querySelector(
      '.ids-textarea__char-indicator'
    );
    expect(charIndicator).not.toBeInTheDocument();
  });

  test('It should call the onChange function', () => {
    let changed = false;
    const event = {
      target: { name: 'textareaname', value: 'value of the textarea' },
    };
    const props = {
      onChange: () => {
        changed = true;
      },
    };
    const { container } = setUp(props);
    const textareaField = container.querySelector('.ids-textarea__field');

    if (textareaField) {
      fireEvent.change(textareaField, event);
    }
    expect(changed).toBeTruthy();
  });
});
