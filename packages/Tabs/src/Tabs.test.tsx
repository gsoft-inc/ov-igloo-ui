/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';

import Tabs, { TabsProps } from './Tabs';

const setup = (props: TabsProps) => {
  return render(<Tabs {...props} />);
};

const dataTestId = 'ids-tabs-id';

describe('Tabs', () => {
  const defaultComponentSetUp: TabsProps = {
    dataTest: dataTestId,
    tabs: [
      {
        label: 'tab 1',
        children: 'Tab 1 content',
      },
      {
        label: 'tab 2',
        children: 'Tab 2 content',
      },
    ],
  };
  const component = () => setup(defaultComponentSetUp);

  const expectToBeOfStyle = (component: RenderResult, inline: boolean) => {
    const tabs = component.container.firstChild;

    const expectedClass = 'ids-tabs--' + (inline ? 'inline' : 'heading');
    expect(tabs).toHaveClass(expectedClass);
  };

  test('It should render without errors', () => {
    component();
    const tabs = screen.getByTestId(dataTestId);

    expect(tabs).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = component();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render an inline style', () => {
    const inline = true;
    const tabs1 = component();
    const tabs2 = setup({ ...defaultComponentSetUp, isInline: inline });

    // Check without setting isInline and setting it to true.
    expectToBeOfStyle(tabs1, inline);
    expectToBeOfStyle(tabs2, inline);
  });

  test('It should render a heading style', () => {
    const inline = false;
    const tabs = setup({ ...defaultComponentSetUp, isInline: inline });

    expectToBeOfStyle(tabs, inline);
  });

  test('It should render a tab with a premium icon', () => {
    let tabsArray = [...defaultComponentSetUp.tabs];
    tabsArray[0].premium = true;
    const { container } = setup({
      ...defaultComponentSetUp,
      tabs: tabsArray,
    });
    const premiumIcon = container.querySelector('.ids-tab__crown');

    expect(premiumIcon).toBeInTheDocument();
  });

  test('It should render a tab with a notification icon', () => {
    let tabsArray = [...defaultComponentSetUp.tabs];
    tabsArray[0].notification = true;
    const { container } = setup({
      ...defaultComponentSetUp,
      tabs: tabsArray,
    });
    const notificationIcon = container.querySelector('.ids-tab__bullet');

    expect(notificationIcon).toBeInTheDocument();
  });

  test('It should render tabs with a default index of 1', () => {
    const { container } = setup({ ...defaultComponentSetUp, selected: 1 });

    const secondTab = container.querySelectorAll('.ids-tab')[1];

    expect(secondTab).toHaveClass('ids-tab--active');
  });
});
