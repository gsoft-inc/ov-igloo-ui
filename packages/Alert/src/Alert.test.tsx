/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { render } from '@testing-library/react';

import Alert, { Type, AlertProps, Appearance } from './Alert';

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
    const findSuccess = alert.find('.ids-alert--success');
    const findWarning = alert.find('.ids-alert--warning');

    expect(findAlert.length).toBe(1);

    expect(findAnnouncement.length === 1).toBe(type === 'announcement');
    expect(findInfo.length === 1).toBe(type === 'info');
    expect(findPremium.length === 1).toBe(type === 'premium');
    expect(findSuccess.length === 1).toBe(type === 'success');
    expect(findWarning.length === 1).toBe(type === 'warning');
  };

  const expectTpBeOfStyle = (alert: ShallowWrapper, style: Appearance) => {
    const findCard = alert.find('.ids-alert--card');
    const findInline = alert.find('.ids-alert--inline');
    const findHorizontal = alert.find('.ids-alert--horizontal');

    expect(findCard.length === 1).toBe(style === 'card');
    expect(findInline.length === 1).toBe(style === 'inline');
    expect(findHorizontal.length === 1).toBe(style === 'horizontal');
  };

  test('It should render without error', () => {
    const wrapper = component('info').find('.ids-alert');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component('info')).toMatchSnapshot();
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

  test('It should render an alert with type "success"', () => {
    const alert = component('success');

    expectToBeOfType(alert, 'success');
  });

  test('It should render an alert with type "warning"', () => {
    const alert = component('warning');

    expectToBeOfType(alert, 'warning');
  });

  describe('by default', () => {
    it('should render an alert with a dismiss button', () => {
      const { getByRole } = render(<Alert type="info">Hello world</Alert>);

      expect(getByRole('button')).toBeInTheDocument();
    });
  });

  describe('when alert is closable', () => {
    it('should render an alert with a dismiss button', () => {
      const { getByRole } = render(
        <Alert type="info" closable>
          Hello world
        </Alert>
      );

      expect(getByRole('button')).toBeInTheDocument();
    });
  });

  describe('when alert is not closable', () => {
    it('should render an alert without a dismiss button', () => {
      const { queryByRole } = render(
        <Alert type="info" closable={false}>
          Hello world
        </Alert>
      );

      expect(queryByRole('button')).not.toBeInTheDocument();
    });
  });

  test('It should render by default a Card style alert', () => {
    const alert = setup({ type: 'info' });

    expectTpBeOfStyle(alert, 'card');
  });

  test('It should render a Card style alert', () => {
    const alert = setup({ type: 'info', appearance: 'card' });

    expectTpBeOfStyle(alert, 'card');
  });

  test('It should render a Inline style alert', () => {
    const alert = setup({ type: 'info', appearance: 'inline' });

    expectTpBeOfStyle(alert, 'inline');
  });

  test('It should render a Horizontal style alert', () => {
    const alert = setup({ type: 'info', appearance: 'horizontal' });

    expectTpBeOfStyle(alert, 'horizontal');
  });

  test('It should render an Alert without action button', () => {
    const alert = setup({ type: 'info', appearance: 'card' });
    const findActionButton = alert.find('Button');

    expect(findActionButton.length).toBe(0);
  });

  test('It should render an Alert with action button', () => {
    const buttonText = 'Supercalifragilisticexpialidocious';
    const { findByText, getByTitle } = render(
      <Alert
        type="info"
        appearance="card"
        button={{
          label: buttonText,
          onClick: () => {
            console.log(buttonText);
          },
        }}
      >
        Hello world
      </Alert>
    );

    findByText(buttonText);
    expect(getByTitle(buttonText)).toHaveTextContent(buttonText);
  });

  test('It should render a Card Alert with an icon', () => {
    const alert = setup({
      type: 'success',
      appearance: 'card',
    });
    const findIcon = alert.find('.ids-alert__icon');

    expect(findIcon.length).toBe(1);
  });

  test('It should render a Inline Alert with an icon', () => {
    const alert = setup({
      type: 'success',
      appearance: 'inline',
    });
    const findIcon = alert.find('.ids-alert__icon');

    expect(findIcon.length).toBe(1);
  });

  test('It should render a Horizontal Alert without an icon', () => {
    const alert = setup({
      type: 'success',
      appearance: 'horizontal',
    });
    const findIcon = alert.find('.ids-alert__icon');

    expect(findIcon.length).toBe(0);
  });

  test('It should render an Alert by default with a medium icon', () => {
    const alert = setup({
      type: 'success',
      appearance: 'card',
    });
    const findIcon = alert.find('.ids-alert__icon--medium-centered');

    expect(findIcon.length).toBe(1);
  });

  test('It should render an Alert with a medium icon', () => {
    const alert = setup({
      type: 'success',
      appearance: 'card',
    });
    const findIcon = alert.find('.ids-alert__icon--medium-centered');

    expect(findIcon.length).toBe(1);
  });

  test('It should render an Alert with a small icon', () => {
    const alert = setup({
      type: 'success',
      appearance: 'card',
      button: {
        label: 'label',
        onClick: () => {
          console.log('onClick');
        },
      },
    });
    const findIcon = alert.find('.ids-alert__icon--small-top');

    expect(findIcon.length).toBe(1);
  });
});
