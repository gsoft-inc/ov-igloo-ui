/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Tabs, { TabsProps } from './Tabs';

const setup = (props: TabsProps) => {
  return shallow(<Tabs {...props} />);
};

describe('Tabs', () => {
  const defaultComponentSetUp: TabsProps = {
    dataTest: 'ids-tabs-id',
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

  const expectToBeOfStyle = (tag: ShallowWrapper, inline: boolean) => {
    const findHeading = tag.find('.ids-tabs--heading');
    const findInline = tag.find('.ids-tabs--inline');

    expect(findHeading.length === 1).toBe(inline === false);
    expect(findInline.length === 1).toBe(inline === true);
  };

  test('It should render without errors', () => {
    const tabs = component().find({ 'data-test': 'ids-tabs-id' });

    expect(tabs.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component()).toMatchSnapshot();
  });

  test('It should render an inline style', () => {
    const inline = true;
    const tabsDefault = setup(defaultComponentSetUp);
    const tabs = setup({ ...defaultComponentSetUp, isInline: inline });

    // Check without setting isInline and setting it to true.
    expectToBeOfStyle(tabs, inline);
    expectToBeOfStyle(tabsDefault, inline);
  });

  test('It should render a heading style', () => {
    const inline = false;
    const tabs = setup({ ...defaultComponentSetUp, isInline: inline });

    expectToBeOfStyle(tabs, inline);
  });

  test('It should render a tab with a premium icon', () => {
    let tabsArray = [...defaultComponentSetUp.tabs];
    tabsArray[0].premium = true;
    const tabs = setup({
      ...defaultComponentSetUp,
      tabs: tabsArray,
    });
    const findIcon = tabs.find('.ids-tabs__crown-icon');

    expect(findIcon.length).toBe(1);
  });

  test('It should render a tab with a notification icon', () => {
    let tabsArray = [...defaultComponentSetUp.tabs];
    tabsArray[0].notification = true;
    const tabs = setup({
      ...defaultComponentSetUp,
      tabs: tabsArray,
    });
    const findIcon = tabs.find('.ids-tabs__bullet-icon');

    expect(findIcon.length).toBe(1);
  });

  test('It should render tabs with a default index of 1', () => {
    const tabs = setup({ ...defaultComponentSetUp, defaultIndex: 1 });

    const secondTab = tabs.find('.ids-tabs__tab').at(1);

    const findActive = secondTab.find('.ids-tabs__tab--active');

    expect(findActive.length).toBe(1);
  });
});
