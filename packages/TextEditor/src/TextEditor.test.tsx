/**
  * @jest-environment jsdom
  */
 import React from 'react';
 import { render, screen } from '@testing-library/react';
 import MockTooltip from '@igloo-ui/tooltip/src/__mocks__/Tooltip.mock';

 import TextEditor from './TextEditor';

 jest.mock('@igloo-ui/tooltip', () => ({
  __esModule: true,
  default: jest.fn(MockTooltip),
}));

 const setup = (props = {}) => {
  return render(
    <TextEditor dataTest="ids-text-editor" {...props} />
  );
};

 describe('TextEditor', () => {
   test('It should render without errors', () => {
    setup();
     const wrapper = screen.getByTestId('ids-text-editor');
     expect(wrapper).toBeInTheDocument();
   });

   test('It should render a snapshot', () => {
     const {asFragment} = setup();
     expect(asFragment()).toMatchSnapshot();
   });
 });
