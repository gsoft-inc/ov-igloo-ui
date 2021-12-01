/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Toast as HotToast } from 'react-hot-toast';

import Toaster, { toaster } from './Toaster';
import Toast from './Toast';
import { debug } from 'console';

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
  const component = mount(
    <div>
      <button onClick={() => toaster.success('Successfully toasted!')}>
        Success
      </button>
      <Toaster />
    </div>
  );

  test('It should render without errors', () => {
    component.find('button').simulate('click');
    const wrapper = component.find('.ids-toaster');
    expect(wrapper.length).toBe(1);
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
