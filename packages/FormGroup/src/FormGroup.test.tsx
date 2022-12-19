/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import FormGroup, { FormGroupProps } from './FormGroup';
import Input from '@igloo-ui/input';

const inputField = <Input type="text" placeholder="Enter your full name" />;
const defaultProps = {
  children: inputField,
};

const setup = (props: FormGroupProps = { ...defaultProps }) => {
  return render(<FormGroup {...props}></FormGroup>);
};

describe('FormGroup', () => {
  test('It should render without errors', () => {
    setup({ ...defaultProps, dataTest: 'formGroup1' });
    const wrapper = screen.getByTestId('formGroup1');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a label', () => {
    setup({ ...defaultProps, label: 'I am a label' });
    const wrapper = screen.getByText('I am a label');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render an error', () => {
    setup({
      ...defaultProps,
      message: 'I am an error',
      showMessage: true,
    });
    const wrapper = screen.getByText('I am an error');
    expect(wrapper).toBeInTheDocument();
  });
});
