/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Dialog from './Dialog';

describe('Dialog', () => {
  test('It should render without error and a snapshot', () => {
    const isOpen = true;
    const { asFragment } = render(
      <Dialog
        dataTest="dialog1"
        title="Dialog title"
        subTitle="Dialog sub title"
        dismissText="No"
        validateText="Yes"
        onDismiss={() => !isOpen}
        onValidate={() => console.log('validated')}
        isOpen={isOpen}
      />
    );
    expect(screen.getByTestId('dialog1')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render the title', () => {
    const isOpen = true;
    render(
      <Dialog
        title="Dialog title"
        subTitle="Dialog sub title"
        dismissText="No"
        validateText="Yes"
        onDismiss={() => !isOpen}
        onValidate={() => console.log('validated')}
        isOpen={isOpen}
      />
    );

    const title = screen.getByText('Dialog title');
    expect(title).toBeInTheDocument();
  });

  test('It should render the sub title', () => {
    const isOpen = true;
    render(
      <Dialog
        title="Dialog title"
        subTitle="Dialog sub title"
        dismissText="No"
        validateText="Yes"
        onDismiss={() => !isOpen}
        onValidate={() => console.log('validated')}
        isOpen={isOpen}
      />
    );

    const subtitle = screen.getByText('Dialog sub title');
    expect(subtitle).toBeInTheDocument();
  });

  test('It should render the dissmiss button', () => {
    const isOpen = true;
    render(
      <Dialog
        title="Dialog title"
        subTitle="Dialog sub title"
        dismissText="No"
        validateText="Yes"
        onDismiss={() => !isOpen}
        onValidate={() => console.log('validated')}
        isOpen={isOpen}
      />
    );

    const dismissButton = screen.getByText('No');
    expect(dismissButton).toBeInTheDocument();
  });

  test('It should render the validate button', () => {
    const isOpen = true;
    render(
      <Dialog
        title="Dialog title"
        subTitle="Dialog sub title"
        dismissText="No"
        validateText="Yes"
        onDismiss={() => !isOpen}
        onValidate={() => console.log('validated')}
        isOpen={isOpen}
      />
    );

    const validateButton = screen.getByText('Yes');
    expect(validateButton).toBeInTheDocument();
  });
});
