import React from 'react';
import Button from '@igloo-ui/button';
import Carousel from '@igloo-ui/carousel';

const Example = () => {
  const SLIDE_NUM = 3;
  const [selected, setSelected] = React.useState(0);

  const handlePageChange = (index) => {
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
    <div className="example" style={{ display: 'block', padding: '4rem' }}>
      <Carousel
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
    </div>
  );
};

export default Example;
