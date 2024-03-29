/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import OptionButton, { OptionButtonProps, ButtonType } from './OptionButton';
import LabelSolid from '@igloo-ui/icons/dist/LabelSolid';

const setup = (props: OptionButtonProps) => {
  return render(<OptionButton {...props} />);
};

describe('OptionButton', () => {
  const defaultComponentSetUp: OptionButtonProps = {
    children: 'I am an option button',
    htmlFor: 'option-button-test-1',
    dataTest: 'option-button-test-1',
  };
  const component = () => setup(defaultComponentSetUp);

  const expectToHaveProperIcon = (
    buttonType: ButtonType,
    disabled: boolean
  ) => {
    const props = {
      children: 'option button',
      htmlFor: 'option-button-test-5',
      buttonType: buttonType,
      disabled: disabled,
    };
    let optionButtonClassName = '';
    render(<OptionButton {...props} />);
    switch (buttonType) {
      case 'optionScale':
        if (disabled) {
          optionButtonClassName =
            'ids-option-button__option-scale-icon disabled';
        }
        optionButtonClassName = 'ids-option-button__option-scale-icon';
        break;
      case 'multipleChoice':
        if (disabled) {
          optionButtonClassName =
            'ids-option-button__multiple-choice-icon disabled';
        }
        optionButtonClassName = 'ids-option-button__multiple-choice-icon';
        break;
      case 'likert':
        if (disabled) {
          optionButtonClassName = 'ids-option-button__likert-icon disabled';
        }
        optionButtonClassName = 'ids-option-button__likert-icon';
        break;
      default:
        if (disabled) {
          optionButtonClassName = 'ids-option-button__text-icon disabled';
        }
        optionButtonClassName = 'ids-option-button__text-icon';
        break;
    }

    const svg = document.getElementsByClassName(optionButtonClassName);
    expect(svg).toBeTruthy();
  };

  test('It should render without errors', () => {
    component();
    const wrapper = screen.getByTestId('option-button-test-1');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = component();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a checked state', () => {
    const { getByRole } = render(
      <OptionButton htmlFor="option-button-test-2" checked onChange={() => {}}>
        Hello World!
      </OptionButton>
    );
    const radio = getByRole('radio');
    expect(radio).toBeChecked();
  });

  test('It should render a disabled state', () => {
    const { getByRole } = render(
      <OptionButton htmlFor="option-button-test-3" disabled onChange={() => {}}>
        Hello World!
      </OptionButton>
    );
    const radio = getByRole('radio');
    expect(radio).toBeDisabled();
  });

  test('It should render a unchecked look', () => {
    setup({ ...defaultComponentSetUp, unchecked: true });
    const radio = screen.getByTestId('option-button-test-1');
    expect(radio).toHaveClass('ids-option-button--unchecked');
  });

  test('It should render an option button with an icon', () => {
    render(
      <OptionButton
        htmlFor="option-button-test-4"
        icon={<LabelSolid size="small" />}
      >
        I am an option button with an icon
      </OptionButton>
    );
    const svg = document.getElementsByTagName('svg');
    expect(svg.length).toBe(1);
  });

  test('It should render an option button with the proper icon', () => {
    expectToHaveProperIcon('likert', false);
    expectToHaveProperIcon('likert', true);
    expectToHaveProperIcon('multipleChoice', false);
    expectToHaveProperIcon('multipleChoice', true);
    expectToHaveProperIcon('optionScale', false);
    expectToHaveProperIcon('optionScale', true);
    expectToHaveProperIcon('text', false);
    expectToHaveProperIcon('text', true);
  });
});
