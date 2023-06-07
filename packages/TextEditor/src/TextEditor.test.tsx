/**
  * @jest-environment jsdom
  */
 import React from 'react';
 import { fireEvent, render, screen } from '@testing-library/react';
 import Button from '@igloo-ui/button';

 import TextEditor from './TextEditor';

 const setup = (props = {}) => {
  return render(
    <TextEditor dataTest="ids-text-editor" {...props} />
  );
};

 describe('TextEditor', () => {

   test('It should render without errors', () => {
    setup();
     const wrapper = screen.getByTestId('ids-text-editor');
     expect(wrapper).toBeInTheDocument();
   });

   test('It should render a snapshot', () => {
     const {asFragment} = setup();
     expect(asFragment()).toMatchSnapshot();
   });

  test('displays character limit when maxLength is set', () => {
    const maxLength = 3;
    const {container} = setup({ maxLength: maxLength });
    const limit = container.querySelector('.characters-limit');
    expect(limit).toBeInTheDocument();
    expect(limit).toHaveTextContent(`${maxLength}`);
  });

  test('calls onFocus and onBlur when focused and blurred', () => {
    const onFocusMock = jest.fn();
    const onBlurMock = jest.fn();
    setup({ onFocus: onFocusMock, onBlur: onBlurMock });
    const textbox = screen.getByRole('textbox');
    fireEvent.focus(textbox);
    expect(onFocusMock).toHaveBeenCalled();
    fireEvent.blur(textbox);
    expect(onBlurMock).toHaveBeenCalled();
  });

  test('Shows disabled state', () => {
    setup({ disabled: true });
    const wrapper = screen.getByTestId('ids-text-editor');
    const textbox = wrapper.querySelector('.ids-text-editor__input');
    expect(textbox).toHaveAttribute('contenteditable', 'false');
    expect(wrapper).toHaveClass('ids-text-editor--disabled');
  });

  test('Shows read only state', () => {
    setup({ readOnly: true });
    const wrapper = screen.getByTestId('ids-text-editor');
    const textbox = wrapper.querySelector('.ids-text-editor__input');
    const toolbar = wrapper.querySelector('.ids-toolbar');
    expect(textbox).toHaveAttribute('contenteditable', 'false');
    expect(wrapper).toHaveClass('ids-text-editor--read-only');
    expect(toolbar).not.toBeInTheDocument();
  });

  test('Shows error state', () => {
    setup({ error: true });
    const wrapper = screen.getByTestId('ids-text-editor');
    expect(wrapper).toHaveClass('ids-text-editor--error');
  });

  test('Shows private state', () => {
    setup({ isPrivate: true });
    const wrapper = screen.getByTestId('ids-text-editor');
    const privateElem = wrapper.querySelector('.ids-text-editor__private');
    expect(wrapper).toHaveClass('ids-text-editor--private');
    expect(privateElem).toBeInTheDocument();
  });

  test('Adds toolbar show on focus class', () => {
    const { container } = setup({ showToolbarOnFocus: true });
    const toolbar = container.querySelector('.ids-toolbar');
    expect(toolbar).toHaveClass('ids-toolbar--show-on-focus');
  });

  test('Does not show the toolbar', () => {
    const { container } = setup({ showToolbar: false });
    const toolbar = container.querySelector('.ids-toolbar');
    expect(toolbar).not.toBeInTheDocument();
  });
  
  test('Editor shows the clear button by default', () => {
    const { container } = setup();
    const clearBtn = container.querySelector('.ids-toolbar__btn-clear');
    expect(clearBtn).toBeInTheDocument();
  });
  
  test('Editor does not show the clear button', () => {
    const { container } = setup({ isClearable: false });
    const clearBtn = container.querySelector('.ids-toolbar__btn-clear');
    expect(clearBtn).not.toBeInTheDocument();
  });
  
  test('Editor shows the primary button', () => {
    const { container } = setup({ primaryBtn: <Button onClick={() => {}} size="small">Save</Button> });
    const primaryBtn = container.querySelector('.ids-text-editor__primary-btn');
    expect(primaryBtn).toBeInTheDocument();
  });
 });
