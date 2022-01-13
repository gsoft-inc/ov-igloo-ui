/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import Plus from '@igloo-ui/icons/dist/Plus';

import IconButton from './IconButton';

const setUp = (props = {}) => {
  const component = shallow(
    <IconButton
      icon={<Plus size="small" />}
      dataTest="ids-icon-btn"
      {...props}
    />
  );
  return component;
};

describe('IconButton Component', (): void => {
  let component: any;
  beforeEach(() => {
    component = setUp();
  });

  test('It should render without errors', (): void => {
    const wrapper = component.find('.ids-icon-btn');
    expect(wrapper.length).toBe(1);
  });
});
