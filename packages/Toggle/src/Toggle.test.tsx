/**
 * @jest-environment jsdom
 */
import React from 'react';
// import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

import Toggle from './Toggle';

describe('Toggle', () => {
  test('It should render without errors', () => {
    const { getByTestId } = render(
      <Toggle dataTest="toggle-1" htmlFor="toggle-1" />
    );
    expect(getByTestId('toggle-1')).toBeInTheDocument();
  });

  test('It should render with label', () => {
    const { getByText } = render(
      <Toggle dataTest="toggle-2" htmlFor="toggle-2">
        Label
      </Toggle>
    );
    expect(getByText('Label')).toBeInTheDocument();
  });

  test('it should render a checked state', () => {
    const { getByTestId } = render(
      <Toggle dataTest="toggle-3" htmlFor="toggle-3" checked />
    );
    expect(getByTestId('toggle-3')).toBeChecked();
  });

  test('it should render a disabled state', () => {
    const { getByTestId } = render(
      <Toggle dataTest="toggle-4" htmlFor="toggle-4" disabled />
    );
    expect(getByTestId('toggle-4')).toBeDisabled();
  });
});
