/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
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
  test('It should render without errors', (): void => {
    const iconButton = setUp();
    const wrapper = iconButton.find('.ids-icon-btn');
    expect(wrapper.length).toBe(1);
  });

  test('It should render with xsmall size class', (): void => {
    const iconButton = setUp({ size: 'xsmall' });
    const wrapper = iconButton.find('.ids-icon-btn--xsmall');
    expect(wrapper.length).toBe(1);
  });

  test('It should render with small size class', (): void => {
    const iconButton = setUp({ size: 'small' });
    const wrapper = iconButton.find('.ids-icon-btn--small');
    expect(wrapper.length).toBe(1);
  });

  test('It should render with large size class', (): void => {
    const iconButton = setUp({ size: 'large' });
    const wrapper = iconButton.find('.ids-icon-btn--large');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a button with icon', (): void => {
    const iconButton = mount(<IconButton icon={<Plus size="small" />} />);
    expect(iconButton.find('svg').length).toBe(1);
  });

  test('It should render a primary appearance', (): void => {
    const iconButton = setUp();
    expect(iconButton).toMatchSnapshot();
  });

  test('It should render a secondary appearance', (): void => {
    const iconButton = setUp({ appearance: 'secondary' });
    expect(iconButton).toMatchSnapshot();
  });

  test('It should render a premium appearance', (): void => {
    const iconButton = setUp({ appearance: 'premium' });
    expect(iconButton).toMatchSnapshot();
  });

  test('It should render a danger appearance', (): void => {
    const iconButton = setUp({ appearance: 'danger' });
    expect(iconButton).toMatchSnapshot();
  });

  test('It should render a ghost appearance', (): void => {
    const iconButton = setUp({ appearance: 'ghost' });
    expect(iconButton).toMatchSnapshot();
  });

  test('It should render a default theme', (): void => {
    const iconButton = setUp({ theme: 'default' });
    expect(iconButton).toMatchSnapshot();
  });

  test('It should render a round theme', (): void => {
    const iconButton = setUp({ theme: 'round' });
    expect(iconButton).toMatchSnapshot();
  });
});
