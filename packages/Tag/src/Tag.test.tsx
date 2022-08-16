/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Tag, { Appearance, Size, TagProps } from './Tag';
import LabelSolid from '@igloo-ui/icons/dist/LabelSolid';
import IconButton from '@igloo-ui/icon-button';

const setup = (props: TagProps) => {
  return shallow(<Tag {...props} />);
};

describe('Tag', () => {
  const component = (children: React.ReactNode) => setup({ children });

  const expectTpBeOfStyle = (tag: ShallowWrapper, style: Appearance) => {
    const findDefault = tag.find('.ids-tag--default');
    const findPrimary = tag.find('.ids-tag--primary');
    const findSecondary = tag.find('.ids-tag--secondary');
    const findInfo = tag.find('.ids-tag--info');
    const findSuccess = tag.find('.ids-tag--success');
    const findWarning = tag.find('.ids-tag--warning');
    const findError = tag.find('.ids-tag--error');

    expect(findDefault.length === 1).toBe(style === 'default');
    expect(findPrimary.length === 1).toBe(style === 'primary');
    expect(findSecondary.length === 1).toBe(style === 'secondary');
    expect(findInfo.length === 1).toBe(style === 'info');
    expect(findSuccess.length === 1).toBe(style === 'success');
    expect(findWarning.length === 1).toBe(style === 'warning');
    expect(findError.length === 1).toBe(style === 'error');
  };

  const expectTpBeOfSize = (tag: ShallowWrapper, style: Size) => {
    const findMedium = tag.find('.ids-tag--medium');
    const findSmall = tag.find('.ids-tag--small');
    const findXsmall = tag.find('.ids-tag--xsmall');
    const findMicro = tag.find('.ids-tag--micro');

    expect(findMedium.length === 1).toBe(style === 'medium');
    expect(findSmall.length === 1).toBe(style === 'small');
    expect(findXsmall.length === 1).toBe(style === 'xsmall');
    expect(findMicro.length === 1).toBe(style === 'micro');
  };

  test('It should render without errors', () => {
    const wrapper = component('Render without errors').find('.ids-tag');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component('Render snapshot')).toMatchSnapshot();
  });

  test('It should render by default a default style medium tag and no dismiss button', () => {
    const tag = setup({ children: 'Default Tag' });
    const findDismissButton = tag.find('.ids-tag__dismiss-btn');

    expect(findDismissButton.length).toBe(0);

    expectTpBeOfStyle(tag, 'default');
    expectTpBeOfSize(tag, 'medium');
  });

  /* onClose function */

  test('It should render a tag with an onClose action', () => {
    let show = true;
    const props = {
      children: 'Test onClose Tag',
      closable: true,
      onClose: () => {
        show = false;
      },
    };
    const tag = setup(props);

    tag.find(IconButton).simulate('click');
    expect(show).toBeFalsy();
  });

  /* Dismissible */

  test('It should render a tag with a dismiss button', () => {
    const tag = setup({ children: 'Dismissible Tag', closable: true });
    const findDismissButton = tag.find('.ids-tag__dismiss-btn');

    expect(findDismissButton.length).toBe(1);
  });

  test('It should render a tag without a dismiss button', () => {
    const tag = setup({ children: 'Not Dismissible Tag', closable: false });
    const findDismissButton = tag.find('.ids-tag__dismiss-btn');

    expect(findDismissButton.length).toBe(0);
  });

  /* Icon */

  test('It should render a tag without an icon', () => {
    const tag = setup({ children: 'Default Icon Tag' });
    const findIcon = tag.find('.ids-tag__icon');

    expect(findIcon.length).toBe(0);
  });

  test('It should render a tag with an icon', () => {
    const tag = setup({
      children: 'Dismissible Tag',
      icon: <LabelSolid size="small" />,
    });
    const findIcon = tag.find('.ids-tag__icon');

    expect(findIcon.length).toBe(1);
  });

  /* Appearance */

  test('It should render a default style tag', () => {
    const tag = setup({ children: 'Default Tag', appearance: 'default' });

    expectTpBeOfStyle(tag, 'default');
  });

  test('It should render a primary style tag', () => {
    const tag = setup({ children: 'Primary Tag', appearance: 'primary' });

    expectTpBeOfStyle(tag, 'primary');
  });

  test('It should render a secondary style tag', () => {
    const tag = setup({ children: 'Secondary Tag', appearance: 'secondary' });

    expectTpBeOfStyle(tag, 'secondary');
  });

  test('It should render a info style tag', () => {
    const tag = setup({ children: 'Info Tag', appearance: 'info' });

    expectTpBeOfStyle(tag, 'info');
  });

  test('It should render a success style tag', () => {
    const tag = setup({ children: 'Success Tag', appearance: 'success' });

    expectTpBeOfStyle(tag, 'success');
  });

  test('It should render a warning style tag', () => {
    const tag = setup({ children: 'Warning Tag', appearance: 'warning' });

    expectTpBeOfStyle(tag, 'warning');
  });

  test('It should render a error style tag', () => {
    const tag = setup({ children: 'Error Tag', appearance: 'error' });

    expectTpBeOfStyle(tag, 'error');
  });

  /* Size */

  test('It should render a medium tag', () => {
    const tag = setup({ children: 'Medium Tag', size: 'medium' });

    expectTpBeOfSize(tag, 'medium');
  });

  test('It should render a small tag', () => {
    const tag = setup({ children: 'Small Tag', size: 'small' });

    expectTpBeOfSize(tag, 'small');
  });

  test('It should render a xsmall tag', () => {
    const tag = setup({ children: 'XSmall Tag', size: 'xsmall' });

    expectTpBeOfSize(tag, 'xsmall');
  });

  test('It should render a micro tag', () => {
    const tag = setup({ children: 'Micro Tag', size: 'micro' });

    expectTpBeOfSize(tag, 'micro');
  });
});
