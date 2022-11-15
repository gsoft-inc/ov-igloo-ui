/**
 * @jest-environment jsdom
 */
import React from 'react';
import {
  fireEvent,
  render,
  RenderResult,
  screen,
} from '@testing-library/react';

import Tag, { Appearance, Size, TagProps } from './Tag';
import LabelSolid from '@igloo-ui/icons/dist/LabelSolid';

const setup = (props: TagProps) => {
  return render(<Tag dataTest="ids-tag" {...props} />);
};

describe('Tag', () => {
  const component = (children: React.ReactNode) => setup({ children });

  const expectToBeOfStyle = (component: RenderResult, style: Appearance) => {
    const tag = component.container.firstChild;
    const expectedClass = 'ids-tag--' + style;
    expect(tag).toHaveClass(expectedClass);
  };

  const expectToBeOfSize = (component: RenderResult, size: Size) => {
    const tag = component.container.firstChild;
    const expectedClass = 'ids-tag--' + size;
    expect(tag).toHaveClass(expectedClass);
  };

  test('It should render without errors', () => {
    component('Render without errors');

    expect(screen.getByTestId('ids-tag')).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = component('Render snapshot');
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render by default a default style medium tag and no dismiss button', () => {
    const tag = setup({ children: 'Default Tag' });
    const findDismissButton = tag.container.querySelector(
      '.ids-tag__dismiss-btn'
    );

    expect(findDismissButton).not.toBeInTheDocument();

    expectToBeOfStyle(tag, 'default');
    expectToBeOfSize(tag, 'medium');
  });

  /* onClose function */

  test('It should render a tag with an onClose action', () => {
    let show = true;
    const props = {
      children: 'Test onClose Tag',
      dismissible: true,
      onClose: () => {
        show = false;
      },
    };
    const { container } = setup(props);

    const dismissBtn = container.querySelector('.ids-tag__dismiss-btn');
    if (dismissBtn) {
      fireEvent.click(dismissBtn);
    }
    expect(show).toBeFalsy();
  });

  /* Dismissible */

  test('It should render a tag with a dismiss button', () => {
    const { container } = setup({
      children: 'Dismissible Tag',
      dismissible: true,
    });
    const findDismissButton = container.querySelector('.ids-tag__dismiss-btn');

    expect(findDismissButton).toBeInTheDocument();
  });

  test('It should render a tag without a dismiss button', () => {
    const { container } = setup({
      children: 'Not Dismissible Tag',
      dismissible: false,
    });
    const findDismissButton = container.querySelector('.ids-tag__dismiss-btn');

    expect(findDismissButton).not.toBeInTheDocument();
  });

  /* Icon */

  test('It should render a tag without an icon', () => {
    const { container } = setup({ children: 'Default Icon Tag' });
    const icon = container.querySelector('.ids-tag__icon');

    expect(icon).not.toBeInTheDocument();
  });

  test('It should render a tag with an icon', () => {
    const { container } = setup({
      children: 'Dismissible Tag',
      icon: <LabelSolid size="small" />,
    });
    const icon = container.querySelector('.ids-tag__icon');

    expect(icon).toBeInTheDocument();
  });

  /* Appearance */

  test('It should render a default style tag', () => {
    const tag = setup({ children: 'Default Tag', appearance: 'default' });

    expectToBeOfStyle(tag, 'default');
  });

  test('It should render a primary style tag', () => {
    const tag = setup({ children: 'Primary Tag', appearance: 'primary' });

    expectToBeOfStyle(tag, 'primary');
  });

  test('It should render a secondary style tag', () => {
    const tag = setup({ children: 'Secondary Tag', appearance: 'secondary' });

    expectToBeOfStyle(tag, 'secondary');
  });

  test('It should render a info style tag', () => {
    const tag = setup({ children: 'Info Tag', appearance: 'info' });

    expectToBeOfStyle(tag, 'info');
  });

  test('It should render a success style tag', () => {
    const tag = setup({ children: 'Success Tag', appearance: 'success' });

    expectToBeOfStyle(tag, 'success');
  });

  test('It should render a warning style tag', () => {
    const tag = setup({ children: 'Warning Tag', appearance: 'warning' });

    expectToBeOfStyle(tag, 'warning');
  });

  test('It should render a error style tag', () => {
    const tag = setup({ children: 'Error Tag', appearance: 'error' });

    expectToBeOfStyle(tag, 'error');
  });

  /* Size */

  test('It should render a medium tag', () => {
    const tag = setup({ children: 'Medium Tag', size: 'medium' });

    expectToBeOfSize(tag, 'medium');
  });

  test('It should render a small tag', () => {
    const tag = setup({ children: 'Small Tag', size: 'small' });

    expectToBeOfSize(tag, 'small');
  });

  test('It should render a xsmall tag', () => {
    const tag = setup({ children: 'XSmall Tag', size: 'xsmall' });

    expectToBeOfSize(tag, 'xsmall');
  });

  test('It should render a micro tag', () => {
    const tag = setup({ children: 'Micro Tag', size: 'micro' });

    expectToBeOfSize(tag, 'micro');
  });
});
