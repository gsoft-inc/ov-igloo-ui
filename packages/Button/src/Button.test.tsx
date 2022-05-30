/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Plus from '@igloo-ui/icons/dist/Plus';

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
    const wrapper = component.find('button');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a button with icon', (): void => {
    render(<Button iconLeading={<Plus size="small" />}>Click me</Button>);
    const svg = document.getElementsByTagName('svg');
    expect(svg.length).toBe(1);
  });

  test('It should render a primary appearance', (): void => {
    const button = setUp();
    expect(button).toMatchSnapshot();
  });

  test('It should render a secondary appearance', (): void => {
    const button = setUp({ appearance: 'secondary' });
    expect(button).toMatchSnapshot();
  });

  test('It should render a premium appearance', (): void => {
    const button = setUp({ appearance: 'premium' });
    expect(button).toMatchSnapshot();
  });

  test('It should render a danger appearance', (): void => {
    const button = setUp({ appearance: 'danger' });
    expect(button).toMatchSnapshot();
  });

  test('It should render a ghost appearance', (): void => {
    const button = setUp({ appearance: 'ghost' });
    expect(button).toMatchSnapshot();
  });

  test('It should render a button with a tag', (): void => {
    render(
      <Button
        as="a"
        href="://igloo.officevibe.design"
        target="_blank"
        // @ts-ignore
        name="click me"
      >
        Click me
      </Button>
    );
    const link = document.getElementsByTagName('a');
    expect(link.length).toBe(1);
  });
});
