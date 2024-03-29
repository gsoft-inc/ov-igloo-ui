/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Dropdown from './Dropdown';

describe('Dropdown', () => {
  test('It should render without error and a snapshot', () => {
    const { baseElement } = render(
      <Dropdown content="All settings" dataTest="dropdown1" isOpen>
        <button>Settings</button>
      </Dropdown>
    );

    expect(screen.getByTestId('dropdown1')).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
