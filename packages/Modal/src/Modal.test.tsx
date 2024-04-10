/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import IglooProvider from "@igloo-ui/provider";

import Modal from './Modal';

describe('Modal', () => {
  test('It should render without errors', () => {
    render(<Modal isOpen>Modal content</Modal>);

    const title = screen.getByText('Modal content');
    expect(title).toBeInTheDocument();
  });

  test('It should render the title', () => {
    render(
      <Modal isOpen title="Modal title">
        Modal content
      </Modal>
    );

    const title = screen.getByText('Modal title');
    expect(title).toBeInTheDocument();
  });

  test('It should render the close button', () => {
    render(
      <IglooProvider locale="en-US">
        <Modal isOpen isClosable>
          Modal content
        </Modal>
      </IglooProvider>
    );

    const closeButton = screen.getByLabelText('Close');
    expect(closeButton).toBeInTheDocument();
  });
});
