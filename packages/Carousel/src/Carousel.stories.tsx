import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '@igloo-ui/button';

import readme from '../README.md';

import Carousel from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => {
  const SLIDE_NUM = 3;
  const [selected, setSelected] = React.useState(0);

  const handlePageChange = (index: number) => {
    setSelected(index);
  };

  const handlePrimaryActionClick = () => {
    if (selected < SLIDE_NUM - 1) {
      handlePageChange(selected + 1);
    }
  };

  const handleSecondaryActionClick = () => {
    if (selected > 0) {
      handlePageChange(selected - 1);
    }
  };

  return (
    <Carousel
      {...args}
      onPageChange={handlePageChange}
      currentSlide={selected}
      primaryAction={
        <Button appearance={'primary'} onClick={handlePrimaryActionClick}>
          {selected < SLIDE_NUM - 1 ? 'Next' : 'Done'}
        </Button>
      }
      secondaryAction={
        <Button appearance={'secondary'} onClick={handleSecondaryActionClick}>
          {selected > 0 ? 'Prev' : 'Cancel'}
        </Button>
      }
    >
      <div style={{ background: 'pink', padding: '4rem' }}>Slide 1</div>
      <div style={{ background: 'lightBlue', padding: '4rem' }}>Slide 2</div>
      <div style={{ background: 'lightGreen', padding: '4rem' }}>Slide 3</div>
    </Carousel>
  );
};
export const Overview = Template.bind({});

Overview.args = {};

export const NoActions = () => {
  const [selected, setSelected] = React.useState(0);

  const handlePageChange = (index: number) => {
    setSelected(index);
  };

  return (
    <Carousel onPageChange={handlePageChange} currentSlide={selected}>
      <div style={{ background: 'pink', padding: '4rem' }}>Slide 1</div>
      <div style={{ background: 'lightBlue', padding: '4rem' }}>Slide 2</div>
      <div style={{ background: 'lightGreen', padding: '4rem' }}>Slide 3</div>
    </Carousel>
  );
};
