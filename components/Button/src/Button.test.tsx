import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils';
import Button from './Button';

const setUp = (props = {}) => {
  const component = shallow(
    <Button dataTest="ids-btn" {...props}>
      Click me
    </Button>
  );
  return component;
};

describe('Button Component', (): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let component: any;
  beforeEach(() => {
    component = setUp();
  });

  test('It should render without errors', (): void => {
    // console.log(component.debug());
    const wrapper = findByTestAttr(component, 'ids-btn');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a primary appearance', (): void => {
    expect(component).toMatchSnapshot();
  });
});
