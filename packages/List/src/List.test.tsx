/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Happiness from '@igloo-ui/icons/dist/Happiness';

import List, { Option } from './List';

const largeOptionList: Option[] = [
  {
    type: 'list',
    label: 'Item 1',
    value: '1',
    description: 'just adding some description',
  },
  {
    type: 'list',
    label: 'Item 2 (disabled)',
    value: '2',
    disabled: true,
  },
  {
    type: 'list',
    label: 'Item 3 (focused)',
    value: '3',
    icon: <Happiness size="small" />,
    description: 'just adding some description',
  },
  {
    type: 'list',
    label: 'Item 4 (selected)',
    value: '4',
  },
  {
    type: 'list',
    label: 'Item 5',
    value: '5',
    color: '#74DCC9',
  },
  {
    type: 'list',
    label: 'Item 6',
    value: '6',
  },
  {
    type: 'list',
    label: 'Item 7',
    value: '7',
  },
];

const setup = (props = { options: largeOptionList }) => {
  return render(
    <List dataTest="ids-list" {...props}>
      Hello world
    </List>
  );
};

describe('List', () => {
  test('It should render without errors', () => {
    setup();
    const wrapper = screen.getByTestId('ids-list');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });
});
