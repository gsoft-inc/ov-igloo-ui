/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import FormGroup, { FormGroupProps } from './FormGroup';
import Input from '@igloo-ui/input';

const setup = (props: FormGroupProps) => {
  return shallow(<FormGroup {...props}></FormGroup>);
};

describe('FormGroup', () => {
  const inputField = <Input type="text" placeholder="Enter your full name" />;
  const component = () => setup({ children: inputField });

  test('It should render without errors', () => {
    const wrapper = component().find('.ids-form-group');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component()).toMatchSnapshot();
  });

  test('It should render a label', () => {
    const formGroupComponent = () =>
      setup({ children: inputField, label: 'I am a label' });
    const wrapper = formGroupComponent().find('.ids-form-group__label');
    expect(wrapper.length).toBe(1);
  });

  test('It should render an error', () => {
    const formGroupComponent = () =>
      setup({
        children: inputField,
        errorMsg: 'I am an error',
        showError: true,
      });
    const wrapper = formGroupComponent().find('.ids-form-group__error');
    expect(wrapper.length).toBe(1);
  });
});
