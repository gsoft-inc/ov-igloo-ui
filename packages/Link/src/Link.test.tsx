/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Plus from '@igloo-ui/icons/dist/Plus';

import Link from './Link';

const setUp = (props = {}) => {
  const component = shallow(
    <Link dataTest="ids-link" {...props}>
      Click me
    </Link>
  );
  return component;
};

describe('Link Component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let component: any;
  beforeEach(() => {
    component = setUp();
  });

  test('It should render without errors', () => {
    const wrapper = component.find('.ids-link');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a link with icon', (): void => {
    const link = mount(
      <Link iconLeading={<Plus size="small" />}>Click me</Link>
    );
    expect(link.find('svg').length).toBe(1);
  });

  test('It should render a primary appearance', (): void => {
    const link = setUp();
    expect(link).toMatchSnapshot();
  });

  test('It should render a secondary appearance', (): void => {
    const link = setUp({ appearance: 'secondary' });
    expect(link).toMatchSnapshot();
  });

  test('It should render a premium appearance', (): void => {
    const link = setUp({ appearance: 'premium' });
    expect(link).toMatchSnapshot();
  });

  test('It should render a danger appearance', (): void => {
    const link = setUp({ appearance: 'danger' });
    expect(link).toMatchSnapshot();
  });

  test('It should render a ghost appearance', (): void => {
    const link = setUp({ appearance: 'ghost' });
    expect(link).toMatchSnapshot();
  });
});
