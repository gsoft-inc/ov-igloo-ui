/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Textarea from './Textarea';

const setUp = (props = {}) => {
  const component = shallow(<Textarea dataTest="ids-textarea" {...props} />);
  return component;
};

describe('Textarea', () => {
  test('It should render without errors', () => {
    const component = setUp();
    const wrapper = component.find('.ids-textarea');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    const component = setUp();
    expect(component).toMatchSnapshot();
  });

  test('It should render disabled', (): void => {
    const component = setUp({ disabled: true });
    const wrapper = component.find('.ids-textarea--disabled');
    expect(wrapper.length).toBe(1);
  });

  test('It should render an error look', (): void => {
    const component = setUp({ error: true });
    const wrapper = component.find('.ids-textarea--error');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a character count', (): void => {
    const component = setUp({ showCharactersIndicator: true, maxLength: 100 });
    const wrapper = component.find('.ids-textarea__char-indicator');
    expect(wrapper.length).toBe(1);
  });

  test('It should not render a character count without max length', (): void => {
    const component = setUp({ showCharactersIndicator: true });
    const wrapper = component.find('.ids-textarea__char-indicator');
    expect(wrapper.length).toBe(0);
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
    const component = setUp(props);

    component.find('.ids-textarea__field').simulate('change', event);
    expect(changed).toBeTruthy();
  });
});
