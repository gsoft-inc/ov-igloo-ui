/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Plus from '@igloo-ui/icons/dist/Plus';

import Hyperlink from './Hyperlink';

const setUp = (props = {}) => {
  const component = shallow(
    <Hyperlink dataTest="ids-link" {...props}>
      Click me
    </Hyperlink>
  );
  return component;
};

describe('Hyperlink Component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let component: any;
  beforeEach(() => {
    component = setUp();
  });

  test('It should render without errors', () => {
    const wrapper = component.find('.ids-link');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a hyperlink with icon', (): void => {
    render(<Hyperlink iconLeading={<Plus size="small" />}>Click me</Hyperlink>);
    const svg = document.getElementsByTagName('svg');
    expect(svg.length).toBe(1);
  });

  test('It should render a primary appearance', (): void => {
    const hyperlink = setUp();
    expect(hyperlink).toMatchSnapshot();
  });

  test('It should render a secondary appearance', (): void => {
    const hyperlink = setUp({ appearance: 'secondary' });
    expect(hyperlink).toMatchSnapshot();
  });

  test('It should render a premium appearance', (): void => {
    const hyperlink = setUp({ appearance: 'premium' });
    expect(hyperlink).toMatchSnapshot();
  });

  test('It should render a danger appearance', (): void => {
    const hyperlink = setUp({ appearance: 'danger' });
    expect(hyperlink).toMatchSnapshot();
  });

  test('It should render a ghost appearance', (): void => {
    const hyperlink = setUp({ appearance: 'ghost' });
    expect(hyperlink).toMatchSnapshot();
  });
});
