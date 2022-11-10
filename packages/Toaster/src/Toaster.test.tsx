/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import Toaster from './Toaster';
import Toast from './Toast';

describe('Toast', () => {
  test('It should render without error and a snapshot', () => {
    const { asFragment } = render(
      <Toast message="Successfully toasted!" dataTest="successToast" />
    );
    expect(screen.getByTestId('successToast')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render error toast', () => {
    const { getByText } = render(
      <Toast error message="This didn't work!" dataTest="errorToast" />
    );
    const toast = getByText("This didn't work!");
    expect(toast).toHaveClass('ids-toast--error');
  });

  test('it should render multiple toast', () => {
    const toastsList = [
      {
        id: '1',
        status: 'success' as 'success',
        isOpen: true,
        message: 'Success',
      },
      {
        id: '2',
        status: 'error' as 'error',
        isOpen: true,
        message: 'Error',
      },
    ];
    const { getByText } = render(<Toaster toasts={toastsList} />);
    expect(getByText('Success')).toBeInTheDocument();
    expect(getByText('Error')).toBeInTheDocument();
  });
});
