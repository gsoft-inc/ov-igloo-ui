/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Carousel from './Carousel';

const setup = (props = {}) => {
  return render(
    <Carousel dataTest="ids-carousel" {...props}>
      <div style={{ background: 'pink', padding: '4rem' }}>Slide 1</div>
      <div style={{ background: 'lightBlue', padding: '4rem' }}>Slide 2</div>
      <div style={{ background: 'lightGreen', padding: '4rem' }}>Slide 3</div>
    </Carousel>
  );
};

describe('Carousel', () => {
  test('It should render without errors', () => {
    setup();
    const wrapper = screen.getByTestId('ids-carousel');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });
});
