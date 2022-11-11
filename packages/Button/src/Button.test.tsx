/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Plus from '@igloo-ui/icons/dist/Plus';

import Button, { ButtonOwnProps } from './Button';

const setUp = (props: ButtonOwnProps = {}) => {
  return render(
    <Button dataTest="ids-btn" {...props}>
      Click me
    </Button>
  );
};

describe('Button Component', (): void => {
  test('It should render without errors', (): void => {
    setUp();
    const wrapper = screen.getByRole('button');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a button with icon', (): void => {
    const container = setUp({
      iconLeading: <Plus size="small" />,
    }).container;
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  test('It should render a primary appearance', (): void => {
    const fragment = setUp().asFragment();
    expect(fragment).toMatchSnapshot();
  });

  test('It should render a secondary appearance', (): void => {
    const fragment = setUp({ appearance: 'secondary' }).asFragment();
    expect(fragment).toMatchSnapshot();
  });

  test('It should render a premium appearance', (): void => {
    const fragment = setUp({ appearance: 'premium' }).asFragment();
    expect(fragment).toMatchSnapshot();
  });

  test('It should render a danger appearance', (): void => {
    const fragment = setUp({ appearance: 'danger' }).asFragment();
    expect(fragment).toMatchSnapshot();
  });

  test('It should render a ghost appearance', (): void => {
    const fragment = setUp({ appearance: 'ghost' }).asFragment();
    expect(fragment).toMatchSnapshot();
  });

  test('It should render a button with a tag', (): void => {
    const { container } = render(
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

    const link = container.querySelector('a');
    expect(link).toBeInTheDocument();
  });
});
