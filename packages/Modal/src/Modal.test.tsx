/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

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
      <Modal isOpen isClosable closeBtnAriaLabel="close">
        Modal content
      </Modal>
    );

    const closeButton = screen.getByLabelText('close');
    expect(closeButton).toBeInTheDocument();
  });
});
