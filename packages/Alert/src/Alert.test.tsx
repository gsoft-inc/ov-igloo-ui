/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Alert, { Type, AlertProps, Style } from './Alert';

const setup = (props: AlertProps) => {
  return shallow(<Alert {...props}>Hello world</Alert>);
};

describe('Alert', () => {
  const component = (type: Type) => setup({ type });

  const expectToBeOfType = (alert: ShallowWrapper, type: Type) => {
    const findAlert = alert.find('.ids-alert');

    const findAnnouncement = alert.find('.ids-alert--announcement');
    const findInfo = alert.find('.ids-alert--info');
    const findPremium = alert.find('.ids-alert--premium');
    const findPromo = alert.find('.ids-alert--promo');
    const findSuccess = alert.find('.ids-alert--success');
    const findWarning = alert.find('.ids-alert--warning');

    expect(findAlert.length).toBe(1);

    expect(findAnnouncement.length === 1).toBe(type === 'announcement');
    expect(findInfo.length === 1).toBe(type === 'info');
    expect(findPremium.length === 1).toBe(type === 'premium');
    expect(findPromo.length === 1).toBe(type === 'promo');
    expect(findSuccess.length === 1).toBe(type === 'success');
    expect(findWarning.length === 1).toBe(type === 'warning');
  };

  const expectTpBeOfStyle = (alert: ShallowWrapper, style: Style) => {
    const findCard = alert.find('.ids-alert--card');
    const findInline = alert.find('.ids-alert--inline');
    const findHorizontal = alert.find('.ids-alert--horizontal');

    expect(findCard.length === 1).toBe(style === 'card');
    expect(findInline.length === 1).toBe(style === 'inline');
    expect(findHorizontal.length === 1).toBe(style === 'horizontal');
  };

  test('It should render without errors', () => {
    const wrapper = component('none').find('.ids-alert');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component('none')).toMatchSnapshot();
  });

  test('It should render an alert with type "announcement"', () => {
    const alert = component('announcement');

    expectToBeOfType(alert, 'announcement');
  });

  test('It should render an alert with type "info"', () => {
    const alert = component('info');

    expectToBeOfType(alert, 'info');
  });

  test('It should render an alert with type "premium"', () => {
    const alert = component('premium');

    expectToBeOfType(alert, 'premium');
  });

  test('It should render an alert with type "promo"', () => {
    const alert = component('promo');

    expectToBeOfType(alert, 'promo');
  });

  test('It should render an alert with type "success"', () => {
    const alert = component('success');

    expectToBeOfType(alert, 'success');
  });

  test('It should render an alert with type "warning"', () => {
    const alert = component('warning');

    expectToBeOfType(alert, 'warning');
  });

  test('It should render an alert with type "none"', () => {
    const alert = component('none');

    expectToBeOfType(alert, 'none');
  });

  test('It should render by default an alert with a dismiss button', () => {
    const alert = setup({ type: 'none' });
    const findDismissButton = alert.find('.ids-alert__dismiss-button');

    expect(findDismissButton.length).toBe(1);
  });

  test('It should render an alert with a dismiss button', () => {
    const alert = setup({ type: 'none', isDismissible: true });
    const findDismissButton = alert.find('.ids-alert__dismiss-button');

    expect(findDismissButton.length).toBe(1);
  });

  test('It should render an alert without a dismiss button', () => {
    const alert = setup({ type: 'none', isDismissible: false });
    const findDismissButton = alert.find('.ids-alert__dismiss-button');

    expect(findDismissButton.length).toBe(0);
  });

  test('It should render by default a Card style alert', () => {
    const alert = setup({ type: 'none' });

    expectTpBeOfStyle(alert, 'card');
  });

  test('It should render a Card style alert', () => {
    const alert = setup({ type: 'none', alertStyle: 'card' });

    expectTpBeOfStyle(alert, 'card');
  });

  test('It should render a Inline style alert', () => {
    const alert = setup({ type: 'none', alertStyle: 'inline' });

    expectTpBeOfStyle(alert, 'inline');
  });

  test('It should render a Horizontal style alert', () => {
    const alert = setup({ type: 'none', alertStyle: 'horizontal' });

    expectTpBeOfStyle(alert, 'horizontal');
  });

  test('It should render an Alert without action button', () => {
    const alert = setup({ type: 'none', alertStyle: 'card' });
    const findActionButton = alert.find('Button');

    expect(findActionButton.length).toBe(0);
  });

  test('It should render an Alert with action button', () => {
    const buttonText = 'Supercalifragilisticexpialidocious';
    const alert = setup({
      type: 'none',
      alertStyle: 'card',
      alertActionText: buttonText,
      onAlertActionClick: () => {
        console.log(buttonText);
      },
    });
    const findActionButton = alert.find('Button');

    expect(findActionButton.length).toBe(1);
    expect(findActionButton.html()).toContain(buttonText);
  });

  test('It should render a Card Alert with an icon', () => {
    const alert = setup({
      type: 'success',
      alertStyle: 'card',
    });
    const findIcon = alert.find('.ids-alert__icon');

    expect(findIcon.length).toBe(1);
  });

  test('It should render a Inline Alert with an icon', () => {
    const alert = setup({
      type: 'success',
      alertStyle: 'inline',
    });
    const findIcon = alert.find('.ids-alert__icon');

    expect(findIcon.length).toBe(1);
  });

  test('It should render a Horizontal Alert without an icon', () => {
    const alert = setup({
      type: 'success',
      alertStyle: 'horizontal',
    });
    const findIcon = alert.find('.ids-alert__icon');

    expect(findIcon.length).toBe(0);
  });

  test('It should render an Alert by default with a medium icon', () => {
    const alert = setup({
      type: 'success',
      alertStyle: 'card',
    });
    const findIcon = alert.find('.ids-alert__icon--medium-centered');

    expect(findIcon.length).toBe(1);
  });

  test('It should render an Alert with a medium icon', () => {
    const alert = setup({
      type: 'success',
      alertStyle: 'card',
      iconStyle: 'medium-centered',
    });
    const findIcon = alert.find('.ids-alert__icon--medium-centered');

    expect(findIcon.length).toBe(1);
  });

  test('It should render an Alert with a small icon', () => {
    const alert = setup({
      type: 'success',
      alertStyle: 'card',
      iconStyle: 'small-top',
    });
    const findIcon = alert.find('.ids-alert__icon--small-top');

    expect(findIcon.length).toBe(1);
  });
});
