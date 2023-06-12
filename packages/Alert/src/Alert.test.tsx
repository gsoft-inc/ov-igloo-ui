/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Alert, { Type, AlertProps, Appearance } from './Alert';

const setup = (props: AlertProps) => {
  return render(<Alert {...props}>Hello world</Alert>);
};

describe('Alert', () => {
  const component = (type: Type) => setup({ type });

  const expectToBeOfType = (type: Type, dataTest: string) => {
    const wrapper = screen.getByTestId(dataTest);
    const expectedClass = 'ids-alert--' + type;
    expect(wrapper).toHaveClass(expectedClass);
  };

  const expectTpBeOfStyle = (style: Appearance, dataTest: string) => {
    const wrapper = screen.getByTestId(dataTest);
    const expectedClass = 'ids-alert--' + style;
    expect(wrapper).toHaveClass(expectedClass);
  };

  test('It should render without errors', () => {
    setup({ type: 'info', dataTest: 'alert1' });
    const wrapper = screen.getByTestId('alert1');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    expect(component('info').asFragment()).toMatchSnapshot();
  });

  test('It should render an alert with type "announcement"', () => {
    setup({ type: 'announcement', dataTest: 'alert2' });

    expectToBeOfType('announcement', 'alert2');
  });

  test('It should render an alert with type "info"', () => {
    setup({ type: 'info', dataTest: 'alert3' });

    expectToBeOfType('info', 'alert3');
  });

  test('It should render an alert with type "premium"', () => {
    setup({ type: 'premium', dataTest: 'alert4' });

    expectToBeOfType('premium', 'alert4');
  });

  test('It should render an alert with type "success"', () => {
    component('success');
    setup({ type: 'success', dataTest: 'alert5' });

    expectToBeOfType('success', 'alert5');
  });

  test('It should render an alert with type "warning"', () => {
    component('warning');
    setup({ type: 'warning', dataTest: 'alert6' });

    expectToBeOfType('warning', 'alert6');
  });

  test('It should render by default an alert with a dismiss button', () => {
    const container = component('info').container;
    const findDismissButton = container.querySelector(
      '.ids-alert__dismiss-btn'
    );

    expect(findDismissButton).toBeInTheDocument();
  });

  test('It should render an alert with a dismiss button', () => {
    const container = setup({ type: 'info', closable: true }).container;
    const findDismissButton = container.querySelector(
      '.ids-alert__dismiss-btn'
    );

    expect(findDismissButton).toBeInTheDocument();
  });

  test('It should render an alert without a dismiss button', () => {
    const container = setup({ type: 'info', closable: false }).container;
    const findDismissButton = container.querySelector(
      '.ids-alert__dismiss-btn'
    );

    expect(findDismissButton).not.toBeInTheDocument();
  });

  test('It should render by default a Card style alert', () => {
    setup({ type: 'info', dataTest: 'alert7' });

    expectTpBeOfStyle('card', 'alert7');
  });

  test('It should render a Card style alert', () => {
    setup({ type: 'info', appearance: 'card', dataTest: 'alert8' });

    expectTpBeOfStyle('card', 'alert8');
  });

  test('It should render a Inline style alert', () => {
    setup({ type: 'info', appearance: 'inline', dataTest: 'alert9' });

    expectTpBeOfStyle('inline', 'alert9');
  });

  test('It should render a Horizontal style alert', () => {
    setup({ type: 'info', appearance: 'horizontal', dataTest: 'alert10' });

    expectTpBeOfStyle('horizontal', 'alert10');
  });

  test('It should render an Alert without action button', () => {
    const container = setup({ type: 'info', appearance: 'card' }).container;
    const findActionButton = container.querySelector('.ids-alert__action-btn');

    expect(findActionButton).not.toBeInTheDocument();
  });

  test('It should render an Alert with action button', () => {
    const buttonText = 'Supercalifragilisticexpialidocious';
    render(
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

    expect(screen.getByTitle(buttonText)).toHaveTextContent(buttonText);
  });

  test('It should render a Card Alert with an icon', () => {
    const container = setup({
      type: 'success',
      appearance: 'card',
    }).container;
    const findIcon = container.querySelector('.ids-alert__icon');

    expect(findIcon).toBeInTheDocument();
  });

  test('It should render a Inline Alert with an icon', () => {
    const container = setup({
      type: 'success',
      appearance: 'inline',
    }).container;
    const findIcon = container.querySelector('.ids-alert__icon');

    expect(findIcon).toBeInTheDocument();
  });

  test('It should render a Horizontal Alert without an icon', () => {
    const container = setup({
      type: 'success',
      appearance: 'horizontal',
    }).container;
    const findIcon = container.querySelector('.ids-alert__icon');

    expect(findIcon).not.toBeInTheDocument();
  });

  test('It should render an Alert by default with a medium icon', () => {
    const container = setup({
      type: 'success',
      appearance: 'card',
    }).container;
    const findIcon = container.querySelector(
      '.ids-alert__icon--medium-centered'
    );

    expect(findIcon).toBeInTheDocument();
  });

  test('It should render an Alert with a medium icon', () => {
    const container = setup({
      type: 'success',
      appearance: 'card',
    }).container;
    const findIcon = container.querySelector(
      '.ids-alert__icon--medium-centered'
    );

    expect(findIcon).toBeInTheDocument();
  });

  test('It should render an Alert with a small icon', () => {
    const container = setup({
      type: 'success',
      appearance: 'card',
      button: {
        label: 'label',
        onClick: () => {
          console.log('onClick');
        },
      },
    }).container;
    const findIcon = container.querySelector('.ids-alert__icon--small-top');

    expect(findIcon).toBeInTheDocument();
  });

  test('It should render an Alert with no icon', () => {
    const container = setup({
      type: 'success',
      appearance: 'card',
      icon: null
    }).container;
    const findIcon = container.querySelector('.ids-alert__icon');

    expect(findIcon).not.toBeInTheDocument();
  });

  test('It should render an Alert with a custom icon', () => {
    const container = setup({
      type: 'success',
      appearance: 'card',
      icon: <span className="ids-alert__custom-icon" />
    }).container;
    const findIcon = container.querySelector('.ids-alert__custom-icon');

    expect(findIcon).toBeInTheDocument();
  });
});
