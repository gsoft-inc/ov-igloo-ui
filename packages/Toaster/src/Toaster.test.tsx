/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { Toast as HotToast } from 'react-hot-toast';

import Toaster, { toaster } from './Toaster';
import Toast from './Toast';

const mockToast = {
  createdAt: 1639075944871,
  visible: true,
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  },
  message: 'Successfully toasted!',
  pauseDuration: 0,
  position: 'top-center',
  duration: 5000,
  id: '1',
  style: {},
} as HotToast;

describe('Toaster', () => {
  const { getByText } = render(
    <div>
      <button onClick={() => toaster.success('Successfully toasted!')}>
        Success
      </button>
      <Toaster />
    </div>
  );

  test('It should render without errors', () => {
    fireEvent.click(getByText('Success'));
    const message = screen.getByText('Successfully toasted!');
    expect(message).toBeInTheDocument();
  });

  test('It should render success', () => {
    expect(
      <Toast toast={{ ...mockToast, type: 'success' }} />
    ).toMatchSnapshot();
  });

  test('It should render error', () => {
    expect(<Toast toast={{ ...mockToast, type: 'error' }} />).toMatchSnapshot();
  });
});
